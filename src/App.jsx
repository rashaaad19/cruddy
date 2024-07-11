import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Pages/ProtectedRoute";
import EditPage from "./Pages/EditPage";
import AddPage from "./Pages/AddPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  //react router initialization
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <LoginForm />,
    },
    {
      path: "register",
      element: <RegisterForm />,
    },
    // Adding home route as protected route to check authentication each time user opens it
    {
      path: "home",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "home/edit/:employeeID",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <EditPage />,
        },
      ],
    },
    {
      path: "home/add-employee",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <AddPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </>
  );
}
export default App;
