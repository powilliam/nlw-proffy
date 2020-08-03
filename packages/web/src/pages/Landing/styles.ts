import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .logo-container img {
    height: 10rem;
  }

  .logo-container h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  .hero-image {
    width: 100%;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
  }

  .buttons-container a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 1.8rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 200ms;
  }

  .buttons-container a:last-child {
    margin-left: 1.6rem;
  }

  .buttons-container a img {
    width: 4rem;
    margin-right: 1.4rem;
  }

  .buttons-container a.study {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  .buttons-container a.give-classes {
    background: var(--color-secundary);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  .total-connetions {
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-connetions img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr repeat(2, 1fr);
      grid-template-areas:
        "logo hero hero"
        "buttons buttons total";
    }

    .logo-container {
      text-align: left;
      grid-area: logo;
      align-self: center;
      margin: 0;
    }

    .logo-container h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    .logo-container img {
      height: 100%;
    }

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }

    .buttons-container {
      grid-area: buttons;
      justify-content: flex-start;
    }

    .buttons-container a {
      font-size: 2.4rem;
    }

    .total-connections {
      grid-area: total;
      justify-self: end;
    }
  }
`;
