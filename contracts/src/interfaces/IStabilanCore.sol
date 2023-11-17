// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IBackingToken.sol";
import "./IOptionToken.sol";

interface IStabilanCore {

    struct AssetEpochData {
        int256 strikePrice;
        uint256 collateralAmount;
        uint256 reservedAmount;
        uint256 collateralRatio;
        uint256 activeUntilTimestamp;
        IOptionToken optionToken;
        IBackingToken backingToken;
    }

    struct AssetConfig {
        uint256 strikePricePercent;
    }

}