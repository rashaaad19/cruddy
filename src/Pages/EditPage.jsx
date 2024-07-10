import { useSelector } from "react-redux";
import EmployeeDataForm from "../components/EmployeeDataForm";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();
  const uid = useSelector((state) => state.userData.id);
  const { employeeID } = useParams();
  const employeeRef = doc(db, "users", uid, "employees", employeeID);

  const handleOnEdit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const employeeData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      salary: data.get("salary"),
      date: data.get("date"),
    };

    //updating the document in firestore
    try {
      await updateDoc(employeeRef, employeeData);
      console.log("form is editted!");
      navigate("/home");
    } catch (error) {
      console.log("Error editting the form ", error);
    }
  };

  //Retriving employee data from firestore in first render
  useEffect(() => {
    const showData = async () => {
      const docSnap = await getDoc(employeeRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setEmployeeData(docSnap.data());
      } else {
        console.log("No data found.");
      }
    };
    showData();
  }, []);

  return (
    <EmployeeDataForm
      formType="edit"
      employeeData={employeeData}
      handleSubmit={handleOnEdit}
    />
  );
};

export default EditPage;
