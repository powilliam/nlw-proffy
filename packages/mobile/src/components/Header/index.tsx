import React, { ReactNode, useCallback } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BackIcon from "../../assets/images/icons/back.png";
import Logo from "../../assets/images/logo.png";

import { Container, TopBar, BackButton, HeaderTitle, Footer } from "./styles";

export interface HeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();

  const handleGoBack = useCallback(() => navigate("Landing"), [navigate]);

  return (
    <Container style={{ marginTop: top }}>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <Image source={BackIcon} resizeMode="contain" />
        </BackButton>

        <Image source={Logo} resizeMode="contain" />
      </TopBar>

      <Footer>
        <HeaderTitle>{title}</HeaderTitle>
        {headerRight}
      </Footer>

      {children}
    </Container>
  );
};

export default Header;
