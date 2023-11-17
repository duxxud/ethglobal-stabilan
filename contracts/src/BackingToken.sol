// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IBackingToken.sol";

contract BackingToken is IBackingToken, ERC20 {
    IERC20 public underlying;
    uint256 public expireTimestamp;

    constructor(string memory _name, string memory _symbol, IERC20 _underlying, uint256 _expireTimestamp)
        ERC20(_name, _symbol)
    {
        underlying = _underlying;
        expireTimestamp = _expireTimestamp;
    }
}
