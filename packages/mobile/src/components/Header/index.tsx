import React, { useCallback } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackIcon from "../../assets/images/icons/back.png";
import Logo from "../../assets/images/logo.png";

import { Container, TopBar, BackButton, HeaderTitle } from "./styles";

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => navigate("Landing"), [navigate]);

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <Image source={BackIcon} resizeMode="contain" />
        </BackButton>

        <Image source={Logo} resizeMode="contain" />
      </TopBar>

      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;
