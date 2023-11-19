// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./IStabilanCore.sol";

interface IDataProvider {
    enum TokenType {
        OPTION,
        BACKING
    }

    struct UserToken {
        TokenType tokenType;
        address stabilanTokenAddress;
        address undelyingAssetAddress;
        address backedAsset;
        uint256 endEpoch;
        uint256 balance;
    }

    function getUserTokens(IStabilanCore core, address account) external view returns (UserToken[] memory);

    function getUserOptionTokens(IStabilanCore core, address account) external view returns (UserToken[] memory);

    function getUserBackingTokens(IStabilanCore core, address account) external view returns (UserToken[] memory);
}
