import { useCallback, useEffect, useState } from "react";
import { AddTableARIA } from "../utilties/tableRoles";
import { Table } from "./Styled-Components/TableComponent";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [employeeArray, setEmployeeArray] = useState([]);
  

  //extracting the user id for whom the collection will be added
  const userID = auth.currentUser.uid;

  //refrence to the document and collection
  const docRef = doc(db, "users", userID);
  const employeesRef = collection(docRef, "employees");

  //wrapping function with useReducer to prevent to memorize the function
  const showData = useCallback(async () => {
    const docSnap = await getDoc(docRef);

    //if the document exists, getting a snapchot for the employees collection inside it
    if (docSnap.exists) {
      const querySnap = await getDocs(employeesRef);
      if (querySnap.empty) {
        console.log("no employees found");
      }
      {
        //mapping through the collection data and store it in EmployeesArray state
        const employeesData = querySnap.docs.map((doc) => doc.data());
        setEmployeeArray(employeesData);
      }
    } else {
      console.log("no user document");
    }
  }, [docRef, employeesRef]);


  //Trigger functions 
  useEffect(() => {
    showData();
    AddTableARIA();
  }, [showData]);


  return (
    <Table>
      <caption>Employees</caption>
      <tbody>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        {/* conditonally rendering the employees data if exists */}

        {employeeArray.length > 0 &&
          employeeArray.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.salary}</td>
              <td>{data.date}</td>
              <td>
                <Link to={`edit/${data.id}`}>Edit</Link> |{" "}
                <button>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
