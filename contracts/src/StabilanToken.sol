// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IStabilanToken.sol";

contract StabilanToken is IStabilanToken, ERC20 {
    IERC20 public underlying;
    uint256 public endEpoch;
    address public coreContract;

    modifier onlyCore() {
        if (msg.sender != coreContract) {
            revert NotCore();
        }
        _;
    }

    constructor(string memory _name, string memory _symbol, IERC20 _underlying, uint256 _endEpoch, address _coreContract)
        ERC20(_name, _symbol)
    {
        underlying = _underlying;
        endEpoch = _endEpoch;
        coreContract = _coreContract;
    }

    function mint(address account, uint256 amount) external override onlyCore {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external override onlyCore {
        _burn(account, amount);
    }

}