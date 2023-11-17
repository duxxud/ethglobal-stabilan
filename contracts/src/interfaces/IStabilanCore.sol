// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IBackingToken.sol";
import "./IOptionToken.sol";

interface IStabilanCore {
    error NotEnoughBacking();
    error CannotExecute();

    struct AssetEpochData {
        uint256 strikePrice;
        uint256 collateralAmount; // in backing tokens
        uint256 reservedAmount; // in insurance tokens
        uint256 activeUntilTimestamp;
        IOptionToken optionToken;
        IBackingToken backingToken;
    }

    struct AssetConfig {
        uint256 collateralRatio;
        uint256 strikePricePercent;
    }
}
