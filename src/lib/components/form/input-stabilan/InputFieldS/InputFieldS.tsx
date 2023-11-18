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
  label?: ReactNode;
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
      label,
      placeholder,
      fullWidth,
      className,
      ...rest
    },
    ref
  ) => {
    const classes = cn(styles.container, { ["w-full"]: fullWidth }, className);

    return (
      <div className={`${classes} border focus-within:border-success`}>
        {label && <div className="flex mb-4">{label}</div>}
        <div className="flex flex-row items-center flex-wrap">
          <input
            ref={ref}
            className="text-2xl flex-1 outline-none bg-transparent not-italic"
            autoComplete="off"
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            min={0}
            {...rest}
          />
          {rightLabel && <div className="flex-shrink-0">{rightLabel}</div>}
        </div>
      </div>
    );
  }
);

InputFieldS.displayName = "InputFieldS";
