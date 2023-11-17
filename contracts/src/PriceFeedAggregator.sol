// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IPriceFeedAggregator} from "./interfaces/IPriceFeedAggregator.sol";
import {IChainlinkOracle} from "./interfaces/IChainlinkOracle.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract PriceFeedAggregator is IPriceFeedAggregator, Ownable {
    mapping(address => IChainlinkOracle) public priceFeed;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setPriceFeed(
        address asset,
        IChainlinkOracle oracle
    ) external onlyOwner {
        priceFeed[asset] = oracle;
    }

    function getLatestPrice(
        address asset
    ) external view override returns (uint256) {
        IChainlinkOracle oracle = priceFeed[asset];
        (, int256 price, , , ) = oracle.latestRoundData();
        return uint256(price);
    }
}
