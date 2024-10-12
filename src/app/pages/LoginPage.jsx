import React from "react";
import { Login } from "../../features/auth/Login";
import Layout from "./Layout";
const LoginPage = () => {
  return (
    <>
      <Layout title="Login-SwiftPick">
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;
