import React from "react";
import styled from 'styled-components';

type CheckboxProp = {
  name: string,
  label: string,
  selected: boolean,
}

interface CheckboxProps {
  label: string;
  name: string;
  selected: boolean;
  onSelectedChange: (checkbox: CheckboxProp) => void;
}

const CheckboxContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Checkbox = ({ label, name, selected, onSelectedChange }: CheckboxProps) =>
  <CheckboxContainer>
    <input
      type="checkbox"
      id={label}
      checked={selected}
      onChange={(el) => {
        onSelectedChange({
          label: label,
          name: name,
          selected: el.target.checked
        });
      }}
    />
    <label htmlFor={label}>{label}</label>
  </CheckboxContainer>

