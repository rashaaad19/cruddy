import { Button } from "@mui/material";
import {
  ButtonContainer,
  Header,
} from "../components/Styled-Components/HomeComponents";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";

const HomePage = () => {
  const navigate = useNavigate();

  const addEmployeeHandler = () => {
    console.log("Add Employee");
  };

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Sign out successful");

      // Clear local storage
      localStorage.removeItem("userData");

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
          component={Link}
          to="add-employee"
        >
          Add Employee
        </Button>
        <Button variant="outlined" color="secondary" onClick={logoutHandler}>
          Log out
        </Button>
      </ButtonContainer>
      <DataTable />
    </>
  );
};

export default HomePage;
