// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface IStabilanToken is IERC20 {
    error NotCore();
    
    function endEpoch() external view returns (uint256);

    function underlying() external view returns (IERC20);

    function mint(address account, uint256 amount) external;

    function burn(address account, uint256 amount) external;
}
