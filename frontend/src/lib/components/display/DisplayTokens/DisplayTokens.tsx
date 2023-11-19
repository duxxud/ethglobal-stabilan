import React from "react";
import { formatUnits } from "viem";

import { calculateEthCost } from "../../../utils/money/calculate-eth-cost";
import { Typography, TypographyType } from "../../text/Typography/Typography";

export interface DisplayTokensProps {
  /**
   * The token amount to display as a bigint. If undefined, it defaults to "0".
   */
  tokens: bigint | undefined;

  /**
   * The current price of Ethereum in dollars, used to calculate the equivalent dollar value.
   */
  ethPrice?: number;

  /**
   * Determines whether the dollar value should be displayed.
   * Defaults to false.
   */
  displayInDollars?: boolean;

  /**
   * Specifies the type of typography to be used.
   * Defaults to "meta".
   */
  typographyType?: TypographyType;

  /**
   * The number of decimal places to display for the token amount.
   * Defaults to 2.
   */
  numberOfDecimals?: number;
}

/**
 * `DisplayTokens` component
 *
 * This component displays the token amount and, optionally, the equivalent dollar value.
 *
 * @param tokens The token amount to display.
 * @param ethPrice The current price of Ethereum in dollars.
 * @param displayInDollars Determines if the dollar value should also be displayed.
 * @param typographyType Specifies the typography type.
 * @param numberOfDecimals The number of decimal places for the token amount.
 * @returns A formatted string of tokens and, optionally, the dollar value.
 */
export const DisplayTokens: React.FC<DisplayTokensProps> = ({
  tokens,
  ethPrice,
  displayInDollars = false,
  typographyType = "meta",
  numberOfDecimals = 2,
}) => {
  if (!tokens) return <Typography type={typographyType}>/</Typography>;

  // Convert tokens to a number for display purposes
  const tokenAmount = parseFloat(formatUnits(tokens, 18));
  const wholePart = Math.floor(tokenAmount);
  const decimalPart = Math.abs(tokenAmount - wholePart)
    .toFixed(numberOfDecimals)
    .slice(2);

  const formattedTokens = `${wholePart}.${decimalPart}`;

  const dollarValue =
    ethPrice && displayInDollars
      ? ` ($${calculateEthCost(tokenAmount, ethPrice)})`
      : "";
  console.log({ dollarValue });

  return (
    <Typography type={typographyType}>
      {formattedTokens}
      {dollarValue}
    </Typography>
  );
};
