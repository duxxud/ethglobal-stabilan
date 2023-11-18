// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./interfaces/IPriceFeedAggregator.sol";
import "./interfaces/IBackingToken.sol";
import "./interfaces/IOptionToken.sol";
import "./interfaces/IStabilanCore.sol";
import "./interfaces/ITokenFactory.sol";
import "./libraries/WadRayMath.sol";

contract StabilanCore is IStabilanCore, Ownable {
    using WadRayMath for uint256;

    uint256 public constant MAX_EPOCH_DURATION = 6; // in months

    uint256 public currentEpoch;
    ITokenFactory public tokenFactory;
    IPriceFeedAggregator public priceFeedAggregator;

    mapping(address => mapping(uint256 => AssetEpochData)) assetsData;
    mapping(address => AssetConfig) public assetsConfig;

    address[] public supportedAssets;

    IOptionToken[] public allOptionTokens;
    IBackingToken[] public allBackingTokens;

    constructor(ITokenFactory _tokenFactory, IPriceFeedAggregator _priceFeedAggregator, address _owner)
        Ownable(_owner)
    {
        tokenFactory = _tokenFactory;
        priceFeedAggregator = _priceFeedAggregator;
        currentEpoch = 1;
        priceFeedAggregator = _priceFeedAggregator;
    }

    function setupAsset(address assetAddress, uint256 expectedApy) external onlyOwner {}

    function updateEpoch() external {
        currentEpoch++;

        for (uint256 i = 0; i < supportedAssets.length; i++) {
            address assetAddress = supportedAssets[i];

            AssetConfig storage assetConfig = assetsConfig[assetAddress];
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + MAX_EPOCH_DURATION];

            assetData.optionToken = tokenFactory.deployOptionToken(
                "Option", "OPT", assetAddress, currentEpoch + MAX_EPOCH_DURATION, address(this)
            );
            assetData.backingToken = tokenFactory.deployBackingToken(
                "Backing", "BCK", assetAddress, currentEpoch + MAX_EPOCH_DURATION, address(this)
            );

            allOptionTokens.push(assetData.optionToken);
            allBackingTokens.push(assetData.backingToken);

            uint256 currAssetPrice = priceFeedAggregator.getLatestPrice(assetAddress);
            assetsData[assetAddress][currentEpoch].strikePrice =
                Math.mulDiv(currAssetPrice, assetConfig.strikePricePercent, 1e18);
        }
    }

    function buyOptions(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {
        AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + durationEpochs - 1];
        AssetConfig storage assetConfig = assetsConfig[assetAddress];

        uint256 optionsPrice = getOptionsPrice(assetAddress, amount, durationEpochs, address(assetData.backingToken.underlying()));
        if(msg.value < optionsPrice) {
            revert NotEnoughETHSent(msg.value, optionsPrice);
        }

        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(address(assetData.backingToken.underlying()));
        uint256 currStrikePrice = assetsData[assetAddress][currentEpoch].strikePrice;
        uint256 insuringAssetValue = amount.wadMul(currStrikePrice);

        for (uint256 i = 0; i < durationEpochs; i++) {
            AssetEpochData storage epochData = assetsData[assetAddress][currentEpoch + i];

            uint256 totalAvailableCollateral = epochData.collateralAmount.wadDiv(assetConfig.collateralRatio);
            uint256 totalAvailableCollateralUSD = totalAvailableCollateral.wadMul(collateralAssetPrice);

            if (insuringAssetValue > totalAvailableCollateralUSD) {
                revert NotEnoughBacking(currentEpoch + i, insuringAssetValue, totalAvailableCollateralUSD);
            }

            epochData.reservedAmount += amount;
        }

        assetData.optionToken.mint(msg.sender, amount);
    }

    function getYearlyCost(address assetAddress, uint256 amount, uint256 durationEpochs, address payingToken)
        public
        view
        returns (uint256)
    {
        // util = (reserved/collateral) / collateralRatio
        // avgUtil = average in next durationEpochs

        AssetConfig storage assetConfig = assetsConfig[assetAddress];
        AssetEpochData storage currEpochData = assetsData[assetAddress][currentEpoch];

        uint256 currStrikePrice = currEpochData.strikePrice;
        uint256 collateralPrice = priceFeedAggregator.getLatestPrice(address(currEpochData.backingToken.underlying()));
        
        uint256 utilAvg = 0;
        for (uint256 i = 0; i < durationEpochs; i++) {
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + i];

            uint256 reservedUSD = assetData.reservedAmount.wadMul(currStrikePrice);
            uint256 collateralUSD = assetData.collateralAmount.wadMul(collateralPrice);
            uint256 util = reservedUSD.wadDiv(collateralUSD).wadDiv(assetConfig.collateralRatio);
            utilAvg += util;
        }
        utilAvg /= durationEpochs;

        uint256 yearlyCost = (2 * utilAvg).wadMul(assetConfig.expectedApy);
        return yearlyCost;
    }

    function getOptionsPrice(address assetAddress, uint256 amount, uint256 durationEpochs, address payingToken)
        public
        view
        returns (uint256)
    {
        AssetEpochData storage currEpochData = assetsData[assetAddress][currentEpoch];

        uint256 yearlyCost = getYearlyCost(assetAddress, amount, durationEpochs, payingToken);
        uint256 pricePercent = (yearlyCost * durationEpochs) / 12;

        uint256 totalPriceUSD = amount.wadMul(currEpochData.strikePrice).wadMul(pricePercent);

        uint256 payingTokenPrice = priceFeedAggregator.getLatestPrice(payingToken);
        uint256 totalPrice = amount.wadDiv(payingTokenPrice);

        return totalPrice;
    }

    function getAssetAPY(address assetAddress) public view returns(uint256) {
        return assetsConfig[assetAddress].expectedApy;
    }

    function executeOptions(IOptionToken option, uint256 amount) external {
        address underlyingAsset = address(option.underlying());
        uint256 underlyingAssetPrice = priceFeedAggregator.getLatestPrice(underlyingAsset);

        AssetEpochData storage assetData = assetsData[underlyingAsset][currentEpoch];

        if (assetData.strikePrice > underlyingAssetPrice) {
            revert CannotExecute();
        }

        address collateralAsset = address(assetData.backingToken.underlying());
        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(collateralAsset);
        uint256 collateralAmount = Math.mulDiv(amount, assetData.strikePrice, collateralAssetPrice);

        for (uint256 i = currentEpoch; i < option.endEpoch(); i++) {
            assetsData[underlyingAsset][i].reservedAmount -= amount;
            assetsData[underlyingAsset][i].collateralAmount -= collateralAmount;
        }

        //TODO: implement burn from because burnFrom will require allowance
        //TODO: add safe ERC20 library
        option.burn(msg.sender, amount);
        IERC20(collateralAsset).transfer(msg.sender, collateralAmount);
    }

    function backing(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {
        for (uint256 i = 0; i < durationEpochs; i++) {
            AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + i];

            assetData.collateralAmount += amount;
        }

        IBackingToken backingToken = assetsData[assetAddress][currentEpoch + durationEpochs - 1].backingToken;
        backingToken.mint(msg.sender, amount);
    }

    function claimBackingRewards(address backingToken) external {}

    function allStabilanTokens() external view returns (IOptionToken[] memory, IBackingToken[] memory) {
        return (allOptionTokens, allBackingTokens);
    }
}
