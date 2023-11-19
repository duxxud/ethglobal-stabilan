import { formatDateAsGMT } from "./format-date-as-GMT";

/**
 * Adds a specified number of years to a date string in the format 'd/m/y 00:00 GMT'.
 *
 * @param dateString - The starting date as a string.
 * @param yearsToAdd - The number of years to add to the date.
 * @returns A new date string in the format 'd/m/y 00:00 GMT' with the added years.
 *
 * @example
 * ```typescript
 * const vestingStart = "01/01/2023 00:00 GMT";
 * const vestingEnd = addYearsToDate(vestingStart, 2);
 * // vestingEnd would be "01/01/2025 00:00 GMT"
 * ```
 */
export function addToDate(
  dateString: string,
  { years = 0, months = 0, weeks = 0, days = 0 }
): string {
  // Parse the date string
  const [day, month, year] = dateString.split(" ")[0].split("/").map(Number);
  const hoursMinutes = dateString.split(" ")[1];
  const timeParts = hoursMinutes.split(":").map(Number);
  const date = new Date(
    Date.UTC(year, month - 1, day, timeParts[0], timeParts[1])
  ); // Construct a Date object in UTC

  // Add the required number of years, months, weeks, and days
  date.setUTCFullYear(date.getUTCFullYear() + years);
  date.setUTCMonth(date.getUTCMonth() + months);
  date.setUTCDate(date.getUTCDate() + weeks * 7 + days);

  // Return the formatted date string in GMT
  return formatDateAsGMT(date.getTime() / 1000);
}
