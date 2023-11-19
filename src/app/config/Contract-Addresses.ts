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
  ETH_ADDRESS: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address0x,
  stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84" as Address0x,
  Uniswapv2Router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" as Address0x,
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
  StabilanCore: "0x215fc4C531AaDB67C0F5F82daE1bDEF5eC561A15" as Address0x,
};

export type AvailableChains = "sepolia" | "base";

export type AddressByChain = {
  [K in AvailableChains]: typeof contractAddresses;
};

export const contractAddressesByChain: AddressByChain = {
  sepolia: {
    ...contractAddresses,
  },
  base: {
    ...contractAddresses,
  },
};
