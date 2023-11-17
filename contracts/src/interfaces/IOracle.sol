// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IOracle {
    function name() external view returns (string memory);

    function decimals() external view returns (uint8);

    function peek() external view returns (uint256 answer);
}
