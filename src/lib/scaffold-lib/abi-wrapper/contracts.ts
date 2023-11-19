import addresses from "../../../../contracts-data/address/addresses.json";

import { contractAddresses } from "app/config/Contract-Addresses";

const contracts = {
  1442: [
    {
      chainId: "1",
      name: "Mainnet",
      contracts: {
        PriceFeedAggregator: {
          address: addresses.PriceFeedAggregator,
          abi: [
            {
              inputs: [],
              name: "ZeroAddress",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "base",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "feed",
                  type: "address",
                },
              ],
              name: "SetPriceFeed",
              type: "event",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "base",
                  type: "address",
                },
              ],
              name: "peek",
              outputs: [
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "decimals",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "priceFeeds",
              outputs: [
                {
                  internalType: "contract IOracle",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "base",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "feed",
                  type: "address",
                },
              ],
              name: "setPriceFeed",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        UNISWAP_V2_ROUTER: {
          address: addresses.UNISWAP_V2_ROUTER,
          abi: [
            {
              inputs: [],
              name: "WETH",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amountADesired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountBDesired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountAMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountBMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "addLiquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amountTokenDesired",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountTokenMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETHMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "addLiquidityETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountToken",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETH",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "factory",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveOut",
                  type: "uint256",
                },
              ],
              name: "getAmountIn",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveOut",
                  type: "uint256",
                },
              ],
              name: "getAmountOut",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
              ],
              name: "getAmountsIn",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
              ],
              name: "getAmountsOut",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "reserveB",
                  type: "uint256",
                },
              ],
              name: "quote",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountAMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountBMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "removeLiquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountTokenMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETHMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "removeLiquidityETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountToken",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETH",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountTokenMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETHMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "removeLiquidityETHSupportingFeeOnTransferTokens",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountETH",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountTokenMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETHMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "approveMax",
                  type: "bool",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "removeLiquidityETHWithPermit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountToken",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETH",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountTokenMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountETHMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "approveMax",
                  type: "bool",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountETH",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "liquidity",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountAMin",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountBMin",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "approveMax",
                  type: "bool",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
              ],
              name: "removeLiquidityWithPermit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapETHForExactTokens",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOutMin",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapExactETHForTokens",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOutMin",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountOutMin",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapExactTokensForETH",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountOutMin",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountOutMin",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapExactTokensForTokens",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountOutMin",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountInMax",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapTokensForExactETH",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountInMax",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "path",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "swapTokensForExactTokens",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        WETH: {
          address: addresses.WETH,
          abi: [
            {
              constant: true,
              inputs: [],
              name: "name",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "guy", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "totalSupply",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "src", type: "address" },
                { name: "dst", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ name: "wad", type: "uint256" }],
              name: "withdraw",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "decimals",
              outputs: [{ name: "", type: "uint8" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "", type: "address" }],
              name: "balanceOf",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "symbol",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "dst", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "deposit",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { name: "", type: "address" },
                { name: "", type: "address" },
              ],
              name: "allowance",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            { payable: true, stateMutability: "payable", type: "fallback" },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: true, name: "guy", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: true, name: "dst", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "dst", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Withdrawal",
              type: "event",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        stETH: {
          address: addresses.stETH,
          abi: [
            {
              constant: false,
              inputs: [],
              name: "resume",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "name",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "pure",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "stop",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "hasInitialized",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_spender", type: "address" },
                { name: "_amount", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "STAKING_CONTROL_ROLE",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "totalSupply",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "_ethAmount", type: "uint256" }],
              name: "getSharesByPooledEth",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "isStakingPaused",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_sender", type: "address" },
                { name: "_recipient", type: "address" },
                { name: "_amount", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "_script", type: "bytes" }],
              name: "getEVMScriptExecutor",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_maxStakeLimit", type: "uint256" },
                { name: "_stakeLimitIncreasePerBlock", type: "uint256" },
              ],
              name: "setStakingLimit",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "RESUME_ROLE",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_lidoLocator", type: "address" },
                { name: "_eip712StETH", type: "address" },
              ],
              name: "finalizeUpgrade_v2",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "decimals",
              outputs: [{ name: "", type: "uint8" }],
              payable: false,
              stateMutability: "pure",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getRecoveryVault",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getTotalPooledEther",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ name: "_newDepositedValidators", type: "uint256" }],
              name: "unsafeChangeDepositedValidators",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "PAUSE_ROLE",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_spender", type: "address" },
                { name: "_addedValue", type: "uint256" },
              ],
              name: "increaseAllowance",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getTreasury",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "isStopped",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getBufferedEther",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_lidoLocator", type: "address" },
                { name: "_eip712StETH", type: "address" },
              ],
              name: "initialize",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "receiveELRewards",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getWithdrawalCredentials",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getCurrentStakeLimit",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getStakeLimitFullInfo",
              outputs: [
                { name: "isStakingPaused", type: "bool" },
                { name: "isStakingLimitSet", type: "bool" },
                { name: "currentStakeLimit", type: "uint256" },
                { name: "maxStakeLimit", type: "uint256" },
                { name: "maxStakeLimitGrowthBlocks", type: "uint256" },
                { name: "prevStakeLimit", type: "uint256" },
                { name: "prevStakeBlockNumber", type: "uint256" },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_sender", type: "address" },
                { name: "_recipient", type: "address" },
                { name: "_sharesAmount", type: "uint256" },
              ],
              name: "transferSharesFrom",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "_account", type: "address" }],
              name: "balanceOf",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "resumeStaking",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getFeeDistribution",
              outputs: [
                { name: "treasuryFeeBasisPoints", type: "uint16" },
                { name: "insuranceFeeBasisPoints", type: "uint16" },
                { name: "operatorsFeeBasisPoints", type: "uint16" },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "receiveWithdrawals",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "_sharesAmount", type: "uint256" }],
              name: "getPooledEthByShares",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "token", type: "address" }],
              name: "allowRecoverability",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "owner", type: "address" }],
              name: "nonces",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "appId",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getOracle",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "eip712Domain",
              outputs: [
                { name: "name", type: "string" },
                { name: "version", type: "string" },
                { name: "chainId", type: "uint256" },
                { name: "verifyingContract", type: "address" },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getContractVersion",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getInitializationBlock",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_recipient", type: "address" },
                { name: "_sharesAmount", type: "uint256" },
              ],
              name: "transferShares",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "symbol",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "pure",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getEIP712StETH",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ name: "", type: "address" }],
              name: "transferToVault",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { name: "_sender", type: "address" },
                { name: "_role", type: "bytes32" },
                { name: "_params", type: "uint256[]" },
              ],
              name: "canPerform",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ name: "_referral", type: "address" }],
              name: "submit",
              outputs: [{ name: "", type: "uint256" }],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_spender", type: "address" },
                { name: "_subtractedValue", type: "uint256" },
              ],
              name: "decreaseAllowance",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getEVMScriptRegistry",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_recipient", type: "address" },
                { name: "_amount", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_maxDepositsCount", type: "uint256" },
                { name: "_stakingModuleId", type: "uint256" },
                { name: "_depositCalldata", type: "bytes" },
              ],
              name: "deposit",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getBeaconStat",
              outputs: [
                { name: "depositedValidators", type: "uint256" },
                { name: "beaconValidators", type: "uint256" },
                { name: "beaconBalance", type: "uint256" },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "removeStakingLimit",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_reportTimestamp", type: "uint256" },
                { name: "_timeElapsed", type: "uint256" },
                { name: "_clValidators", type: "uint256" },
                { name: "_clBalance", type: "uint256" },
                { name: "_withdrawalVaultBalance", type: "uint256" },
                { name: "_elRewardsVaultBalance", type: "uint256" },
                { name: "_sharesRequestedToBurn", type: "uint256" },
                { name: "_withdrawalFinalizationBatches", type: "uint256[]" },
                { name: "_simulatedShareRate", type: "uint256" },
              ],
              name: "handleOracleReport",
              outputs: [{ name: "postRebaseAmounts", type: "uint256[4]" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getFee",
              outputs: [{ name: "totalFee", type: "uint16" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "kernel",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getTotalShares",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "_owner", type: "address" },
                { name: "_spender", type: "address" },
                { name: "_value", type: "uint256" },
                { name: "_deadline", type: "uint256" },
                { name: "_v", type: "uint8" },
                { name: "_r", type: "bytes32" },
                { name: "_s", type: "bytes32" },
              ],
              name: "permit",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { name: "_owner", type: "address" },
                { name: "_spender", type: "address" },
              ],
              name: "allowance",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "isPetrified",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getLidoLocator",
              outputs: [{ name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "canDeposit",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "STAKING_PAUSE_ROLE",
              outputs: [{ name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getDepositableEther",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "_account", type: "address" }],
              name: "sharesOf",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "pauseStaking",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getTotalELRewardsCollected",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            { payable: true, stateMutability: "payable", type: "fallback" },
            {
              anonymous: false,
              inputs: [],
              name: "StakingPaused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "StakingResumed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, name: "maxStakeLimit", type: "uint256" },
                {
                  indexed: false,
                  name: "stakeLimitIncreasePerBlock",
                  type: "uint256",
                },
              ],
              name: "StakingLimitSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "StakingLimitRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "reportTimestamp", type: "uint256" },
                { indexed: false, name: "preCLValidators", type: "uint256" },
                { indexed: false, name: "postCLValidators", type: "uint256" },
              ],
              name: "CLValidatorsUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  name: "depositedValidators",
                  type: "uint256",
                },
              ],
              name: "DepositedValidatorsChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "reportTimestamp", type: "uint256" },
                { indexed: false, name: "preCLBalance", type: "uint256" },
                { indexed: false, name: "postCLBalance", type: "uint256" },
                {
                  indexed: false,
                  name: "withdrawalsWithdrawn",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "executionLayerRewardsWithdrawn",
                  type: "uint256",
                },
                { indexed: false, name: "postBufferedEther", type: "uint256" },
              ],
              name: "ETHDistributed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "reportTimestamp", type: "uint256" },
                { indexed: false, name: "timeElapsed", type: "uint256" },
                { indexed: false, name: "preTotalShares", type: "uint256" },
                { indexed: false, name: "preTotalEther", type: "uint256" },
                { indexed: false, name: "postTotalShares", type: "uint256" },
                { indexed: false, name: "postTotalEther", type: "uint256" },
                { indexed: false, name: "sharesMintedAsFees", type: "uint256" },
              ],
              name: "TokenRebased",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, name: "lidoLocator", type: "address" },
              ],
              name: "LidoLocatorSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [{ indexed: false, name: "amount", type: "uint256" }],
              name: "ELRewardsReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [{ indexed: false, name: "amount", type: "uint256" }],
              name: "WithdrawalsReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "sender", type: "address" },
                { indexed: false, name: "amount", type: "uint256" },
                { indexed: false, name: "referral", type: "address" },
              ],
              name: "Submitted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [{ indexed: false, name: "amount", type: "uint256" }],
              name: "Unbuffered",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "executor", type: "address" },
                { indexed: false, name: "script", type: "bytes" },
                { indexed: false, name: "input", type: "bytes" },
                { indexed: false, name: "returnData", type: "bytes" },
              ],
              name: "ScriptResult",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "vault", type: "address" },
                { indexed: true, name: "token", type: "address" },
                { indexed: false, name: "amount", type: "uint256" },
              ],
              name: "RecoverToVault",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, name: "eip712StETH", type: "address" },
              ],
              name: "EIP712StETHInitialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "from", type: "address" },
                { indexed: true, name: "to", type: "address" },
                { indexed: false, name: "sharesValue", type: "uint256" },
              ],
              name: "TransferShares",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "account", type: "address" },
                {
                  indexed: false,
                  name: "preRebaseTokenAmount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "postRebaseTokenAmount",
                  type: "uint256",
                },
                { indexed: false, name: "sharesAmount", type: "uint256" },
              ],
              name: "SharesBurnt",
              type: "event",
            },
            { anonymous: false, inputs: [], name: "Stopped", type: "event" },
            { anonymous: false, inputs: [], name: "Resumed", type: "event" },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "from", type: "address" },
                { indexed: true, name: "to", type: "address" },
                { indexed: false, name: "value", type: "uint256" },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "owner", type: "address" },
                { indexed: true, name: "spender", type: "address" },
                { indexed: false, name: "value", type: "uint256" },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [{ indexed: false, name: "version", type: "uint256" }],
              name: "ContractVersionSet",
              type: "event",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        StabilanCore: {
          address: contractAddresses.StabilanCore,
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ITokenFactory",
                  name: "_tokenFactory",
                  type: "address",
                },
                {
                  internalType: "contract IPriceFeedAggregator",
                  name: "_priceFeedAggregator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "CannotExecute",
              type: "error",
            },
            {
              inputs: [],
              name: "MathOverflowedMulDiv",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "inEpochId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "insuringAssetValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalAvailableCollateralUSD",
                  type: "uint256",
                },
              ],
              name: "NotEnoughBacking",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "msgValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "optionsPrice",
                  type: "uint256",
                },
              ],
              name: "NotEnoughETHSent",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "OwnableInvalidOwner",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "OwnableUnauthorizedAccount",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "MAX_EPOCH_DURATION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "allBackingTokens",
              outputs: [
                {
                  internalType: "contract IBackingToken",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "allOptionTokens",
              outputs: [
                {
                  internalType: "contract IOptionToken",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "allStabilanTokens",
              outputs: [
                {
                  internalType: "contract IOptionToken[]",
                  name: "",
                  type: "address[]",
                },
                {
                  internalType: "contract IBackingToken[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "assetsConfig",
              outputs: [
                {
                  internalType: "address",
                  name: "collateralAsset",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "collateralRatio",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "strikePricePercent",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "expectedApy",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "assetAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "durationEpochs",
                  type: "uint256",
                },
              ],
              name: "backing",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "assetAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "durationEpochs",
                  type: "uint256",
                },
              ],
              name: "buyOptions",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "backingToken",
                  type: "address",
                },
              ],
              name: "claimBackingRewards",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currentEpoch",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IOptionToken",
                  name: "option",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "executeOptions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "assetAddress",
                  type: "address",
                },
              ],
              name: "getAssetAPY",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "assetAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "durationEpochs",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "payingToken",
                  type: "address",
                },
              ],
              name: "getOptionsPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "assetAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "durationEpochs",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "payingToken",
                  type: "address",
                },
              ],
              name: "getYearlyCost",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "priceFeedAggregator",
              outputs: [
                {
                  internalType: "contract IPriceFeedAggregator",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "assetAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "collateralRatio",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "strikePricePercent",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "expectedApy",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collateralAddress",
                  type: "address",
                },
              ],
              name: "setupAsset",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "supportedAssets",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "tokenFactory",
              outputs: [
                {
                  internalType: "contract ITokenFactory",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "updateEpoch",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        DataProvider: {
          address: contractAddresses.DataProvider,
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IStabilanCore",
                  name: "core",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getUserTokens",
              outputs: [
                {
                  components: [
                    {
                      internalType: "enum DataProvider.TokenType",
                      name: "tokenType",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "tokenAddress",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "assetAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "endEpoch",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "balance",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct DataProvider.UserToken[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        MockERC20: {
          address: "0xMockERC20",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "allowance",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "needed",
                  type: "uint256",
                },
              ],
              name: "ERC20InsufficientAllowance",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "needed",
                  type: "uint256",
                },
              ],
              name: "ERC20InsufficientBalance",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "approver",
                  type: "address",
                },
              ],
              name: "ERC20InvalidApprover",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "ERC20InvalidReceiver",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "ERC20InvalidSender",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "ERC20InvalidSpender",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
        MockPriceFeedAggregator: {
          address: "0xMockPriceFeedAggregator",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getLatestPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "prices",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
              ],
              name: "setPrice",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          evm: {
            bytecode: {
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
            deployedBytecode: {
              immutableReferences: {},
              linkReferences: {},
              object: "",
              opcodes: "",
              sourceMap: "",
            },
          },
          bytecode: "",
        },
      },
    },
  ],
} as const;

export default contracts;
