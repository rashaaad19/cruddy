import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmployeeDataForm from "../components/EmployeeDataForm";
import { useEffect } from "react";

const AddPage = () => {
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

    //adding new doc to the collection with the added employee id
    await setDoc(doc(employeesRef, employeeData.id), {
      date: employeeData.date,
      email: employeeData.email,
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      id: employeeData.id,
      salary: employeeData.salary,
    });
    navigate("/home");
  };

  useEffect(() => {
    const showData = async () => {
      const querySnap = await getDocs(employeesRef);
      querySnap.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    showData();
  }, []);
  return (
    <>
      <EmployeeDataForm handleSubmit={handleOnSubmit} formType="add" />
    </>
  );
};

export default AddPage;
