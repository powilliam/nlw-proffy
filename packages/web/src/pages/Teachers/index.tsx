import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Teacher from "../../components/Teacher";

import { Container } from "./styles";

const Teachers: React.FC = () => {
  return (
    <Container id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <Teacher />
      </main>
    </Container>
  );
};

export default Teachers;
