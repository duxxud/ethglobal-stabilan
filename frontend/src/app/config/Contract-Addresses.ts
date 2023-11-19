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
      "0x33a6C9d81E5324544A3d6c41CBedB65091ba0665" as Address0x,
    USDC: "0x55eF0864304a361D33c7c0a0083D153b2D26a7A9" as Address0x,
    USDCPriceFeed: "0x419102Ee2543edf30B07705CAEF7af0889926cfD" as Address0x,
    USDT: "0x49EF20e300925210def18fADaeb48635590Bc1Ee" as Address0x,
    USDTPriceFeed: "0x1C2721DCF3288A90dF78B33D25Fb7cE2D4527E6c" as Address0x,
    DAI: "0xc3f6c94aCE6e75677aDDe13c8B41660BC4701A0B" as Address0x, // unchanged
    DAIPriceFeed: "0x363053a56beFDA5c2fe15D8C27A887d3cCfB00c3" as Address0x, // unchanged
    WETH: "0x54A76081217A3FCD8E98bf405B38134Ba6353C2A" as Address0x,
    WETHPriceFeed: "0x45aC55F407c73a4CCB852a900ccfceCA2a7e5353" as Address0x,
    wBTC: "0x05C81b196AE4a8777C7eC101DfCCB156C17De6Fd" as Address0x,
    wBTCPriceFeed: "0x14f3C97C35CFad5E4a0a584842414030dcF3C9c0" as Address0x,
    TokenFactory: "0x683B20dFB3FBA67E3c80fbF4EE7BaCe26F45d719" as Address0x,
    StabilanCore: "0xc7253058832346174170609fF60a25787Db20087" as Address0x,
    DataProvider: "0x701bb47110870e256e8cF227Ecd16B91a4865547" as Address0x,
    INSRD: "0x24026186C7Cc7741982543764a54cA3bBbDD9C0e" as Address0x,
    INSRDPriceFeed: "0x5F8bC1976DcC59c44BBd8Afd8FC260b6A32131B1" as Address0x,
    InsurancePlugin: "0x6c302554Ef2A882d982b740d985Dc5EdF8635eC9" as Address0x,
    GHO: "0xe862D0574355bD492cf2A4c6C9E6c66dC28d4D8f" as Address0x, // unchanged
    GHOPriceFeed: "0x33D572F7Dc6FA6dEe50C69E94821501481803560" as Address0x, // unchanged
  },
};
