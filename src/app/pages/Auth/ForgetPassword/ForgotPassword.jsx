import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../../utils/api";
import Layout from "../../../layout/Layout";

const ForgotPassword = () => {
  const [ForgotPassword, setForgotPassword] = useState({
    email: "",
    password: "",
    answer: "",
  });
  const handleinput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForgotPassword({ ...ForgotPassword, [name]: value });
  };
  const navigate = useNavigate();
  const forgotpassword = async (e) => {
    e?.preventDefault();
    try {
      const response = await fetch(`${api}/api/v1/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ForgotPassword),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast.success("Password reset succesfully");
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout title="ForgotPassword-SwiftPick">
        <div className="flex items-center  flex-1 flex-col justify-center   px-6 py-8 lg:px-8">
          <div className=" bg-white px-6 py-8 sm:max-w-[500px] w-full shadow-xl rounded-xl  ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-5">
              <img
                alt="Your Company"
                src="/img/mainlogo.png"
                className="mx-auto h-20 w-auto"
              />
              <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Forogot Password
              </h2>
            </div>

            <div className="py-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={forgotpassword} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-start text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      type="email"
                      required
                      onChange={handleinput}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="Answer"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Answer
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="answer"
                      type="text"
                      placeholder="What Is Your Favourite Sport ?"
                      onChange={handleinput}
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      New Password
                    </label>
                  </div>
                  <div className="mt-2 ">
                    <input
                      id="password"
                      name="password"
                      onChange={handleinput}
                      type="password"
                      required
                      placeholder="Enter your new password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" py-2">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    ForgotPassword
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
