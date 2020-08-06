import React, { useRef, useEffect, InputHTMLAttributes, memo } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

export interface UncontrolledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const UncontrolledInput: React.FC<UncontrolledInputProps> = ({
  name,
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField, inputRef, name]);

  return (
    <Container className="input-block">
      <label htmlFor={name}>{label}</label>
      <input ref={inputRef} id={name} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default memo(UncontrolledInput);
