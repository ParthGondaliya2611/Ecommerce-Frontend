import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Token from "../../../utils/Auth";


const PrivateRoute = () => {
 const token=Token();


  return token?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
