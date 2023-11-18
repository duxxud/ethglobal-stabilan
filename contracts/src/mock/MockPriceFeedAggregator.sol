// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IPriceFeedAggregator} from "../interfaces/IPriceFeedAggregator.sol";

contract MockPriceFeedAggregator is IPriceFeedAggregator {
    mapping(address => uint256) public prices;

    function setPrice(address asset, uint256 price) external {
        prices[asset] = price;
    }

    function getLatestPrice(address asset) external view override returns (uint256) {
        return prices[asset];
    }
}
