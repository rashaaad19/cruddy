import { useEffect, useState } from "react";
import { AddTableARIA } from "../utilties/tableRoles";
import { Table } from "./Styled-Components/TableComponent";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [employeeArray, setEmployeeArray] = useState([]);

  //extracting the user id for whom the collection will be added
  const userID = auth.currentUser.uid;

  //accessing the user doc
  const docRef = doc(db, "users", userID);

  const showData = async () => {
    const docSnap = await getDoc(docRef);

    //if the document exists, getting a snapchot for the employees collection inside it
    if (docSnap.exists) {
      const employeesRef = collection(docRef, "employees");
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
  };

  //Trigger the showData function when the component mounts for first time
  useEffect(() => {
    showData();
  });

  // employeeArray.length > 0 &&
  //   console.log(employeeArray[0].data.map((data) => data));
  // employeeArray.length > 0 &&
  //   employeeArray[0].data.map((data) => console.log(data));

  //running the function on the initial render
  useEffect(() => {
    AddTableARIA();
  });

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
          employeeArray[0].data.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.salary}</td>
              <td>{data.date}</td>
              <td>
                <Link to={`edit/${data.id}`}>Edit</Link> | <button>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
