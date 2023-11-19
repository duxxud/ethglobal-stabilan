// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IBackingToken.sol";
import "./StabilanToken.sol";

contract BackingToken is IBackingToken, StabilanToken {
    address public backedAsset;
    address public insurancePlugin;

    modifier onlyInsurancePlugin() {
        if (msg.sender != insurancePlugin) {
            revert NotInsurancePlugin();
        }
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        IERC20 _underlying,
        uint256 _endEpoch,
        address _coreContract,
        address _backedAsset
    ) StabilanToken(_name, _symbol, _underlying, _endEpoch, _coreContract) {
        backedAsset = _backedAsset;
    }

    function insuranceTransfer(
        address from,
        address to,
        uint256 amount
    ) external override onlyInsurancePlugin {
        _transfer(from, to, amount);
    }
}
