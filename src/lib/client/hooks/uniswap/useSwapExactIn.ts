import { CurrencyAmount, Percent, Token } from "@uniswap/sdk-core";
import { Pair, Route, Trade } from "@uniswap/v2-sdk";
import { useCallback } from "react";
import { parseUnits } from "viem";

import { Address0x } from "../../../../app/config/Contract-Addresses";
import { useWingsContractWrite } from "../useWingsContractWrite";

export function useSwapExactIn(USCToken: Token, WETHToken: Token, pair?: Pair) {
  const { writeAsync: swapExactInWrite } = useWingsContractWrite({
    contractName: "UNISWAP_V2_ROUTER",
    functionName: "swapExactTokensForTokens",
    args: [undefined, undefined, undefined, undefined, undefined],
  });

  const executeSwapExactIn = useCallback(
    async (amountIn: string, user_address: Address0x) => {
      if (!pair) return;
      const amountInCurrencyAmount = CurrencyAmount.fromRawAmount(
        USCToken,
        amountIn
      );

      const route = new Route([pair], USCToken, WETHToken);
      const trade = await Trade.exactIn(route, amountInCurrencyAmount);
      const slippageTolerance = new Percent("1", "100");
      const deadline = Math.floor(Date.now() / 1000) + 900; // 15 mins

      if (!swapExactInWrite)
        throw new Error("SwapExactIn write function is not available.");

      // Ensure the path is formatted as an array of strings that represent addresses
      const path = trade.route.path.map((token) => token.address);
      const minimumAmount = trade.minimumAmountOut(slippageTolerance).toExact();

      return await swapExactInWrite({
        args: [
          BigInt(amountIn),
          parseUnits(minimumAmount, USCToken.decimals),
          path as `0x${string}`[],
          user_address,
          BigInt(deadline),
        ],
      });
    },
    [swapExactInWrite, USCToken, WETHToken, pair]
  );

  return { executeSwapExactIn };
}
