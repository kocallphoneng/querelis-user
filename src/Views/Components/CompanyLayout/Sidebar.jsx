import React from "react";
import logo from "../../../Assets/images/logo.svg";
import { MdGroups, MdOutlineDashboard } from "react-icons/md";
import NavCard from "../Nav/NavCard";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#0257E6]  fixed left-0 h-screen w-[25%]">
      <img src={logo} alt="" className="h-[77px] w-[236px]" />
      <NavCard
        Icon={MdOutlineDashboard}
        title={"Dashboard"}
        active={path === "/dashboard"}
        navigate={() => navigate("/dashboard")}
      />
      <NavCard
        Icon={MdGroups}
        title={"Departments"}
        active={path === "/dashboard/departments"}
        navigate={() => navigate("/dashboard/departments")}
      />
      <NavCard
        Icon={MdGroups}
        title={"Requests"}
        active={path === "/dashboard/requests"}
        navigate={() => navigate("/dashboard/requests")}
      />
      
    </div>
  );
};

export default Sidebar;
