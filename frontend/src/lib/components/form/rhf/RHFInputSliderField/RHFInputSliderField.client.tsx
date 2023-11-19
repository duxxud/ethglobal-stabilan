"use client";

import { InputHTMLAttributes } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

import { InputSliderField } from "../../input/InputSliderField/InputSliderField";

type IProps<T> = {
  name: keyof T;
  rules?: RegisterOptions;
  min?: number;
  max?: number;
  label?: string;
  valueLabel?: string;
};

type Props<T> = IProps<T> & InputHTMLAttributes<HTMLInputElement>;

export function RHFInputSliderField<T>({
  name,
  rules,
  label,
  valueLabel,
  min = 0,
  max = 100,
  ...other
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputSliderField
          label={label}
          valueLabel={valueLabel}
          {...field}
          min={min}
          max={max}
          value={field.value || 0}
          {...other}
        />
      )}
    />
  );
}
