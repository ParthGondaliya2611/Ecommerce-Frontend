// PublicRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Token from "../../../utils/auth";

const PublicRoute = () => {
  const token = Token();

  return token?.token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
