import React from "react";

interface CheckboxProps {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const Checkbox = ({ isChecked, handleChange, label }: CheckboxProps) =>
  <div>
    <label htmlFor={label}>{label}</label>
    <input
      type="checkbox"
      id={label}
      checked={isChecked}
      onChange={handleChange}
    />
  </div>

