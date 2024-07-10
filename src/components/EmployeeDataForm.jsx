import { Button, TextField } from "@mui/material";

import {
  Container,
  Form,
  FormHeader,
  ErrorMsg,
} from "../components/Styled-Components/FormComponents";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

//number input props
const inputProps = {
  min: 1000,
  max: 9999,
};

const inputLapelProps = {
  shrink: true,
};

const EmployeeDataForm = ({
  handleSubmit,
  formType,
  employeeData,
  idError,
}) => {
  console.log(idError);
  return (
    <Container>
      {formType === "add" ? (
        <FormHeader>
          <h1>Add Employee</h1>
          <p>Please enter the employee data</p>
        </FormHeader>
      ) : (
        <FormHeader>
          <h1>Edit Employee</h1>
          <p>Enter the new employee data</p>
        </FormHeader>
      )}
      <Form onSubmit={handleSubmit}>
        <TextField
          required
          name="firstName"
          type="text"
          label="First Name"
          color="info"
          fullWidth={true}
          id="outlined-required text"
          placeholder={formType === "add" ? "Enter employee first name" : ""}
          defaultValue={formType === "edit" ? employeeData.firstName : ""}
          //checking if employee data prop is defined before accessing it
          key={employeeData ? employeeData.firstName : undefined}
          InputLabelProps={formType === "edit" ? inputLapelProps : undefined}
        />
        <TextField
          required
          name="lastName"
          type="text"
          label="Last Name"
          color="info"
          fullWidth={true}
          id="outlined-required text"
          placeholder={formType === "add" ? "Enter employee last name" : ""}
          defaultValue={formType === "edit" ? employeeData.lastName : ""}
          key={employeeData ? employeeData.lastName : undefined}
          InputLabelProps={formType === "edit" ? inputLapelProps : undefined}
        />
        <TextField
          required
          name="email"
          type="email"
          label="Email"
          color="info"
          fullWidth={true}
          id="outlined-required text"
          placeholder={formType === "add" ? "Enter employee email" : ""}
          defaultValue={formType === "edit" ? employeeData.email : ""}
          key={employeeData ? employeeData.email : undefined}
          InputLabelProps={formType === "edit" ? inputLapelProps : undefined}
        />

        <TextField
          required
          name="salary"
          type="number"
          label="Salary"
          color="info"
          fullWidth={true}
          id="outlined-required number"
          placeholder={formType === "add" ? "Enter employee salary" : ""}
          defaultValue={formType === "edit" ? employeeData.salary : ""}
          key={employeeData ? employeeData.salary : undefined}
          InputLabelProps={formType === "edit" ? inputLapelProps : undefined}
        />
        {formType === "add" && (
          <TextField
            required
            name="id"
            type="number"
            label="Employee ID"
            color="info"
            fullWidth={true}
            id="outlined-required number"
            inputProps={inputProps}
            placeholder={"Enter employee id"}
          />
        )}
        {idError === true && (
          <ErrorMsg $errorState={idError}>
            IDs must be unique please enter different ID.
          </ErrorMsg>
        )}

        <DatePicker
          label="Date"
          name="date"
          defaultValue={
            formType === "edit" ? dayjs(employeeData.date) : undefined
          }
          key={employeeData ? employeeData.date : undefined}
        />
        <Button
          variant="contained"
          className="addEmployee-button"
          type="submit"
        >
          {formType === "add" ? "Add Employee" : "Edit Employee"}
        </Button>
      </Form>
    </Container>
  );
};

export default EmployeeDataForm;
