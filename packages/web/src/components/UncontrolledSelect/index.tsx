import React, { useRef, useEffect, InputHTMLAttributes, memo } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

export type SelectOptionProps = {
  value: string;
  label: string;
};

export interface UncontrolledSelectProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: SelectOptionProps[];
}

const UncontrolledSelect: React.FC<UncontrolledSelectProps> = ({
  name,
  label,
  options,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { registerField, fieldName, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name,
      ref: selectRef.current,
      path: "value",
    });
  }, [selectRef, registerField, fieldName, name]);

  return (
    <Container className="select-block">
      <label htmlFor={name}>{label}</label>
      <select ref={selectRef} defaultValue={defaultValue} id={name} {...rest}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default memo(UncontrolledSelect);
