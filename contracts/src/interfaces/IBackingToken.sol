// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IStabilanToken.sol";

interface IBackingToken is IStabilanToken {
    error NotInsurancePlugin();

    function backedAsset() external view returns (address);

    function insuranceTransfer(address from, address to, uint256 amount) external;
}
