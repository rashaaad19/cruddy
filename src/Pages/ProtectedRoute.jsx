import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ClimbingBoxLoader, MoonLoader, ScaleLoader } from "react-spinners";

const loaderWrapper={
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(false); // Default to false until Firebase initializes
  const [isLoading, setIsLoading] = useState(true);

  //adding effect to check authentication state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //switching authentication state based on if user is logged in
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      //setting loading state to false after finishing authentication state checks
      setIsLoading(false);
    });
  }, []);

  //rendring loading text when loading
  if (isLoading) {
    return (
      <div
        style={loaderWrapper}
      >
        <ScaleLoader color="#811493"/>
      </div>
    );
  }

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
