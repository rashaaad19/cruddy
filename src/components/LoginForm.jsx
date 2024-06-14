import { Button, TextField } from "@mui/material";
import {
  Container,
  FormHeader,
  Form,
  PasswordMsg,
} from "./Styled-Components/FormComponents";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userAuthActions } from "../store/userAuthSlice";

const LoginForm = () => {
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const dispatch=useDispatch();

  //Form submission handler
  const handleOnSubmit = async (event) => {
    // Extracting form data after submission
    event.preventDefault();
    const data = new FormData(event.target);
    const password = data.get("Password");
    // Validating the password length

    if (password.length < 6) {
      console.log("Password is too short !!");
      setPasswordInvalid(true);
      return;
    }
    // After passing the validation assembling data in userData object for easier usage
    else {
      setPasswordInvalid(false);
      const userData = {
        email: data.get("Email"),
        password: data.get("Password"),
      };
      // Logging in with firebase auth
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        setUserData(userCredential.user);

        //Set Authentication to true
        dispatch(userAuthActions.setAuth(true))
        // Navigate to the home page after successful login
        navigate("/home");
      } catch (error) {
        console.log(error.code);
      }
    }
  };

  return (
    <>
      <Container>
        <FormHeader>
          <h1>Sign In</h1>
          <p>
            Dosn&lsquo;t have an account ? <Link to="register">Sign Up</Link>
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
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
