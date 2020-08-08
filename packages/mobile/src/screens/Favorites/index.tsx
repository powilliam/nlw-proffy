import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { Classes } from "@proffy/network";

import Header from "../../components/Header";
import ClassCard from "../../components/ClassCard";

import { Container } from "./styles";

const Favorites: React.FC = () => {
  const renderListHeaderComponent = useCallback(
    () => <Header title="Meus proffys favoritos" />,
    []
  );
  const renderClassesCards = useCallback<ListRenderItem<Classes>>(
    ({ item }) => <ClassCard data={item} />,
    []
  );
  const keyExtractor = useCallback((item: Classes) => item.id, []);

  return (
    <Container>
      <FlatList
        data={[]}
        ListHeaderComponent={renderListHeaderComponent}
        renderItem={renderClassesCards}
        keyExtractor={keyExtractor}
        style={{ marginTop: -40 }}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </Container>
  );
};

export default Favorites;
