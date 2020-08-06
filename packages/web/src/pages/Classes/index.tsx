import React, { useRef, useState, useCallback } from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import ClassCard from "../../components/ClassCard";
import UncontrolledSelect from "../../components/UncontrolledSelect";
import UncontrolledInput from "../../components/UncontrolledInput";

import { Container } from "./styles";

interface Teacher {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  whatsapp: string;
}

interface GetClassesResponse {
  id: string;
  subject: string;
  cost: number;
  teacher: Teacher;
}

interface FormData {
  subject: string;
  weekDay: string;
  time: string;
}

const Classes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [classes, setClasses] = useState<GetClassesResponse[]>([]);

  const handleOnSubmit = useCallback<SubmitHandler<FormData>>(
    async ({ subject, time, weekDay }) => {
      const { data } = await api.get<GetClassesResponse[]>("classes", {
        params: { subject, time, week_day: weekDay },
      });

      setClasses(data);
    },
    []
  );

  return (
    <Container id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form ref={formRef} id="search-teachers" onSubmit={handleOnSubmit}>
          <UncontrolledSelect
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
          <UncontrolledSelect
            name="weekDay"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quínta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <UncontrolledInput name="time" label="Hora" type="time" />
          <button type="submit">Buscar</button>
        </Form>
      </PageHeader>

      <main>
        {classes?.map((teacherClass) => (
          <ClassCard key={teacherClass.id} data={teacherClass} />
        ))}
      </main>
    </Container>
  );
};

export default Classes;
