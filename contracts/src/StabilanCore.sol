// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract StabilanCore is Ownable {

    uint256 currentEpoch;

    constructor(address _owner) Ownable(_owner) {
        currentEpoch = 1;
    }

    function setupAsset(address assetAddress, uint256 expectedApy) external onlyOwner {

    }

    function buyOptions(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {

    }

    function executeOptions(address optionAddress, uint256 amount) external {

    }

    function backing(address assetAddress, uint256 amount, uint256 durationEpochs) external payable {

    }

    function claimBackingRewards(address backingToken) external {

    }
}
