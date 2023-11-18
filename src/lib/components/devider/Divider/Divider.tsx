import cn from "classnames";
import React, { HTMLAttributes } from "react";

import { getBgVariant } from "../../../styles";
import { Color } from "../../../types/colors";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Specifies the color variant of the divider.
   * @example
   * ```jsx
   * <Divider variant="primary" />
   * ```
   */
  variant?: Color;
}

/**
 * Divider Component
 *
 * A simple horizontal rule styled based on the provided color variant.
 *
 * @example
 * <Divider variant="primary" />
 */
export const Divider: React.FC<DividerProps> = ({
  variant = "secondary",
  ...props
}) => {
  const classes = cn("h-px", getBgVariant(variant), props.className);

  return <hr {...props} className={classes} />;
};
