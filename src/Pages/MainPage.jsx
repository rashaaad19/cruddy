import { TypeAnimation } from "react-type-animation";
import { Container } from "../components/Styled-Components/MainComponents";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const typeSequence = [
  "Employee Management System.",
  700, // Pause for 1 second after typing the sentence
  "", // Clear the text
  700, // Pause for 1 second after clearing
  "Employee Management System.", // Type the sentence again
];

const MainPage = () => {
  return (
    <Container>
      <div className="heroText">
        <TypeAnimation speed={50} repeat={Infinity} sequence={typeSequence} />
      </div>

      <div className="actionContainer">
        <h1>Welcome to cruddy</h1>
        <div className="buttonContainer">
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="violet"
          >
            Member Login
          </Button>{" "}
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            color="secondary"
          >
            Create Account
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
