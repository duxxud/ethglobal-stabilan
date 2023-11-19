import { Address0x } from "app/config/Contract-Addresses";
import { getDateAsLastDayOfTheMonth } from "lib/utils/date/find-last-day-of-the-month";

// Function to format the 'until' date
export const formatUntilDate = (numberOfMonths: number) => {
  const lastDayOfMonth = getDateAsLastDayOfTheMonth({
    numberOfMonths,
    dateFrom: new Date("2023-11-01"),
  });
  return lastDayOfMonth.toLocaleDateString();
};

export enum TokenType {
  OPTION = 0,
  BACKING = 1,
}

export interface UserToken {
  tokenType: TokenType;
  stabilanTokenAddress: Address0x;
  undelyingAssetAddress: Address0x;
  backedAsset: Address0x;
  endEpoch: number;
  balance: number;
}

// struct UserToken {
//   TokenType tokenType;
//   address stabilanTokenAddress;
//   address undelyingAssetAddress;
//   address backedAsset;
//   uint256 endEpoch;
//   uint256 balance;
// }
