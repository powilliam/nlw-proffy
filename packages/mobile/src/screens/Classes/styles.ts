import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Form } from "@unform/mobile";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const SearchForm = styled(Form)`
  margin-bottom: 8px;
`;

export const HorizontalInputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HorizontalInputBlock = styled.View``;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const SubmitButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 16px;
`;
