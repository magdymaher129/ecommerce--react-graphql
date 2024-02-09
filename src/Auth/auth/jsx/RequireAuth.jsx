import { useLocation, Navigate, Outlet,redirect } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import Home from "./Home";

const RequireAuth = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();


  return isAuthenticated ? (
    <Navigate  to='/auth'  state={{ from: location }} replace  />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
