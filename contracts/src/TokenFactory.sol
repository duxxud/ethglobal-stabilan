// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "./interfaces/IBackingToken.sol";
import "./interfaces/IOptionToken.sol";
import "./OptionToken.sol";
import "./BackingToken.sol";

contract TokenFactory {
    function deployOptionToken(string memory name, string memory symbol, address underyling, uint256 expireTimestamp)
        external
        returns (IOptionToken)
    {
        return IOptionToken(
            new OptionToken(
                    name,
                    symbol,
                    IERC20(underyling),
                    expireTimestamp
                )
        );
    }

    function deployBackingToken(string memory name, string memory symbol, address underyling, uint256 expireTimestamp)
        external
        returns (IBackingToken)
    {
        return IBackingToken(
            new BackingToken(
                    name,
                    symbol,
                    IERC20(underyling),
                    expireTimestamp
                )
        );
    }
}
