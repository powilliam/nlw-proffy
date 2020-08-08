import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  ReactText,
  useState,
} from "react";
import { Picker } from "@react-native-community/picker";
import { useField } from "@unform/core";

import { Container, InputLabel } from "./styles";

export interface SelectOption {
  label: string;
  value: string;
}

export interface PickerRef extends Picker {
  value: string;
}

export interface SelectProps {
  name: string;
  label: string;
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ name, label, options }) => {
  const pickerRef = useRef<PickerRef>(null);

  const [selectedValue, setSelectedValue] = useState("");
  const { registerField, fieldName } = useField(name);

  const renderOptions = useMemo(
    () =>
      options.map((option, index) => (
        <Picker.Item key={index} label={option.label} value={option.value} />
      )),
    [options]
  );

  const onValueChange = useCallback(
    (value: ReactText) => {
      const newValue = String(value);
      if (pickerRef.current) {
        pickerRef.current.value = newValue;
      }
      setSelectedValue(newValue);
    },
    [pickerRef]
  );

  useEffect(() => {
    registerField({
      name,
      ref: pickerRef.current,
      setValue(ref: PickerRef, value: string) {
        if (pickerRef.current) {
          pickerRef.current.value = value;
        }
      },
      getValue(ref: PickerRef) {
        return ref.value;
      },
      clearValue(ref: PickerRef) {
        if (pickerRef.current) {
          pickerRef.current.value = "";
        }
      },
    });
  }, [pickerRef, registerField, fieldName]);

  return (
    <React.Fragment>
      <InputLabel>{label}</InputLabel>
      <Container>
        <Picker
          ref={pickerRef}
          onValueChange={onValueChange}
          selectedValue={selectedValue}
        >
          {renderOptions}
        </Picker>
      </Container>
    </React.Fragment>
  );
};

export default Select;
