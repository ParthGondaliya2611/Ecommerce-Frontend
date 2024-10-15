import React from "react";
import { Link } from "react-router-dom";
import Token from "../../utils/auth";

const DashboardPannel = () => {
  const token = Token();
  return (
    <>
      <div className="flex items-center justify-between border-indigo-500 border-2 text-black bg-indigo-50  rounded-md px-3 py-1">
        <div className="text-left ">
          <Link to="/dashboard">
            <h4 className="text-lg mg:text-2xl  font-bold">
              {token?.user?.role === "Admin" ? "Admin Panel" : "User Panel"}
            </h4>
          </Link>
        </div>
        <div className="flex space-x-4">
          {token?.user?.role === "Admin" ? (
            <>
              <Link
                to="/dashboard/create-category"
                className="text-md mg:text-lg font-medium hover:bg-indigo-500 hover:text-white px-4 py-2 rounded transition-colors"
              >
                Create Category
              </Link>
              <Link
                to="/dashboard/create-product"
                className="text-md mg:text-lg font-medium hover:bg-indigo-500 hover:text-white px-4 py-2 rounded transition-colors"
              >
                Create Product
              </Link>
            </>
          ) : (
            <>
              <div className="text-md mg:text-lg font-medium   px-4 py-2 rounded transition-colors">
                Your Profile
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPannel;
