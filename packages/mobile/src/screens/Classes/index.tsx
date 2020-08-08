import React, { useRef, useState, useCallback, useMemo } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { FormHandles, SubmitHandler } from "@unform/core";

import { Classes as ClassesModel } from "@proffy/network";
import api from "../../services/api";

import Header from "../../components/Header";
import ClassCard from "../../components/ClassCard";
import Input from "../../components/Input";
import Select from "../../components/Select";

import {
  Container,
  SearchForm,
  HorizontalInputGroup,
  HorizontalInputBlock,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

interface FormData {
  week_day: string;
  subject: string;
  time: string;
}

const Classes: React.FC = () => {
  const searchFormRef = useRef<FormHandles>(null);

  const [classes, setClasses] = useState<ClassesModel[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFilterVisibility = useCallback(
    () => setIsFiltersVisible(!isFiltersVisible),
    [isFiltersVisible]
  );

  const onSubmit = useCallback<SubmitHandler<FormData>>(
    async ({ subject, week_day, time }, { reset }) => {
      if (subject && week_day) {
        const { data } = await api.getQueriedClasses({
          subject,
          week_day,
          time,
        });
        setClasses(data);
        setIsFiltersVisible(false);
        reset();
      }
    },
    [searchFormRef]
  );
  const submitForm = useCallback(() => searchFormRef.current?.submitForm(), [
    searchFormRef,
  ]);

  const renderListHeaderComponent = useCallback(
    () => (
      <Header
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilterVisibility}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm ref={searchFormRef} onSubmit={onSubmit}>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Química", label: "Química" },
                { value: "Física", label: "Física" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Inglês", label: "Inglês" },
                { value: "História", label: "História" },
                { value: "Geografia", label: "Geografia" },
                { value: "Filosofia", label: "Filosofia" },
                { value: "Sociologia", label: "Sociologia" },
              ]}
            />

            <HorizontalInputGroup>
              <HorizontalInputBlock style={{ flex: 2 }}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  options={[
                    { label: "Domingo", value: "0" },
                    { label: "Segunda-feira", value: "1" },
                    { label: "Terça-feira", value: "2" },
                    { label: "Quarta-feira", value: "3" },
                    { label: "Quinta-feira", value: "4" },
                    { label: "Sexta-feira", value: "5" },
                    { label: "Sábado", value: "6" },
                  ]}
                />
              </HorizontalInputBlock>

              <HorizontalInputBlock style={{ flex: 1, marginLeft: 8 }}>
                <Input
                  name="time"
                  label="Hora"
                  placeholder="Ex: 12:00"
                  placeholderTextColor="#777"
                />
              </HorizontalInputBlock>
            </HorizontalInputGroup>

            <SubmitButton onPress={submitForm}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </Header>
    ),
    [isFiltersVisible, searchFormRef, onSubmit, submitForm]
  );
  const renderClassesCards = useCallback<ListRenderItem<ClassesModel>>(
    ({ item }) => <ClassCard data={item} />,
    []
  );
  const keyExtractor = useCallback((item: ClassesModel) => item.id, []);

  return (
    <Container>
      <FlatList
        data={classes}
        ListHeaderComponent={renderListHeaderComponent}
        renderItem={renderClassesCards}
        keyExtractor={keyExtractor}
        style={{ marginTop: -40 }}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </Container>
  );
};

export default Classes;
