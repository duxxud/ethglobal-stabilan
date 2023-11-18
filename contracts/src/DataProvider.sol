// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./interfaces/IStabilanCore.sol";
import "./interfaces/IOptionToken.sol";

contract DataProvider {
    enum TokenType {
        OPTION,
        BACKING
    }

    struct UserToken {
        TokenType tokenType;
        address stabilanTokenAddress;
        address undelyingAssetAddress;
        uint256 endEpoch;
        uint256 balance;
    }

    function getUserTokens(IStabilanCore core, address account) external view returns (UserToken[] memory) {
        UserToken[] memory userTokensTemp = new UserToken[](100);
        uint256 userTokenLen = 0;

        IOptionToken[] memory optionTokens;
        IBackingToken[] memory backingTokens;
        (optionTokens, backingTokens) = core.allStabilanTokens();

        for (uint256 i = 0; i < optionTokens.length; i++) {
            uint256 balance = optionTokens[i].balanceOf(account);
            if (balance > 0) {
                userTokensTemp[userTokenLen++] = UserToken({
                    tokenType: TokenType.OPTION,
                    stabilanTokenAddress: address(optionTokens[i]),
                    undelyingAssetAddress: address(optionTokens[i].underlying()),
                    endEpoch: optionTokens[i].endEpoch(),
                    balance: balance
                });
            }
        }

        for (uint256 i = 0; i < backingTokens.length; i++) {
            uint256 balance = backingTokens[i].balanceOf(account);
            if (balance > 0) {
                userTokensTemp[userTokenLen++] = UserToken({
                    tokenType: TokenType.BACKING,
                    stabilanTokenAddress: address(backingTokens[i]),
                    undelyingAssetAddress: address(backingTokens[i].underlying()),
                    endEpoch: backingTokens[i].endEpoch(),
                    balance: balance
                });
            }
        }
    }
}
