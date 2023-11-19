import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";
import { createPublicClient, http, parseAbi } from "viem";
import { mainnet } from "wagmi";

import { contractAddresses } from "../../../../app/config/Contract-Addresses";
import { getTargetNetwork } from "../scaffold-eth";

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL),
});

export const ABI = parseAbi([
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
]);

export const fetchUSCWETHPairFromUniswap = async (): Promise<
  | {
      pair: Pair;
      calcAmountOut: (amountIn: string, pair: Pair) => string;
      calcAmountIn: (amountOut: string, pair: Pair) => string;
    }
  | undefined
> => {
  const configuredNetwork = getTargetNetwork();
  if (
    configuredNetwork.nativeCurrency.symbol !== "ETH" &&
    configuredNetwork.nativeCurrency.symbol !== "SEP" &&
    !configuredNetwork.nativeCurrencyTokenAddress
  ) {
    return undefined;
  }
  try {
    const USCToken = new Token(1, contractAddresses.USC, 18);
    const WETHToken = new Token(1, contractAddresses.WETH, 18);
    const pairAddress = Pair.getAddress(WETHToken, USCToken);

    const wagmiConfig = {
      address: pairAddress,
      abi: ABI,
    };

    const reserves = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "getReserves",
    });

    const token0Address = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "token0",
    });

    const token1Address = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "token1",
    });
    const token0 = [WETHToken, USCToken].find(
      (token) => token.address === token0Address
    ) as Token;
    const token1 = [WETHToken, USCToken].find(
      (token) => token.address === token1Address
    ) as Token;
    const pair = new Pair(
      CurrencyAmount.fromRawAmount(token0, reserves[0].toString()),
      CurrencyAmount.fromRawAmount(token1, reserves[1].toString())
    );

    const calcAmountOut = (amountIn: string, pair: Pair): string => {
      const amountInCurrencyAmount = CurrencyAmount.fromRawAmount(
        USCToken,
        amountIn
      );
      const [outputAmount] = pair.getOutputAmount(amountInCurrencyAmount);

      return outputAmount.toExact();
    };

    // Wrapper function for calculating amount in
    const calcAmountIn = (amountOut: string, pair: Pair): string => {
      const amountOutCurrencyAmount = CurrencyAmount.fromRawAmount(
        WETHToken,
        amountOut
      );
      const [outputAmount] = pair.getInputAmount(amountOutCurrencyAmount);

      return outputAmount.toExact();
    };

    return {
      pair,
      calcAmountOut,
      calcAmountIn,
    };
  } catch (error) {
    console.error(
      "useNativeCurrencyPrice - Error fetching ETH price from Uniswap: ",
      error
    );
    return undefined;
  }
};
