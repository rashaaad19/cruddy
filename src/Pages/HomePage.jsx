import { Button } from "@mui/material";
import {
  ButtonContainer,
  Header,
} from "../components/Styled-Components/HomeComponents";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const addEmployeeHandler = () => {
    alert("Add Employee");
  };

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Sign out successful");
      //navigating back to the root page if logout is successful and preventing the user from returning with back button
      return navigate("/", { replace: true });
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <>
      <Header>Employee Managment System</Header>
      <ButtonContainer>
        <Button
          variant="contained"
          color="secondary"
          onClick={addEmployeeHandler}
        >
          Add Employee
        </Button>
        <Button variant="outlined" color="secondary" onClick={logoutHandler}>
          Log out
        </Button>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
