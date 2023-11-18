// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "forge-std/script.sol";
import "../PriceFeedAggregator.sol";
import "../TokenFactory.sol";
import "../StabilanCore.sol";
import "../libraries/Constants.sol";

contract Deploy is Script {
    function getChainId() public view returns (uint256) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployerAddress = vm.addr(deployerPrivateKey);

        console.log("Deployer address: ", deployerAddress);
        console.log("Deployer balance: ", deployerAddress.balance);
        console.log("BlockNumber: ", block.number);
        console.log("ChainId: ", getChainId());

        console.log("Deploying...");

        vm.startBroadcast(deployerPrivateKey);

        Constants.ExternalAddresses memory externalAddresses = Constants.sepoliaAddresses();

        PriceFeedAggregator priceFeedAggregator = new PriceFeedAggregator(
            deployerAddress
        );
        console.log("PriceFeedAggregator address: ", address(priceFeedAggregator));

        priceFeedAggregator.setPriceFeed(externalAddresses.WETH_ADDRESS, externalAddresses.WETH_PRICE_FEED);
        priceFeedAggregator.setPriceFeed(externalAddresses.USDC_ADDRESS, externalAddresses.USDC_PRICE_FEED);
        priceFeedAggregator.setPriceFeed(externalAddresses.USDT_ADDRESS, externalAddresses.USDT_PRICE_FEED);
        priceFeedAggregator.setPriceFeed(externalAddresses.DAI_ADDRESS, externalAddresses.DAI_PRICE_FEED);
        priceFeedAggregator.setPriceFeed(externalAddresses.GHO_ADDRESS, externalAddresses.GHO_PRICE_FEED);
        console.log("Price feeds setted");

        TokenFactory tokenFactory = new TokenFactory();
        console.log("TokenFactory address: ", address(tokenFactory));

        StabilanCore stabilanCore = new StabilanCore(
            tokenFactory,
            priceFeedAggregator,
            deployerAddress
        );
        console.log("StabilanCore address: ", address(stabilanCore));

        vm.stopBroadcast();
    }
}
