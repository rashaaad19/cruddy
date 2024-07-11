import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Table } from "./Styled-Components/TableComponent";
import { Button } from "@mui/material";

import { auth, db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { AddTableARIA } from "../utilties/tableRoles";
import { salaryFormater } from "../utilties/salaryFormater";
import { MoonLoader } from "react-spinners";

const DataTable = () => {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //extracting the user id for whom the collection will be added
  const userID = auth.currentUser.uid;

  //refrence to the document and collection
  const docRef = doc(db, "users", userID);
  const employeesRef = collection(docRef, "employees");

  //wrapping function with useReducer to prevent to memorize the function
  const showData = useCallback(async () => {
    setIsLoading(true);
    try {
      const docSnap = await getDoc(docRef);

      //if the document exists, getting a snapchot for the employees collection inside it
      if (docSnap.exists) {
        const querySnap = await getDocs(employeesRef);
        if (querySnap.empty) {
          console.log("no employees found");
          // Ensure the state is updated to an empty array
          setEmployeeArray([]);
        } else {
          //mapping through the collection data and store it in EmployeesArray state
          const employeesData = querySnap.docs.map((doc) => doc.data());
          setEmployeeArray(employeesData);
        }
      } else {
        console.log("no user document");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [docRef, employeesRef]);

  // Trigger functions
  useEffect(() => {
    showData();
    AddTableARIA();
  }, []);

  //Delete handler

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const employeeDocRef = doc(employeesRef, id);
      await deleteDoc(employeeDocRef);
      console.log("deleted");
      showData();
    } else {
      console.log("User delete action canceled.");
    }
  };

  return (
    <Table>
      <caption>Employees</caption>
      {isLoading ? (
        <tbody>
          <tr>
            {/* centering the spinner in the middle of table */}
            <td
              colSpan="7"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {" "}
              <MoonLoader color="#811493" />
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>

          {/* conditonally rendering the employees data */}

          {employeeArray.length > 0 ? (
            employeeArray.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{salaryFormater(data.salary)}</td>
                <td>{data.date}</td>
                <td>
                  <div>
                    <Button
                      component={Link}
                      to={`edit/${data.id}`}
                      variant="outlined"
                      color="secondary"
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => {
                        deleteHandler(data.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                There are no employees yet.
              </td>
            </tr>
          )}
        </tbody>
      )}
    </Table>
  );
};

export default DataTable;
