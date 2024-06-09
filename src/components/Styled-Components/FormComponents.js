import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormHeader = styled.div`
  text-align: center;
  h1 {
    color: darkmagenta;
  }
  p {
    color: grey;
  }
  a {
    color: #b40db4;
    font-weight: 500;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 35rem);
  margin: 0 auto;
  gap: 10px;
  div {
    width: 100%;
  }
`;
export const PasswordMsg = styled.p`
  color: red;
  margin-block: 8px;
  visibility: ${({ $passwordInvalid }) =>
    $passwordInvalid ? "visible" : "hidden"}; // Dynamically set visibility: ;
`;
