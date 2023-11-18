import { etherUnits, formatUnits } from "viem";

import { FormatMoneyOptions, formatMoney } from "..";

export const formatUnitsToMoney = (
  wei?: bigint | null,
  options: Partial<FormatMoneyOptions> & {
    unit?: "wei" | "gwei";
    decimals?: number;
    placeholder?: string;
  } = {}
): string | undefined => {
  const {
    currency = "$",
    unit = "wei",
    placeholder,
    decimals: inputDecimals,
    ...restOptions
  } = options;

  const decimals = inputDecimals || etherUnits[unit];

  // If no value, return placeholder
  if (!wei) return placeholder;

  // Convert wei to the desired ether unit as a number
  const etherMoney = parseFloat(formatUnits(wei, decimals));

  // Return the formatted money string
  return formatMoney(etherMoney, {
    currency,
    ...restOptions,
  });
};
