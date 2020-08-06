import React, { useRef, useState, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";

import { createClass } from "../../services/api";

import PageHeader from "../../components/PageHeader";
import UncontrolledInput from "../../components/UncontrolledInput";
import UncontrolledTextarea from "../../components/UncontrolledTextarea";
import UncontrolledSelect from "../../components/UncontrolledSelect";

import Warning from "../../assets/images/icons/warning.svg";

import { Container } from "./styles";

interface FormData {
  name: string;
  avatar: string;
  bio: string;
  cost: string;
  whatsapp: string;
}

const GiveClasses: React.FC = () => {
  const uncontroledFormRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [schedules, setSchedules] = useState(() => [
    { week_day: "0", from: "", to: "" },
  ]);

  const handleCreateNewSchedule = useCallback(
    () => setSchedules([...schedules, { week_day: "0", to: "", from: "" }]),
    [schedules]
  );

  const handleUpdateScheduleItem = useCallback(
    (position: number, field: string, value: string) =>
      setSchedules((schedules) =>
        schedules.map((item, index) =>
          position === index ? { ...item, [field]: value } : item
        )
      ),
    []
  );

  const onSubmit = useCallback<SubmitHandler<FormData>>(
    async (data, { reset }) => {
      const { name, avatar, bio, cost, whatsapp } = data;
      if (name && avatar && bio && cost && whatsapp) {
        await createClass({
          ...data,
          schedules,
        });
        reset();

        history.push("/classes");
      }
    },
    [schedules, history]
  );

  const uncontroledSelectSubjectOptions = useMemo(
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

  const selectWeekdayOptions = useMemo(
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
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <Form ref={uncontroledFormRef} onSubmit={onSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <UncontrolledInput name="name" label="Nome completo" type="text" />
            <UncontrolledInput name="avatar" label="Avatar" type="text" />
            <UncontrolledInput name="whatsapp" label="WhatsApp" type="text" />
            <UncontrolledTextarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <UncontrolledSelect
              name="subject"
              label="Matéria"
              options={uncontroledSelectSubjectOptions}
            />
            <UncontrolledInput
              name="cost"
              label="Custo da sua hora aula (em reais)"
              type="number"
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleCreateNewSchedule}>
                + Novo horário
              </button>
            </legend>

            {schedules?.map((_, index) => (
              <div key={index} className="schedule-item">
                <UncontrolledSelect
                  name={`schedules[${index}].weekDay`}
                  label="Dia da semana"
                  onChange={(e) =>
                    handleUpdateScheduleItem(index, "week_day", e.target.value)
                  }
                  options={selectWeekdayOptions}
                />
                <UncontrolledInput
                  name={`schedules[${index}].from`}
                  label="Das"
                  type="time"
                  onChange={(e) =>
                    handleUpdateScheduleItem(index, "from", e.target.value)
                  }
                />
                <UncontrolledInput
                  name={`schedules[${index}].to`}
                  label="Até"
                  type="time"
                  onChange={(e) =>
                    handleUpdateScheduleItem(index, "to", e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={Warning} alt="Aviso importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </Form>
      </main>
    </Container>
  );
};

export default GiveClasses;
