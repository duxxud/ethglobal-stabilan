"use client";

import { Address } from "viem";

import { Address0x } from "../../../app/config/Contract-Addresses";

import { useWingsContractRead } from "./useWingsContractRead";

/**
 * Use this custom hook to get the second item of the stakes data.
 *
 * @returns The second item of the stakes data or undefined.
 */
export const useCHIStakes = (
  address?: Address
): {
  stake: bigint | undefined;
  isLoading: boolean;
  refetch: (
    options?:
      | {
          throwOnError: boolean;
          cancelRefetch: boolean;
        }
      | undefined
  ) => Promise<bigint>;
} => {
  const {
    data: stakes,
    isLoading,
    refetch,
  } = useWingsContractRead({
    contractName: "ChiStaking",
    functionName: "balanceOf",
    args: [address as Address0x],
  });

  return {
    stake: stakes ? stakes : undefined,
    isLoading,
    refetch,
  };
};
