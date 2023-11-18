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
    address tokenAddress;
    uint256 balance;
  }
  function getUserTokens(IStabilanCore core, address account) external view returns (UserToken[] memory) {

    UserToken[] memory userTokensTemp = new UserToken[](100);
    uint256 userTokenLen = 0;

    IOptionToken[] memory optionTokens;
    IBackingToken[] memory backingTokens;
    (optionTokens, backingTokens) = core.allStabilanTokens();

    for(uint256 i=0; i<optionTokens.length; i++) {
      uint256 balance = optionTokens[i].balanceOf(account);
      if (balance > 0) {
        userTokensTemp[userTokenLen++] = UserToken({
          tokenType: TokenType.OPTION,
          tokenAddress: address(optionTokens[i]),
          balance: balance
        });
      }
    }

    for(uint256 i=0; i<backingTokens.length; i++) {
      uint256 balance = backingTokens[i].balanceOf(account);
      if (balance > 0) {
        userTokensTemp[userTokenLen++] = UserToken({
          tokenType: TokenType.BACKING,
          tokenAddress: address(backingTokens[i]),
          balance: balance
        });
      }
    }

    UserToken[] memory userTokens = new UserToken[](userTokenLen);
    for(uint256 i=0; i<userTokenLen; i++) {
      userTokens[i] = userTokensTemp[i];
    }

    return userTokens;
  }
}