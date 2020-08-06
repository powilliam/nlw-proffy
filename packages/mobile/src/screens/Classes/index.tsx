import React, { useCallback } from "react";
import { View } from "react-native";

import Header from "../../components/Header";

import { Container } from "./styles";

const Classes: React.FC = () => {
  return (
    <Container>
      <Header title="Proffys disponíveis" />
    </Container>
  );
};

export default Classes;
