import cn from "classnames";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

/**
 * `FlexRow` Component
 *
 * The `FlexRow` component provides a convenient way to create a flexbox container with a row direction.
 *
 * ## Default Styles
 * Tailwind code: `flex flex-row gap-3`
 *
 * By default, the component has the following styles:
 * - Display set to `flex` (making it a flexbox container).
 * - Flex direction set to `row`.
 * - A gap of `3` units between child items.
 *
 * ## Overriding Default Styles
 * Any props passed to the component (including `className`) will override the default styles.
 * This means that you can easily customize the component to fit your needs, while still benefiting from the provided defaults.
 *
 * @example
 * ```jsx
 * <FlexRow className="justify-between">
 *   <div>Left</div>
 *   <div>Right</div>
 * </FlexRow>
 * ```
 *
 * In the above example, child items will be justified to the start and end of the container respectively.
 *
 * @param props Props for the component.
 * @returns The `FlexRow` component.
 */

export const FlexRow: React.FC<Props> = ({ children, ...rest }) => {
  const classes = cn("flex flex-row gap-3", rest.className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
