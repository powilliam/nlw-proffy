import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import LandingImg from "../../assets/images/landing.svg";
import Study from "../../assets/images//icons/study.svg";
import GiveClasses from "../../assets/images/icons/give-classes.svg";
import PurpleHeart from "../../assets/images/icons/purple-heart.svg";

import { Container } from "./styles";

const Landing: React.FC = () => {
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
          <Link to="/teachers" className="study">
            <img src={Study} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/teachers" className="give-classes">
            <img src={GiveClasses} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={PurpleHeart} alt="Coração roxo" />
        </span>
      </div>
    </Container>
  );
};

export default Landing;
