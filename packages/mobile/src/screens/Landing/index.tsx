import React, { useState, useCallback, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import LandingImg from "../../assets/images/landing.png";
import Study from "../../assets/images/icons/study.png";
import GiveClasses from "../../assets/images/icons/give-classes.png";
import Heart from "../../assets/images/icons/heart.png";

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonGroup,
  Button,
  ButtonText,
  Connections,
} from "./styles";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  const { navigate } = useNavigation();

  const handleNavigateToGiveClasses = useCallback(
    () => navigate("GiveClasses"),
    [navigate]
  );

  const handleNavigateToStudy = useCallback(() => navigate("Study"), [
    navigate,
  ]);

  useEffect(() => {
    api
      .getTotalConnections()
      .then((response) => setTotalConnections(response.data.total));
  }, []);

  return (
    <Container>
      <Banner source={LandingImg} resizeMode="contain" />
      <Title>
        Seja bem-vindo {"\n"}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <ButtonGroup>
        <Button primary onPress={handleNavigateToStudy}>
          <Image source={Study} />
          <ButtonText>Estudar</ButtonText>
        </Button>
        <Button onPress={handleNavigateToGiveClasses}>
          <Image source={GiveClasses} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonGroup>
      <Connections>
        Total de {totalConnections} conexões já realizadas{" "}
        <Image source={Heart} />
      </Connections>
    </Container>
  );
};

export default Landing;
