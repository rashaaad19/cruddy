import styled from "styled-components";

export const Container = styled.div`

@media (min-width: 900px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  align-items: center;
  .heroText span{
    font-size:4rem;
    grid-column: 1 / 2;
  }
  .actionContainer{
    grid-column: 2 / 3;
    border-radius: 25px;
  }
}
  
.heroText{
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
    gap: 25px;
    height: 500px;
    background: #d6bee126;
    padding: 2rem 4rem;
    justify-content: flex-start;
  }
  .buttonContainer{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 8rem;
  }
  h1{
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color:#811493;
    font-family: sans-serif;
    text-align: center;
  }
`;
