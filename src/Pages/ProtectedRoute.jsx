import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(false); // Default to false until Firebase initializes
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setIsLoading(false);
    });
    return () => {
      listen();
    };
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
