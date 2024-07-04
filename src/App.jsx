import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { auth } from "./firebase";

function App() {

  console.log(auth.currentUser)
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
