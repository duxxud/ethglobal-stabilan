/**
 * `calculatePercentage` function
 *
 * This function calculates the percentage ratio between two numbers.
 *
 * @example
 * ```typescript
 * calculatePercentage(50, 200)                     // 25.00%
 * calculatePercentage("50", "200")                 // 25.00%
 * calculatePercentage(0, 200)                      // 0.00%
 * calculatePercentage(200, 0)                      // undefined.
 * ```
 *
 * @param first - The numerator value, which can be a number or a string representing a number.
 * @param second - The denominator value, which can be a number or a string representing a number.
 * @throws Will throw an error if `second` is zero.
 * @returns A string representing the percentage ratio, formatted to two decimal places.
 */
export const calculatePercentage = (
  first: string | number,
  second: string | number
): string | undefined => {
  const firstNum = Number(first);
  const secondNum = Number(second);

  if (secondNum === 0) {
    return undefined;
  }

  const ratio = firstNum / secondNum;
  return `${(ratio * 100).toFixed(2)}%`;
};

/**
 * `calculatePercentage` function
 *
 * This function calculates the percentage ratio between two `bigint` values or numbers as strings.
 * If the denominator is zero or if any argument is undefined, it returns '0%' or `undefined` accordingly.
 *
 * @example
 * ```typescript
 * calculatePercentage(50n, 200n)    // '25.00%'
 * calculatePercentage("50", "200")  // '25.00%'
 * calculatePercentage(0n, 200n)     // '0.00%'
 * calculatePercentage(200n, 0n)     // undefined
 * ```
 *
 * @param first - The numerator value, can be a `bigint` or a string representing a number.
 * @param second - The denominator value, can be a `bigint` or a string representing a number.
 * @returns A string representing the percentage ratio, formatted to two decimal places,
 *          or '0%' if any input is undefined, or `undefined` if the denominator is zero.
 */
export const calculatePercentageBI = (
  first: bigint | undefined,
  second: bigint | undefined
): string | undefined => {
  if (first === undefined || second === undefined) {
    return "0%";
  }

  const firstNum = BigInt(first);
  const secondNum = BigInt(second);

  if (secondNum === 0n) {
    return undefined;
  }

  // Multiply by 10000n to preserve two decimal places before division
  const ratio = (firstNum * 10000n) / secondNum;

  // Format the result by inserting a decimal point before the last two digits
  const ratioString = ratio.toString();
  const decimalPosition = ratioString.length - 2;
  const percentageString =
    ratioString.slice(0, decimalPosition) +
    "." +
    ratioString.slice(decimalPosition) +
    "%";

  return percentageString;
};
