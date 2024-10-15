import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../../../utils/auth"

const PrivateRoute = () => {
  const token = Auth();

  return token?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
