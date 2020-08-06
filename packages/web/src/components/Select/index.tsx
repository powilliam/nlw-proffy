import React, { InputHTMLAttributes, memo } from "react";

import { Container } from "./styles";

export type SelectOptionProps = {
  value: string | number;
  label: string;
};

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  htmlFor: string;
  label: string;
  options: SelectOptionProps[];
}

const Select: React.FC<SelectProps> = ({
  htmlFor,
  label,
  options,
  ...rest
}) => {
  return (
    <Container className="select-block">
      <label htmlFor={htmlFor}>{label}</label>
      <select defaultValue="" id={htmlFor} {...rest}>
        <option value="" selected disabled hidden>
          Selectione uma opção
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default memo(Select);
