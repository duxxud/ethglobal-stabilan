export interface GetDateAsLastDayOfTheMonthOptions {
  /**
   * The number of months to add to the current date.
   */
  numberOfMonths: number;

  /**
   * The starting date. If not provided, defaults to the current date.
   */
  dateFrom?: Date;
}
/**
 * Returns the date as the last day of the month for the month obtained after adding a specified number of months.
 *
 * @param {GetDateAsLastDayOfTheMonthOptions} options - The options for calculating the date.
 * @returns {Date} The last day of the same month after adding the specified number of months.
 *
 * @example
 * getDateAsLastDayOfTheMonth({ numberOfMonths: 1 })      // Assuming today is 2023-01-15, returns 2023-01-31
 * getDateAsLastDayOfTheMonth({ numberOfMonths: 2 })      // Assuming today is 2023-01-15, returns 2023-02-28
 * getDateAsLastDayOfTheMonth({ numberOfMonths: 12 })     // Assuming today is 2023-01-15, returns 2023-12-31
 * getDateAsLastDayOfTheMonth({ numberOfMonths: 1, dateFrom: new Date('2023-11-01') }) // Returns 2023-11-30
 */
export const getDateAsLastDayOfTheMonth = ({
  numberOfMonths,
  dateFrom = new Date(),
}: GetDateAsLastDayOfTheMonthOptions): Date => {
  const date = new Date(dateFrom);
  date.setMonth(date.getMonth() + numberOfMonths - 1); // Subtracting 1 to adjust to the same month
  date.setMonth(date.getMonth() + 1, 0); // Sets the date to the last day of the month
  return date;
};
