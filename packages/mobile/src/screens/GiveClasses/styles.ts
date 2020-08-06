import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  font-size: 16px;
  line-height: 26px;
  font-family: Poppins_400Regular;
  color: #d4c2ff;
`;

export const Button = styled(RectButton)`
  margin: 40px 0px;
  background-color: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Archivo_700Bold;
`;
