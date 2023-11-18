import { CurrencyAmount, Percent, Token } from "@uniswap/sdk-core";
import { Pair, Route, Trade } from "@uniswap/v2-sdk";
import { useCallback } from "react";
import { parseUnits } from "viem";

import { Address0x } from "../../../../app/config/Contract-Addresses";
import { useWingsContractWrite } from "../useWingsContractWrite";

export function useSwapExactOut(
  USCToken: Token,
  WETHToken: Token,
  pair?: Pair
) {
  const { writeAsync: swapExactOutWrite } = useWingsContractWrite({
    contractName: "UNISWAP_V2_ROUTER",
    functionName: "swapTokensForExactTokens",
    args: [undefined, undefined, undefined, undefined, undefined],
  });

  const executeSwapExactOut = useCallback(
    async (amountOut: string, user_address: Address0x) => {
      if (!pair) return;
      const amountOutCurrencyAmount = CurrencyAmount.fromRawAmount(
        WETHToken,
        amountOut
      );
      const route = new Route([pair], USCToken, WETHToken);
      const trade = await Trade.exactOut(route, amountOutCurrencyAmount);
      const slippageTolerance = new Percent("1", "100");
      const deadline = Math.floor(Date.now() / 1000) + 900; // 15 mins

      if (!swapExactOutWrite)
        throw new Error("SwapExactOut write function is not available.");

      const path = trade.route.path.map((token) => token.address);
      const maximumAmountIn = trade
        .maximumAmountIn(slippageTolerance)
        .toExact();

      return await swapExactOutWrite({
        args: [
          BigInt(amountOut),
          parseUnits(maximumAmountIn, WETHToken.decimals),
          path as `0x${string}`[],
          user_address,
          BigInt(deadline),
        ],
      });
    },
    [swapExactOutWrite, USCToken, WETHToken, pair]
  );

  return { executeSwapExactOut };
}
