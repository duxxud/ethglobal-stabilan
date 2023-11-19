import { etherUnits, formatUnits } from "viem";

/**
 * `formatEtherForView` function
 *
 * This function formats a given `wei` value into a more human-readable unit (either `wei` or `gwei`).
 *
 * @example
 * ```typescript
 * formatEtherForView(BigInt("1000000000000000"))             // 0.001 (assuming default 'wei' unit)
 * formatEtherForView(BigInt("1000000000"), "gwei")           // 1
 * formatEtherForView(undefined, "wei", "N/A")               // N/A
 * ```
 *
 * @param wei - The wei value to be formatted. Can be `undefined`.
 * @param unit - The desired output unit. Either `wei` or `gwei`. Defaults to `wei`.
 * @param placeholder - An optional placeholder to return when `wei` is undefined.
 * @returns The formatted string in the desired unit or the placeholder if `wei` is undefined.
 */
export function formatEtherForView(
  wei?: bigint,
  unit: "wei" | "gwei" = "wei",
  placeholder?: string
): string | undefined {
  if (!wei) return placeholder;

  return formatUnits(wei, etherUnits[unit]);
}

/**
 * `formatUnitsForView` function
 *
 * This function formats a given value into a human-readable unit with the desired number of decimals.
 *
 * @example
 * ```typescript
 * formatUnitsForView(BigInt("10000000000"))                     // 0.0001 (assuming default 8 decimals)
 * formatUnitsForView(BigInt("10000000000"), 4)                  // 1
 * formatUnitsForView(undefined, 8, "N/A")                      // N/A
 * ```
 *
 * @param value - The value to be formatted. Can be `undefined`.
 * @param decimals - The number of decimals to format to. Defaults to 8.
 * @param placeholder - An optional placeholder to return when `value` is undefined.
 * @returns The formatted string with the desired decimals or the placeholder if `value` is undefined.
 */
export function formatUnitsForView(
  value?: bigint,
  decimals: number = 8,
  placeholder?: string
): string | undefined {
  if (!value) return placeholder;

  return formatUnits(value, decimals);
}
