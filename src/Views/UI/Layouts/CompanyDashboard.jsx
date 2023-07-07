import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../Components/CompanyLayout/Sidebar";
import Navbar from "../../Components/CompanyLayout/Navbar";

const CompanyDashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 ">
        <Sidebar />
      </div>
      <div className="col-span-9 flex flex-col ">
        <Navbar />
        <div className="w-full h-fit min-h-[calc(100vh-77px)] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
