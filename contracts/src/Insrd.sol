// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "token-plugins/ERC20Plugins.sol";

contract Insrd is ERC20Plugins {
    constructor()
        ERC20Plugins(100, type(uint256).max)
        ERC20("Insured Stablecoin", "INSRD")
    {}
}
