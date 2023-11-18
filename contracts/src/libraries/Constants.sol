// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

library Constants {
    struct ExternalAddresses {
        address WETH_ADDRESS;
        address USDC_ADDRESS;
        address USDT_ADDRESS;
        address DAI_ADDRESS;
        address GHO_ADDRESS;
        address WETH_PRICE_FEED;
        address USDC_PRICE_FEED;
        address USDT_PRICE_FEED;
        address DAI_PRICE_FEED;
        address GHO_PRICE_FEED;
    }

    function mainnetAddresses() internal pure returns (ExternalAddresses memory) {
        return ExternalAddresses({
            WETH_ADDRESS: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2,
            USDC_ADDRESS: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48,
            USDT_ADDRESS: 0xdAC17F958D2ee523a2206206994597C13D831ec7,
            DAI_ADDRESS: 0x6B175474E89094C44Da98b954EedeAC495271d0F,
            GHO_ADDRESS: 0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f,
            WETH_PRICE_FEED: 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419,
            USDC_PRICE_FEED: 0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6,
            USDT_PRICE_FEED: 0x3E7d1eAB13ad0104d2750B8863b489D65364e32D,
            DAI_PRICE_FEED: 0x773616E4d11A78F511299002da57A0a94577F1f4,
            GHO_PRICE_FEED: 0x3f12643D3f6f874d39C2a4c9f2Cd6f2DbAC877FC
        });
    }

    function sepoliaAddresses() internal pure returns (ExternalAddresses memory) {
        return ExternalAddresses({
            WETH_ADDRESS: 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9,
            USDC_ADDRESS: 0x8267cF9254734C6Eb452a7bb9AAF97B392258b21,
            USDT_ADDRESS: 0x7169D38820dfd117C3FA1f22a697dBA58d90BA06,
            DAI_ADDRESS: address(0x0),
            GHO_ADDRESS: 0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D,
            WETH_PRICE_FEED: 0x694AA1769357215DE4FAC081bf1f309aDC325306,
            USDC_PRICE_FEED: 0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E,
            USDT_PRICE_FEED: address(0x0),
            DAI_PRICE_FEED: 0x14866185B1962B63C3Ea9E03Bc1da838bab34C19,
            GHO_PRICE_FEED: 0x635A86F9fdD16Ff09A0701C305D3a845F1758b8E
        });
    }
}
