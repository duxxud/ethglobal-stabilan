// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IStabilanToken.sol";

interface IBackingToken is IStabilanToken {
    function backedAsset() external view returns (address);
}
