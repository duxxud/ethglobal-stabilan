// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

interface IPriceFeedAggregator {
    /// @notice Returns the latest price of an asset
    /// @param asset The asset to get the price of
    function getLatestPrice(address asset) external view returns (uint256);
}
