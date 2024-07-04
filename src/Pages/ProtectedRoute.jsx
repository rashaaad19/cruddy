import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(false); // Default to false until Firebase initializes

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuth(!!user); // Update isAuth based on current authentication state
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  // Check if user is authenticated and redirect accordingly
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
