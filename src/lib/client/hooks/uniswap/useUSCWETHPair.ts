import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";
import { useCallback, useEffect, useState } from "react";
import { createPublicClient, http, parseAbi } from "viem";
import { mainnet } from "wagmi";

import { contractAddresses } from "../../../../app/config/Contract-Addresses";

const ABI = parseAbi([
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
]);

export const useUSCWETHPair = () => {
  const [pairData, setPairData] = useState<
    | {
        pair: Pair;
        calcAmountOut: (amountIn: string, pair: Pair) => string;
        calcAmountIn: (amountIn: string, pair: Pair) => string;
      }
    | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchPair = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      const publicClient = createPublicClient({
        chain: mainnet,
        transport: http(process.env.NEXT_PUBLIC_RPC_URL),
      });

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
      console.log({ pair });

      // Wrapper function for calculating amount in
      const calcAmountIn = (amountOut: string, pair: Pair): string => {
        const amountOutCurrencyAmount = CurrencyAmount.fromRawAmount(
          WETHToken,
          amountOut
        );
        const [outputAmount] = pair.getInputAmount(amountOutCurrencyAmount);

        return outputAmount.toExact();
      };

      setPairData({
        pair,
        calcAmountOut,
        calcAmountIn,
      });
    } catch (err) {
      setError("error in useUSCWETHPair");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPair();
  }, [fetchPair]);

  return { pairData, isLoading, error, refetch: fetchPair };
};
