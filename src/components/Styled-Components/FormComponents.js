import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormHeader = styled.div`
  text-align: center;
  h1 {
    color: #811493;
  }
  p {
    color: #B5A7B6;
  }
  a {
    color: #BE4BD1;
    font-weight: 500;
    text-decoration: none;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(100%, 35rem);
  margin: 0 auto;
  gap: 10px;

  .addEmployee-button {
    align-self: center;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
  visibility: ${({ $errorState }) =>
    $errorState ? "visible" : "hidden"}; // Dynamically set visibility: ;
`;
