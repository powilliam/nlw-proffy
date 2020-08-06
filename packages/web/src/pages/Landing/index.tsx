import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";
import Study from "../../assets/images//icons/study.svg";
import GiveClasses from "../../assets/images/icons/give-classes.svg";
import PurpleHeart from "../../assets/images/icons/purple-heart.svg";

import { Container } from "./styles";

interface TotalConnectionsResponse {
  total: number;
}

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get<TotalConnectionsResponse>("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Container id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Proffy Logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/classes" className="study">
            <img src={Study} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/giveclasses" className="give-classes">
            <img src={GiveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={PurpleHeart} alt="Coração roxo" />
        </span>
      </div>
    </Container>
  );
};

export default Landing;
