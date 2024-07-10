import { Button, TextField } from "@mui/material";
import {
  Container,
  Form,
  FormHeader,
  ErrorMsg,
} from "./Styled-Components/FormComponents";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDataActions } from "../store/UserDataSlice";

//initializing reference to users collection
const usersRef = collection(db, "users");

const RegisterForm = () => {
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      // Creating new user with firebase auth
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        const uid = userCredential.user.uid;
        console.log(userCredential);
        // Creating unique document in the users collection based on the user id and storing data in it
        await setDoc(doc(usersRef, uid), {
          email: userData.email,
          userID: uid,
        });

        //Update the email and id states
        dispatch(
          userDataActions.setUserData({ id: uid, email: userData.email })
        );

        // Navigate to home page after signing up
        navigate("/home");
      } catch (error) {
        // Catching any errors
        console.log(error);
      }
    }
  };
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
            <ErrorMsg $errorState={passwordInvalid}>
              Please enter password that contain more than 6 characters.
            </ErrorMsg>
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
