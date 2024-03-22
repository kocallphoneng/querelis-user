import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../Components/CompanyLayout/Sidebar";
import Navbar from "../../Components/CompanyLayout/Navbar";
import { companyService } from "../../../Controllers/Services/compnay.service";
import client from "../../../Constants/helpers/axiosInstance";
import useData from "../../../Controllers/Hooks/useData";

const CompanyDashboard = () => {
  useData();
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  // console.log(menu);
  return (
    <div className="flex max-w-[100vw]">
      <div
        className={`w-[20%] p-2 min-w-[300px] md:relative absolute left-0 top-[60px] bottom-0  ${
          menu ? "blcok" : "md:block hidden"
        } `}
      >
        <Sidebar menu={menu} />
      </div>
      <div className="md:w-[80%] w-full ">
        <Navbar toggle={toggle} menu={menu} />
        <div
          onClick={() => {
            menu && toggle();
          }}
          className="w-full h-fit min-h-[calc(100vh-77px)] overflow-auto md:p-0 py-[80px]"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
