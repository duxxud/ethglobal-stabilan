// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "forge-std/script.sol";
import "../PriceFeedAggregator.sol";
import "../TokenFactory.sol";
import "../StabilanCore.sol";
import "../libraries/Constants.sol";
import "../mock/MockERC20.sol";
import "../mock/MockChainlinkOracle.sol";

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

        MockERC20 usdc = new MockERC20("USDC", "USDC");
        usdc.mint(deployerAddress, 100000 ether);

        MockERC20 usdt = new MockERC20("USDT", "USDT");
        usdt.mint(deployerAddress, 100000 ether);

        MockERC20 dai = new MockERC20("DAI", "DAI");
        dai.mint(deployerAddress, 100000 ether);

        MockChainlinkOracle usdcPriceFeed = new MockChainlinkOracle();
        usdcPriceFeed.setPrice(1 ether);

        MockChainlinkOracle usdtPriceFeed = new MockChainlinkOracle();
        usdtPriceFeed.setPrice(1 ether);

        MockChainlinkOracle daiPriceFeed = new MockChainlinkOracle();
        daiPriceFeed.setPrice(1 ether);

        vm.stopBroadcast();
    }
}
