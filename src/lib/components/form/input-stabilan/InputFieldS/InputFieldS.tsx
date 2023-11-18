import cn from "classnames";
import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./InputField.module.css";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  rightLabel?: ReactNode;
  leftLabel?: ReactNode;
  placeholder?: string;
  fullWidth?: boolean;
}

export const InputFieldS = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      name,
      rightLabel,
      leftLabel,
      placeholder,
      fullWidth,
      className,
      ...rest
    },
    ref
  ) => {
    const classes = cn(styles.container, { ["w-full"]: fullWidth }, className);
    const inputClasses = cn(styles.inputFont, styles.inputRoot);

    return (
      <div className={classes}>
        {leftLabel && <span className="w-32">{leftLabel}</span>}
        <input
          ref={ref}
          className={inputClasses}
          autoComplete="off"
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          // todo: review this
          min={0}
          {...rest}
        />
        {rightLabel && <span>{rightLabel}</span>}
      </div>
    );
  }
);

InputFieldS.displayName = "InputFieldS";
