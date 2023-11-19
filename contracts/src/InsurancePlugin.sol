// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./interfaces/IStabilanCore.sol";
import "./interfaces/IDataProvider.sol";
import "./interfaces/IBackingToken.sol";
import "token-plugins/Plugin.sol";
import "token-plugins/interfaces/IERC20Plugins.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract InsurancePlugin is Plugin {
    IDataProvider public immutable dataProvider;
    IStabilanCore public immutable stabilan;

    constructor(address _stabilanCore, address _dataProvider, address _token) Plugin(IERC20Plugins(_token)) {
        dataProvider = IDataProvider(_dataProvider);
        stabilan = IStabilanCore(_stabilanCore);
    }

    function _updateBalances(address from, address to, uint256 amount) internal override {
        if (from != address(0) && to != address(0)) {
            IDataProvider.UserToken[] memory backingTokens = dataProvider.getUserBackingTokens(stabilan, from);

            for (uint256 i = 0; i < backingTokens.length; i++) {
                if (amount == 0) {
                    break;
                }

                IBackingToken backingToken = IBackingToken(backingTokens[i].stabilanTokenAddress);

                uint256 amountToSend = Math.min(backingToken.balanceOf(from), amount);

                backingToken.insuranceTransfer(from, to, amountToSend);
                amount -= amountToSend;
            }
        }
    }
}
