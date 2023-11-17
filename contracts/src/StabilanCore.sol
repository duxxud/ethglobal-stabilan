// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "./interfaces/IPriceFeedAggregator.sol";
import "./interfaces/IBackingToken.sol";
import "./interfaces/IOptionToken.sol";
import "./interfaces/IStabilanCore.sol";

contract StabilanCore is IStabilanCore, Ownable {
    uint256 public currentEpoch;
    IPriceFeedAggregator public priceFeedAggregator;

    mapping(address => mapping(uint256 => AssetEpochData)) assetsData;

    constructor(address _owner) Ownable(_owner) {
        currentEpoch = 1;
    }

    function setupAsset(address assetAddress, uint256 expectedApy) external onlyOwner {}

    function buyOptions(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {
        AssetEpochData storage assetData = assetsData[assetAddress][currentEpoch + durationEpochs - 1];

        uint256 collateralAssetPrice = priceFeedAggregator.getLatestPrice(address(assetData.backingToken.underlying()));
        uint256 totalAvailableCollateral = Math.mulDiv(assetData.collateralAmount, assetData.collateralRatio, 1e18);
        uint256 totalAvailableCollateralValue = Math.mulDiv(totalAvailableCollateral, collateralAssetPrice, 1e18);
        uint256 currStrikePrice = assetsData[assetAddress][currentEpoch].strikePrice;
        uint256 insuringAssetValue = Math.mulDiv(amount, currStrikePrice, 1e18);

        if (insuringAssetValue > totalAvailableCollateralValue) {
            revert NotEnoughBacking();
        }

        for (uint256 i = 0; i < durationEpochs; i++) {
            assetsData[assetAddress][currentEpoch + i].reservedAmount += amount;
        }

        assetData.optionToken.mint(msg.sender, amount);
    }

    function executeOptions(address optionAddress, uint256 amount) external {}

    function backing(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {}

    function claimBackingRewards(address backingToken) external {}
}
