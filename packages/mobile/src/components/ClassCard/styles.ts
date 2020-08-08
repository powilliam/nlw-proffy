import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface FavoriteButton {
  favorited?: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-top: -25px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #e6e6f0;
`;

export const ProfileInformation = styled.View`
  margin-left: 16px;
`;

export const TeacherName = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264d;
  font-size: 20px;
`;

export const TeacherSubject = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Biography = styled.Text`
  margin: 0px 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafafa;
  padding: 24px;
  margin-top: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: Archivo_700Bold;
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsGroup = styled.View`
  flex-direction: row;
  margin-top: 14px;
`;

export const FavoriteButton = styled(RectButton)<FavoriteButton>`
  background-color: ${(props) => (props.favorited ? "#8257e5" : "#e33d3d")};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ContactText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  margin-left: 16px;
  font-size: 16px;
`;
