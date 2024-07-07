import { Button, TextField } from "@mui/material";

import {
  Container,
  Form,
  FormHeader,
} from "../components/Styled-Components/FormComponents";
import { DatePicker } from "@mui/x-date-pickers";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AddPage = () => {
  const uid = useSelector((state) => state.userData.id);
  console.log(uid);

  const employeesRef = collection(db, "users", uid, "employees");
  console.log(employeesRef);

  useEffect(() => {
    const showCollection = async () => {
      try {
        const querySnap = await getDocs(employeesRef);
        querySnap.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };
    showCollection();
  }, []);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const employeeData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      salary: data.get("salary"),
      date: data.get("date"),
      id: data.get("id"),
    };
    console.log(employeeData);
  };
  return (
    <>
      <Container>
        <FormHeader>
          <h1>Add Employee</h1>
          <p>Please enter the employee data</p>
        </FormHeader>
        <Form onSubmit={handleOnSubmit}>
          <TextField
            required
            name="firstName"
            type="text"
            label="First Name"
            color="info"
            fullWidth={true}
            id="outlined-required text"
          />
          <TextField
            required
            name="lastName"
            type="text"
            label="Last Name"
            color="info"
            fullWidth={true}
            id="outlined-required text"
          />
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            color="info"
            fullWidth={true}
            id="outlined-required text"
          />

          <TextField
            required
            name="salary"
            type="number"
            label="Salary"
            color="info"
            fullWidth={true}
            id="outlined-required number"
          />
          <TextField
            required
            name="id"
            type="number"
            label="Employee ID"
            color="info"
            fullWidth={true}
            id="outlined-required number"
          />
          <DatePicker label="Date" name="date" />
          <Button
            variant="contained"
            className="addEmployee-button"
            type="submit"
          >
            Add Employee
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddPage;
