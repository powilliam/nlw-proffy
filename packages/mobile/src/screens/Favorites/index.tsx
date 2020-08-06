import React from "react";
import { View } from "react-native";

import Header from "../../components/Header";

import { Container } from "./styles";

const Favorites: React.FC = () => {
  return (
    <Container>
      <Header title="Meus proffys favoritos" />
    </Container>
  );
};

export default Favorites;
