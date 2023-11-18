// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IOptionToken.sol";
import "./StabilanToken.sol";

contract OptionToken is IOptionToken, StabilanToken {
    constructor(
        string memory _name,
        string memory _symbol,
        IERC20 _underlying,
        uint256 _endEpoch,
        address _coreContract
    ) StabilanToken(_name, _symbol, _underlying, _endEpoch, _coreContract) {}
}
