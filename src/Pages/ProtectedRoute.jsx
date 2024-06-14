import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
    // Redirecting the user back to the log in page if not authenticated
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
