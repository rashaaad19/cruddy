import styled from "styled-components";

export const Container = styled.div`
  .heroText {
    height: 15rem;
  }

  .heroText span {
    font-size: 3em;
    color: #7b1fa2;
    font-family: "IBM Plex Serif", serif;
    font-weight: 600;
  }
  .actionContainer {
    box-shadow: 12px 10px 20px 1px #81149336;
    display: flex;
    flex-direction: column;
    justify-self: center;
    height: 500px;
    background: #d6bee126;
    justify-content: center;

    padding: 1rem 4rem;
  }
  .buttonContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 4rem;
  }
  h1 {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: #811493;
    font-family: sans-serif;
    text-align: center;
  }

  @media (min-width: 900px) {
    padding-inline: 3rem;
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100vh;
    align-items: center;
    .heroText span {
      font-size: 4rem;
      grid-column: 1 / 2;
    }
    .actionContainer {
      grid-column: 2 / 3;
      border-radius: 25px;
      padding: 2rem 4rem;
      justify-content: flex-start;
      gap: 25px;
    }
    .buttonContainer {
      padding-top: 8rem;
    }
  }

  @media (min-width: 426px) and (max-width: 769px) {
    .heroText {
      height: 12rem;
    }
  }
`;
