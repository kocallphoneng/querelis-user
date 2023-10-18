import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../Components/CompanyLayout/Sidebar";
import Navbar from "../../Components/CompanyLayout/Navbar";

const CompanyDashboard = () => {
  return (
    <div className="flex">
      <div className="flex-[0.2] p-2 ">
        <Sidebar />
      </div>
      <div className="flex-[0.8]">
        <Navbar />
        <div className="w-full h-fit min-h-[calc(100vh-77px)] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
