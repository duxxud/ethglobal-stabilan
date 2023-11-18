"use client";

import { Address, formatUnits } from "viem";

import { Address0x } from "../../../app/config/Contract-Addresses";
import { formatUnitsToMoney } from "../../utils/money/format-units-to-money";

import { useWingsContractRead } from "./useWingsContractRead";

/**
 * Use this custom hook to get the price from the PriceFeedAggregator.
 *
 * @param address - The contract address to query for the price.
 * @returns An object containing price details or undefined if data is not available.
 */
export const useGetPriceByAddress = (address: Address) => {
  const { data, isLoading, refetch } = useWingsContractRead({
    contractName: "PriceFeedAggregator",
    functionName: "peek",
    args: [address as Address0x],
  });

  // Early return if data is undefined
  if (data === undefined) {
    return {
      priceInDollars: undefined,
      originalPrice: undefined,
      formattedPrice: undefined,
      decimals: undefined,
      isLoading,
      refetch,
    };
  }

  // Extract originalPrice and decimals from the data
  const originalPrice = (data as any)[0];
  const decimals = (data as any)[1];

  // Calculate price in dollars
  const priceInDollars = formatUnitsToMoney(originalPrice, { decimals });

  // Format original price
  const formattedPrice = parseFloat(formatUnits(originalPrice, decimals));

  return {
    priceInDollars,
    originalPrice,
    formattedPrice,
    decimals,
    isLoading,
    refetch,
  };
};
