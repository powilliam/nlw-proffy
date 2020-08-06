import React, { InputHTMLAttributes, memo } from "react";

import { Container } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ htmlFor, label, ...rest }) => {
  return (
    <Container className="input-block">
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} {...rest} />
    </Container>
  );
};

export default memo(Input);
