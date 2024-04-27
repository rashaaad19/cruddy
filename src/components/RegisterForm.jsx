import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

//styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormHeader = styled.div`
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
const Form = styled.form`
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
const PasswordMsg = styled.p`
  color: red;
  margin-block: 8px;
  visibility: ${({ passwordInvalid }) =>
    passwordInvalid ? "visible" : "hidden"}; // Dynamically set visibility
`;

const RegisterForm = () => {
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  //Form submission handler
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const password = data.get("Password");
    if (password.length < 6) {
      console.log("Password is too short !!");
      setPasswordInvalid(true);
      return;
    } else {
      setPasswordInvalid(false);
      const userData = {
        email: data.get("Email"),
        password: data.get("Password"),
      };
      console.log(userData);
    }
  };

  return (
    <>
      <Container>
        <FormHeader>
          <h1>Sign In</h1>
          <p>
            Dosn&lsquo;t have an account ? <a>Sign Up</a>
          </p>
        </FormHeader>
        <Form onSubmit={handleOnSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            color="secondary"
            name="Email"
            type="email"
            fullWidth={true}
          />
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              color="secondary"
              name="Password"
              type="password"
              fullWidth={true}
              error={passwordInvalid}
            />
            <PasswordMsg passwordInvalid={passwordInvalid}>
              Please enter password that contain more than 6 characters.
            </PasswordMsg>
          </div>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default RegisterForm;
