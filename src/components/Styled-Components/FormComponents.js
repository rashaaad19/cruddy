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
    text-decoration: none;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: min(100%, 35rem);
  margin: 0 auto;
  gap: 10px;
  /* div {
    width: 100%;
  } */
  .addEmployee-button {
    align-self: center;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
  visibility: ${({ $errorState }) =>
    $errorState ? "visible" : "hidden"}; // Dynamically set visibility: ;
`;
