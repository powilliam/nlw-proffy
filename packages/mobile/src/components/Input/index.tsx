import React, { useRef, useEffect, useCallback } from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { useField } from "@unform/core";

import { Container, InputLabel, TextInput } from "./styles";

export interface InputRef extends RNTextInput {
  value: string;
}

export interface InputProps extends TextInputProps {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<InputRef>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  const onChangeText = useCallback(
    (text: string) => {
      if (inputRef.current) {
        inputRef.current.value = text;
      }
    },
    [inputRef]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = defaultValue;
    }
  }, [inputRef]);

  useEffect(() => {
    registerField({
      name,
      ref: inputRef.current,
      clearValue(ref: InputRef) {
        ref.value = "";
        ref.clear();
      },
      setValue(ref: InputRef, value: string) {
        ref.setNativeProps({ text: value });
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      },
      getValue(ref: InputRef) {
        return ref.value;
      },
    });
  }, [fieldName, registerField, inputRef]);

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        {...rest}
      />
    </Container>
  );
};

export default Input;
