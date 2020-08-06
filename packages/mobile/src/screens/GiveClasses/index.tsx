import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import GiveClassesBackground from "../../assets/images/give-classes-background.png";

import {
  Container,
  Background,
  Title,
  Description,
  Button,
  ButtonText,
} from "./styles";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => goBack(), [goBack]);

  return (
    <Container>
      <Background source={GiveClassesBackground} resizeMode="contain">
        <Title>Quer ser {`\n`}um proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor em nossa
          plataforma web.
        </Description>
      </Background>
      <Button onPress={handleGoBack}>
        <ButtonText>OK.</ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
