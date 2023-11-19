export type Address0x = `0x${string}`;

export const contractAddresses = {
  USC: "0xf66423533d8bA9ce2ACDf2F5F07F4fb9106e9AFb" as Address0x,
  USC_ETH_LP: "0x7BbA26c60757aFe110E0BEA985CC70cb59Dd9E96" as Address0x,
  ETH_USD_oracle: "0xB7b006e8bDe998206C72a9aB456495b1998D42E0" as Address0x,
  stETH_USD_oracle: "0x8EC279087f1fC188A009251cc1381c222b4102e1" as Address0x,
  USC_USD_oracle: "0x6A4aCb742600FE0Be6c5aC1Bb640548525396042" as Address0x,
  PriceFeedAggregator:
    "0x3e726C563500bC255CB858269D1862cc258491c3" as Address0x,
  ReserveHolder: "0x7B690e89fc80875B658aBeb0567b70a7a1D9Ec60" as Address0x,
  Arbitrage: "0xbC645ce455EaD9d230fbbe6E2cE2AFf848bD3a58" as Address0x,
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address0x,
  WETHPriceFeed: "0x41c88c245BeAf41fb0F09B8022F7F479c5032245" as Address0x, // Updated WETH address
  ETH_ADDRESS: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address0x,
  stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84" as Address0x,
  Uniswapv2Router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" as Address0x,
  DataProvider: "0xb2ba959db02876C6e7B44CB50bffd3DE75fC3C4c" as Address0x,
  // stabilan specific
  USDC: "0x0D055518E94632b54aCf7b79b03f438B0f1BF049" as Address0x,
  USDCPriceFeed: "0x5575166bE5043Ab5B6043D298Eb66A7C1Ce185Ce" as Address0x,
  USDT: "0x467c6D3991B99F9EdFeB14d41e69457A1ef1fd23" as Address0x,
  USDTPriceFeed: "0x4dd6EA4b4929b8c06D8434A9B9552d92500eE251" as Address0x,
  GHO: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f" as Address0x,
  DAI: "0x5dae6701E0b68d55994950eFE8f66127C6e28167" as Address0x,
  DaiPriceFeed: "0xbC645ce455EaD9d230fbbe6E2cE2AFf848bD3a58" as Address0x,
  coreContractAddress:
    "0x89369f1B135b13b625EdD4882f41A8a66892c958" as Address0x,
  TokenFactory: "0x8D5C6cbD2cfCB4e22e360bCe7F6AC6fc305D8a4e" as Address0x,
  StabilanCore: "0x727b5d0151e741f35457f44b7eAD596d6FBf5771" as Address0x,
  wBTC: "0x9cFa38b0558A1DbddE45c0d9A504Be0D28fe6289" as Address0x,
  wBTCPriceFeed: "0xD45214fcFBE25B30D86054c18178dD2EB35136dc" as Address0x,
  INSRD: "0xc" as Address0x,
  INSRDPriceFeed: "0xD" as Address0x,
};

export type AvailableChains = "sepolia" | "base" | "polygonZkevmTestnet";

// export type AddressByChain = {
//   [K in AvailableChains]: typeof contractAddresses;
// };

export const contractAddressesByChain = {
  sepolia: {
    ...contractAddresses,
    PriceFeedAggregator:
      "0x48AC85A71Cb5E1384A365fFf3D5f717B4eD411d0" as Address0x,
    USDC: "0xA43D0B09A636DffB998d824b62117b83523289e6" as Address0x,
    USDCPriceFeed: "0x343b8557F7dd059b668cbC5726Aa9257D5494CbC" as Address0x,
    USDT: "0x9A0d06D999EED048700a9D2d7A39B47868905461" as Address0x,
    USDTPriceFeed: "0x89369f1B135b13b625EdD4882f41A8a66892c958" as Address0x,
    DAI: "0xD7e2b15E06C571155093257D08636b96bB8B1222" as Address0x,
    DaiPriceFeed: "0x7117e2E8fb018D96C74Fa6D50dE717F6814A6A5E" as Address0x,
    TokenFactory: "0x7E7D664e738412f5005D5e217D1318a60Ac442b6" as Address0x,
    StabilanCore: "0xfdf2bF3688F0AF7B0Baef04afde43FBC72530b7f" as Address0x,
  },
  base: {
    ...contractAddresses,
  },
  polygonZkevmTestnet: {
    PriceFeedAggregator:
      "0xfD7B453Ec27531b3b7c299C65f1759Fdb6Ddac5B" as Address0x,
    USDC: "0x7ccd91b1900500b4B3b57104b7a472A6B88c95F3" as Address0x,
    USDCPriceFeed: "0x26De5ECab9A69620A10F41F74A33c9d4791AAC76" as Address0x,
    USDT: "0x4375d0d8bC08Aafc0e47bCbd0eA3aA74b26B76C0" as Address0x,
    USDTPriceFeed: "0x5786C4046D5dF1e7250E5b32512399CDCDD477aA" as Address0x,
    DAI: "0xc3f6c94aCE6e75677aDDe13c8B41660BC4701A0B" as Address0x,
    DAIPriceFeed: "0x363053a56beFDA5c2fe15D8C27A887d3cCfB00c3" as Address0x,
    WETH: "0x36a50b83139C8D383eb8ECD8Ab3Fe53bd541A2d0" as Address0x,
    WETHPriceFeed: "0xc58d8BBC4eb5D8CA3FE651c1F0D51306E88F90f3" as Address0x,
    TokenFactory: "0xFf22d3317c087Af18a54361581E2089cbBe0DDf5" as Address0x,
    StabilanCore: "0x4438EcA40475EA4075f2f457Aa7DA4D7329F1B43" as Address0x,
    DataProvider: "0x626F227E847308eaDAC33BaBCfe61862c24D79dd" as Address0x,
    GHO: "0xdd7777135C4494e0dc6fB2059c63a5195E3D2B36" as Address0x,
    GHOPriceFeed: "0xd0E1424340f217af99B2595194c6C35185105A74" as Address0x,
    wBTC: "0xE9Ee3882B3F3Da5134D4Da4f9Cb1bCB05d4630aa" as Address0x,
    wBTCPriceFeed: "0x790E5FDA0Ad2fF122Fc71926DD353FCffBcE5Ede" as Address0x,
    INSRD: "0xB483091F91e00d9551136eb524AB012fE195a8Ba" as Address0x,
    INSRDPriceFeed: "0xd4493d6559E2c89Dd624f1a256cD190b4Ece5761" as Address0x,
    InsurancePlugin: "0x3B460a0522e5DdB7295666F6De87fe647b904C7f" as Address0x,
  },
};
