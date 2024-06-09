import { Button, TextField } from "@mui/material";
import { Container, FormHeader } from "./Styled-Components/FormComponents";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const RegisterForm = () => {
  return (
    <>
      <Container>
        <FormHeader>
          <h1>Sign Up</h1>
          <p>
            Already have an account ? <a>Sign In</a>
          </p>
        </FormHeader>
      </Container>
    </>
  );
};

export default RegisterForm;
