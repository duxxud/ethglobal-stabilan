import cn from "classnames";
import React, { HTMLAttributes } from "react";

import { getBgVariant } from "../../../styles";
import { Color } from "../../../types/colors";

interface VerticalDividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the color variant of the divider.
   * @example
   * ```jsx
   * <VerticalDivider variant="primary" />
   * ```
   */
  variant?: Color;
}

/**
 * VerticalDivider Component
 *
 * A simple vertical line styled based on the provided color variant.
 *
 * @example
 * <VerticalDivider variant="primary" />
 */
export const VerticalDivider: React.FC<VerticalDividerProps> = ({
  variant = "disabled",
  ...props
}) => {
  const backgroundColor = getBgVariant(variant);
  const classes = cn(
    "inline-block min-h-[1em] w-px self-stretch opacity-100 dark:opacity-50",
    backgroundColor,
    props.className
  );

  return <div {...props} className={classes} />;
};
