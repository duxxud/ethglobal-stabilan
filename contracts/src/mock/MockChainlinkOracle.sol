// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IChainlinkOracle} from "../interfaces/IChainlinkOracle.sol";

contract MockChainlinkOracle is IChainlinkOracle {
    uint256 public price;

    function setPrice(uint256 _price) external {
        price = _price;
    }

    function latestRoundData() external view override returns (uint80, int256 answer, uint256, uint256, uint80) {
        return (0, int256(price), 0, 0, 0);
    }
}
