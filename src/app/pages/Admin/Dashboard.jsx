import React, { useEffect, useState } from "react";
import DashboardPannel from "../layout/DashboardPannel";
import Layout from "../Layout";
import Token from "../../../utils/Auth";

import { toast } from "react-toastify";
import logo from "../../img/mainlogo.png";
import { api,  } from "../../../utils/api";

const Dashboard = () => {
  const token=Token()
  const [Register, setRegister] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [Value, setValue] = useState({});
  const [Update, setUpdate] = useState(false);



  const handleinput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setRegister({ ...Register, [name]: value });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
         `${api}/api/v1/auth/update-User/${token?.user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token.token,
          },
          body: JSON.stringify(Register),
        }
      );
      if (response.ok) {
        toast.success("User updated successfully");
        setUpdate(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const singleUser = async () => {
    try {
      const response = await fetch(
         `${api}/api/v1/auth/singleUser`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token.token,
          },
        }
      );
      const data = await response.json();
      setValue(data.user);
      setUpdate(false);
      setRegister(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    singleUser();
  }, [Update]);

  return (
    <>
      <Layout title="Dashboard - SwiftPick ">
        <div className="sm:px-10 px-4">
          <div className="w-full mt-10 text-center">
            <div>
              <DashboardPannel />
            </div>
          </div>

          <div className="grid grid-cols-1 w-full mg:grid-cols-2 gap-4">
            <div className="w-full sm:px-6 px-0 py-8">
              <div className="text-left flex flex-col bg-white shadow-xl rounded-lg p-6 border border-gray-200">
                <h4 className="text-3xl text-center mb-4 font-bold text-gray-800">
                  Your Profile
                </h4>
                <ul className="space-y-4">
                  <li className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <span className="font-semibold text-gray-700">Name:</span>{" "}
                    {Value.name}
                  </li>
                  <li className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <span className="font-semibold text-gray-700">Email:</span>{" "}
                    {Value.email}
                  </li>
                  <li className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <span className="font-semibold text-gray-700">
                      Address:
                    </span>{" "}
                    {Value.address}
                  </li>
                  <li className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                    <span className="font-semibold text-gray-700">Phone:</span>{" "}
                    {Value.phone}
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="flex min-h-full flex-1 flex-col items-center sm:px-6 px-0 mg:py-8">
                <div className="bg-white py-12 px-8 w-full shadow-lg rounded-lg">
                  <div className="text-center flex flex-col gap-5">
                    <img
                      alt="Your Company"
                      src={logo}
                      className="mx-auto h-20 "
                    />
                    <h2 className=" text-3xl font-bold text-gray-900">
                      Update Profile
                    </h2>
                  </div>

                  <div className="mt-8">
                    <form className="space-y-6" onSubmit={updateProfile}>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Full Name
                        </label>
                        <div className="mt-2">
                          <input
                            name="name"
                            required
                            type="text"
                            placeholder="Enter Name"
                            value={Register.name}
                            onChange={handleinput}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            name="email"
                            required
                            type="email"
                            placeholder="Enter Email"
                            value={Register.email}
                            onChange={handleinput}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            name="phone"
                            required
                            type="tel"
                            placeholder="Enter Phone Number"
                            value={Register.phone}
                            onChange={handleinput}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Address
                        </label>
                        <div className="mt-2">
                          <input
                            name="address"
                            required
                            type="text"
                            placeholder="Enter Address"
                            value={Register.address}
                            onChange={handleinput}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
