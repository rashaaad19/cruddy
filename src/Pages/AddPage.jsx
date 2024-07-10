import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmployeeDataForm from "../components/EmployeeDataForm";
import { useEffect, useState } from "react";

const AddPage = () => {
  const [existingID,setExistingID] = useState(false)
  const uid = useSelector((state) => state.userData.id);
  const navigate = useNavigate();

  const employeesRef = collection(db, "users", uid, "employees");
  const handleOnSubmit = async (event) => {
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

    //check if the id already exists in the system
    const querySnap = await getDocs(employeesRef);
    let CheckID = querySnap.docs.map((doc) => doc.id).includes(employeeData.id);
    setExistingID(CheckID)

    //adding new doc to the collection with the added employee id
    if (!CheckID) {
      await setDoc(doc(employeesRef, employeeData.id), {
        date: employeeData.date,
        email: employeeData.email,
        firstName: employeeData.firstName,
        lastName: employeeData.lastName,
        id: employeeData.id,
        salary: employeeData.salary,
      });
      navigate("/home");
    } else {
      console.log("Please enter different id");
      console.log(CheckID)
    }
  };

  // useEffect(() => {
  //   const showData = async () => {
  //     const querySnap = await getDocs(employeesRef);
  //     querySnap.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   };
  //   showData();
  // }, []);


  return (
    <>
      <EmployeeDataForm
        handleSubmit={handleOnSubmit}
        formType="add"
        idError={existingID}
      />
    </>
  );
};

export default AddPage;
