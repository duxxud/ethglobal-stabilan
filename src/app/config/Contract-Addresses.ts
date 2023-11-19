export type Address0x = `0x${string}`;

export const contractAddresses = {
  USC: "0xf66423533d8bA9ce2ACDf2F5F07F4fb9106e9AFb" as Address0x,
  USC_ETH_LP: "0x7BbA26c60757aFe110E0BEA985CC70cb59Dd9E96" as Address0x,
  ETH_USD_oracle: "0xB7b006e8bDe998206C72a9aB456495b1998D42E0" as Address0x,
  stETH_USD_oracle: "0x8EC279087f1fC188A009251cc1381c222b4102e1" as Address0x,
  USC_USD_oracle: "0x6A4aCb742600FE0Be6c5aC1Bb640548525396042" as Address0x,
  PriceFeedAggregator:
    "0x48AC85A71Cb5E1384A365fFf3D5f717B4eD411d0" as Address0x,
  ReserveHolder: "0x7B690e89fc80875B658aBeb0567b70a7a1D9Ec60" as Address0x,
  Arbitrage: "0xbC645ce455EaD9d230fbbe6E2cE2AFf848bD3a58" as Address0x,
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address0x,
  ETH_ADDRESS: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" as Address0x,
  stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84" as Address0x,
  Uniswapv2Router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" as Address0x,
  // stabilan specific
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as Address0x,
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7" as Address0x,
  GHO: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f" as Address0x,
  DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F" as Address0x,
  coreContractAddress:
    "0x89369f1B135b13b625EdD4882f41A8a66892c958" as Address0x,
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
