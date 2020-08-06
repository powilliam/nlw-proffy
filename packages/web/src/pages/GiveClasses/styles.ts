import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
  }

  main fieldset {
    border: 0;
    padding: 0 2.4rem;
  }

  main fieldset + fieldset {
    margin-top: 6.4rem;
  }

  main fieldset .input-block + .textarea-block,
  main fieldset .select-block + .input-block {
    margin-top: 2.4rem;
  }

  main fieldset legend {
    font: 700 2.4rem Archivo;
    color: --var(color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  main fieldset legend button {
    background: none;
    border: 0;
    color: var(--color-primary);
    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 200ms;

    &:hover {
      color: var(--primary-dark);
    }
  }

  main fieldset .schedule-item + .schedule-item {
    margin-top: 2.4rem;
  }

  main footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;
  }

  main footer p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  main footer p img {
    margin-right: 2rem;
  }

  main footer button {
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
    margin-top: 3.2rem;

    outline-width: 0.5rem;
    outline-color: var(--button-text);

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    main fieldset {
      padding: 0 6.4rem;
    }

    main fieldset .schedule-item {
      display: grid;
      grid-template-columns: 2fr repeat(2, 1fr);
      grid-gap: 1.6rem;
    }

    main fieldset .schedule-item .input-block,
    main fieldset .schedule-item .select-block {
      margin-top: 0 !important;
    }

    main footer {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    main footer p {
      justify-content: space-between;
    }

    main footer button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
