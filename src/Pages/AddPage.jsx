import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmployeeDataForm from "../components/EmployeeDataForm";

const AddPage = () => {
  const uid = useSelector((state) => state.userData.id);
  const navigate = useNavigate();

  console.log(uid);

  const employeesRef = collection(db, "users", uid, "employees");
  console.log(employeesRef);

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
    console.log(employeeData);
    navigate("/home");
  };
  return (
    <>
      <EmployeeDataForm handleSubmit={handleOnSubmit} formType="add" />
    </>
  );
};

export default AddPage;
