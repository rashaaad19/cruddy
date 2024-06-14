import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./Pages/HomePage";

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
    { path: "home", element: <HomePage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
