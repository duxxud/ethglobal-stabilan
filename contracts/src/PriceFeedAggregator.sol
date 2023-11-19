// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {IPriceFeedAggregator} from "./interfaces/IPriceFeedAggregator.sol";
import {IChronicleOracle} from "./interfaces/IChronicleOracle.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./libraries/WadRayMath.sol";

contract PriceFeedAggregator is IPriceFeedAggregator, Ownable {
    mapping(address => IChronicleOracle) public priceFeed;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setPriceFeed(address asset, address oracle) external onlyOwner {
        priceFeed[asset] = IChronicleOracle(oracle);
    }

    function getLatestPrice(address asset) external view override returns (uint256) {
        IChronicleOracle oracle = priceFeed[asset];
        (, int256 price,,,) = oracle.latestRoundData();

        return WadRayMath.usdToWad(uint256(price));
    }
}
