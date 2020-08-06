import React, { InputHTMLAttributes, memo } from "react";

import { Container } from "./styles";

export interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  htmlFor: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ htmlFor, label, ...rest }) => {
  return (
    <Container className="textarea-block">
      <label htmlFor={htmlFor}>{label}</label>
      <textarea id={htmlFor} {...rest} />
    </Container>
  );
};

export default memo(Textarea);
