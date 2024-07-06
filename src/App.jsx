import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Pages/ProtectedRoute";
import EditPage from "./Pages/EditPage";
import AddPage from "./Pages/AddPage";

function App() {
  //react router initialization
  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "home/edit/:id",
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
      <RouterProvider router={router} />
    </>
  );
}
export default App;
