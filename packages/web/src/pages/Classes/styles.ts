import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  #search-teachers {
    margin-top: 3.2rem;
  }

  #search-teachers label {
    color: var(--color-text-in-primary);
  }

  #search-teachers button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 2ms;
    margin-top: 4.3rem;

    outline-width: 0.5rem;
    outline-color: var(--button-text);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -30px;
    }

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;
