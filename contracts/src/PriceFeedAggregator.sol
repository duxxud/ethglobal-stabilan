// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IPriceFeedAggregator} from "./interfaces/IPriceFeedAggregator.sol";
import {IChainlinkOracle} from "./interfaces/IChainlinkOracle.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./libraries/WadRayMath.sol";

contract PriceFeedAggregator is IPriceFeedAggregator, Ownable {
    mapping(address => IChainlinkOracle) public priceFeed;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setPriceFeed(address asset, address oracle) external onlyOwner {
        priceFeed[asset] = IChainlinkOracle(oracle);
    }

    function getLatestPrice(address asset) external view override returns (uint256) {
        IChainlinkOracle oracle = priceFeed[asset];
        (, int256 price,,,) = oracle.latestRoundData();

        return WadRayMath.usdToWad(uint256(price));
    }
}
