import {
  DisplayTokensOptions,
  displayTokens,
} from "lib/utils/tokens/display-tokens";
import React from "react";
import { parseUnits } from "viem";
import { FlexRow, Typography } from "../..";

interface Props extends DisplayTokensOptions {
  value: string;
  label?: string;
  formattedPrice?: number;
  decimals?: number;
}

export const ETHValue: React.FC<Props> = ({
  value,
  formattedPrice,
  decimals = 18,
  label = "ETH Value",
  ...rest
}) => {
  return (
    <FlexRow className="items-center">
      <Typography type="meta">{label}</Typography>
      <Typography>
        {displayTokens(BigInt(parseUnits(value, decimals)), {
          displayInDollars: true,
          formattedPrice: formattedPrice,
          hideTokenAmount: true,
          ...rest,
        })}
      </Typography>
    </FlexRow>
  );
};
