import React, { useMemo, useCallback, memo } from "react";

import api from "../../services/api";

import Whatsapp from "../../assets/images/icons/whatsapp.svg";

import { Container } from "./styles";

export interface ClassCardProps {
  data: {
    subject: string;
    cost: number;
    teacher: {
      id: string;
      bio: string;
      whatsapp: string;
      name: string;
      avatar: string;
    };
  };
}

const ClassCard: React.FC<ClassCardProps> = ({ data }) => {
  const teacherId = useMemo(() => data.teacher.id, [data]);
  const name = useMemo(() => data.teacher.name, [data]);
  const avatar = useMemo(() => data.teacher.avatar, [data]);
  const subject = useMemo(() => data.subject, [data]);
  const bio = useMemo(() => data.teacher.bio, [data]);
  const cost = useMemo(() => data.cost, [data]);
  const anchorHref = useMemo(() => `https://wa.me/${data.teacher.whatsapp}`, [
    data,
  ]);

  const handleCreateConnection = useCallback(async () => {
    await api.post(`connections/${teacherId}`, {});
  }, [teacherId]);

  return (
    <Container>
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={anchorHref}
          type="button"
          onClick={handleCreateConnection}
        >
          <img src={Whatsapp} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default memo(ClassCard);
