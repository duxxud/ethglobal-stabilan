// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IPriceFeedAggregator} from "./interfaces/IPriceFeedAggregator.sol";

contract PriceFeedAggregator is IPriceFeedAggregator {
    mapping(address => IChainlinkOracle) public priceFeed;
}
