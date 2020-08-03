import React from "react";

import Whatsapp from "../../assets/images/icons/whatsapp.svg";

import { Container } from "./styles";

const Teacher: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/55867831?s=460&u=d1b2160d2a3ec634fb9522a664de9ded58787f3e&v=4"
          alt="William Porto"
        />
        <div>
          <strong>William Porto</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada. <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={Whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default Teacher;
