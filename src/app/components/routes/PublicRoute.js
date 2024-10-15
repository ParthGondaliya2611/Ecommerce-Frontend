// PublicRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Auth from "../../../utils/auth";

const PublicRoute = () => {
  const token = Auth();

  return token?.token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
