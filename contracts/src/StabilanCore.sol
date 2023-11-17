// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IBackingToken.sol";
import "./interfaces/IOptionToken.sol";
import "./interfaces/IStabilanCore.sol";
import "./libraries/OptionsLogicLibrary.sol";

contract StabilanCore is IStabilanCore, Ownable {
    using OptionsLogicLibrary for AssetEpochData;

    uint256 public currentEpoch;

    mapping(address => mapping(uint256 => AssetEpochData)) assetsData;

    constructor(address _owner) Ownable(_owner) {
        currentEpoch = 1;
    }

    function setupAsset(address assetAddress, uint256 expectedApy) external onlyOwner {

    }

    function buyOptions(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {
        assetsData[assetAddress][currentEpoch + durationEpochs - 1].buyOptions(msg.sender, amount);
    }

    function executeOptions(address optionAddress, uint256 amount) external {

    }

    function backing(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {

    }

    function claimBackingRewards(address backingToken) external {

    }
}
