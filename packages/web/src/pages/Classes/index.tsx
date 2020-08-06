import React, { useRef, useCallback, useMemo } from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../store";
import { IClassesState } from "../../reducers/Classes";

import PageHeader from "../../components/PageHeader";
import ClassCard from "../../components/ClassCard";
import UncontrolledSelect from "../../components/UncontrolledSelect";
import UncontrolledInput from "../../components/UncontrolledInput";

import { Container } from "./styles";

interface FormData {
  subject: string;
  week_day: string;
  time: string;
}

const Classes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const classes = useSelector<IStore, IClassesState>((state) => state.classes);
  const dispatch = useDispatch();

  const onSubmit = useCallback<SubmitHandler<FormData>>(
    (payload) => {
      const { subject, time, week_day } = payload;
      if (subject && time && week_day) {
        dispatch({ type: "REQUEST_SEARCH_CLASSES", payload });
      }
    },
    [dispatch]
  );

  const data = useMemo(() => classes.data, [classes]);
  const uncontrolledSelectSubjectDefaultValue = useMemo(() => classes.subject, [
    classes,
  ]);
  const uncontrolledSelectWeekdayDefaultValue = useMemo(
    () => classes.week_day,
    [classes]
  );
  const uncontrolledInputTimeDefaultValue = useMemo(() => classes.time, [
    classes,
  ]);
  const uncontrolledSelectSubjectOptions = useMemo(
    () => [
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
    ],
    []
  );
  const uncontrolledSelectWeekdayOptions = useMemo(
    () => [
      { value: "0", label: "Domingo" },
      { value: "1", label: "Segunda-feira" },
      { value: "2", label: "Terça-feira" },
      { value: "3", label: "Quarta-feira" },
      { value: "4", label: "Quínta-feira" },
      { value: "5", label: "Sexta-feira" },
      { value: "6", label: "Sábado" },
    ],
    []
  );

  return (
    <Container id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form ref={formRef} id="search-teachers" onSubmit={onSubmit}>
          <UncontrolledSelect
            name="subject"
            label="Matéria"
            defaultValue={uncontrolledSelectSubjectDefaultValue}
            options={uncontrolledSelectSubjectOptions}
          />
          <UncontrolledSelect
            name="week_day"
            label="Dia da semana"
            defaultValue={uncontrolledSelectWeekdayDefaultValue}
            options={uncontrolledSelectWeekdayOptions}
          />
          <UncontrolledInput
            name="time"
            label="Hora"
            type="time"
            defaultValue={uncontrolledInputTimeDefaultValue}
          />
          <button type="submit">Buscar</button>
        </Form>
      </PageHeader>

      <main>
        {data?.map((teacherClass) => (
          <ClassCard key={teacherClass.id} data={teacherClass} />
        ))}
      </main>
    </Container>
  );
};

export default Classes;
