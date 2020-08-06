import React, { useRef, useEffect, InputHTMLAttributes, memo } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

export interface UncontrolledTextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const UncontrolledTextarea: React.FC<UncontrolledTextareaProps> = ({
  name,
  label,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name,
      ref: textareaRef.current,
      path: "value",
    });
  }, [fieldName, registerField, textareaRef, name]);

  return (
    <Container className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea
        ref={textareaRef}
        id={name}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default memo(UncontrolledTextarea);
