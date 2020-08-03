import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import Back from "../../assets/images/icons/back.svg";

import { Container } from "./styles";

export interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <div className="top-bar-container">
        <Link to="/">
          <img src={Back} alt="Voltar" />
        </Link>
        <img src={Logo} alt="Proffy Logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </Container>
  );
};

export default PageHeader;
