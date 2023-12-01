import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../Components/CompanyLayout/Sidebar";
import Navbar from "../../Components/CompanyLayout/Navbar";
import { companyService } from "../../../Controllers/Services/compnay.service";
import client from "../../../Constants/helpers/axiosInstance";
import useData from "../../../Controllers/Hooks/useData";

const CompanyDashboard = () => {
  useData()
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
