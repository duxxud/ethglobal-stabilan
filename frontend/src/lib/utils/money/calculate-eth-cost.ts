import { formatUnits, parseUnits } from "viem";

// Assuming ethPrice is provided as a BigInt, and formatETHMoney is a function you have defined elsewhere

/**
 * Calculate the cost of a value in terms of Ethereum.
 *
 * @param value - The value to be converted.
 * @param ethPrice - The price of Ethereum.
 * @param inputDecimals - Default 16. The number of decimals for the input value.
 * @param outputDecimals - Default 8. The number of decimals for the output value.
 * @returns The cost in Ethereum format.
 */
export function calculateEthCost(
  value: number | string | bigint,
  ethPrice: number,
  inputDecimals: number = 16,
  outputDecimals: number = 8
): string {
  const userValue = parseUnits(String(value || 0), inputDecimals);
  const result = userValue / BigInt(ethPrice);
  console.log({ result });

  return formatUnits(result, outputDecimals);
}
