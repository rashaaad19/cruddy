import { Button, TextField } from "@mui/material";
import {
  Container,
  Form,
  FormHeader,
  PasswordMsg,
} from "./Styled-Components/FormComponents";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [passwordInvalid, setPasswordInvalid] = useState(false);

const handleOnSubmit=(event)=>{
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
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error.code);
        });
      console.log(userData);
    }
}
  return (
    <>
      <Container>
        <FormHeader>
          <h1>Sign Up</h1>
          <p>
            Already have an account ? <Link to="/">Sign In</Link>
          </p>
        </FormHeader>
        <Form onSubmit={handleOnSubmit}>
          <TextField
            required
            id="outlined-required email"
            label="Email"
            color="secondary"
            name="Email"
            type="email"
            fullWidth={true}
          />
          <div>
            <TextField
              required
              id="outlined-required password"
              label="Password"
              color="secondary"
              name="Password"
              type="password"
              fullWidth={true}
              error={passwordInvalid}
            />
            <PasswordMsg $passwordInvalid={passwordInvalid}>
              Please enter password that contain more than 6 characters.
            </PasswordMsg>
          </div>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            size="large"
          >
            Create Account
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default RegisterForm;
