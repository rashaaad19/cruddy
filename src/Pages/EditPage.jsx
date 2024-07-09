import { useSelector } from "react-redux";
import EmployeeDataForm from "../components/EmployeeDataForm";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const [employeeData, setEmployeeData] = useState({});
  const uid = useSelector((state) => state.userData.id);
  const { employeeID } = useParams();
  const employeeRef = doc(db, "users", uid, "employees", employeeID);
  console.log("User ID is ", uid, " and employee ID is ", employeeID);
  console.log(employeeRef);

  useEffect(() => {
    const showData = async (id) => {
      const docSnap = await getDoc(employeeRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setEmployeeData(docSnap.data());
      }
    };
    showData();
  }, []);

  return <EmployeeDataForm formType="edit" employeeData={employeeData} />;
};

export default EditPage;
