export type Address0x = `0x${string}`;

interface ContractAddresses {
  USC: Address0x;
  CHI: Address0x;
  USC_ETH_LP: Address0x;
  CHI_ETH_LP: Address0x;
  ETH_USD_oracle: Address0x;
  stETH_USD_oracle: Address0x;
  USC_USD_oracle: Address0x;
  CHI_USD_oracle: Address0x;
  PriceFeedAggregator: Address0x;
  ChiStaking: Address0x;
  ChiLocking: Address0x;
  ChiVesting: Address0x;
  USCStaking: Address0x;
  ReserveHolder: Address0x;
  RewardController: Address0x;
  TimeWeightedBonding: Address0x;
  Arbitrage: Address0x;
  veCHI: Address0x;
  WETH: Address0x;
  ETH_ADDRESS: Address0x;
  stETH: Address0x;
  Uniswapv2Router: Address0x;
}

export const contractAddresses: ContractAddresses = {
  USC: "0xf66423533d8bA9ce2ACDf2F5F07F4fb9106e9AFb",
  CHI: "0xD7e2b15E06C571155093257D08636b96bB8B1222",
  USC_ETH_LP: "0x7BbA26c60757aFe110E0BEA985CC70cb59Dd9E96",
  CHI_ETH_LP: "0xDC42f7273A018d6B7773b0B7a20d5580a907C00B",
  ETH_USD_oracle: "0xB7b006e8bDe998206C72a9aB456495b1998D42E0",
  stETH_USD_oracle: "0x8EC279087f1fC188A009251cc1381c222b4102e1",
  USC_USD_oracle: "0x6A4aCb742600FE0Be6c5aC1Bb640548525396042",
  CHI_USD_oracle: "0x4dA8F880623973392D337c88460992b33FDA22C8",
  PriceFeedAggregator: "0xb2ba959db02876C6e7B44CB50bffd3DE75fC3C4c",
  ChiStaking: "0x311A0678338b5CF7C81727BfC8879bD67f21592b",
  ChiLocking: "0xF311417ECB97cFbF6955f36b8c848F10ee63eD40",
  ChiVesting: "0x7e03b3d99783d692F6D06D01dBB94895eC2c6dBa",
  USCStaking: "0x7e6729C3A0ffd07BAc34A1a36e5b3d65D6047a3d",
  ReserveHolder: "0x7B690e89fc80875B658aBeb0567b70a7a1D9Ec60",
  RewardController: "0x7c62Caf58B83E2C84fdEe0D66c071262C2334a2e",
  TimeWeightedBonding: "0x5dae6701E0b68d55994950eFE8f66127C6e28167",
  Arbitrage: "0xbC645ce455EaD9d230fbbe6E2cE2AFf848bD3a58",
  veCHI: "0x0F676Afc57A5bf754FDcAAcF9b67C267d13baa8F",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ETH_ADDRESS: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
  Uniswapv2Router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
};
