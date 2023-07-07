import React from "react";
import logo from "../../../Assets/images/logo.svg";
import NavCard from "../Nav/NavCard";
import { MdGroups, MdLock, MdOutlineDashboard } from "react-icons/md";
import { IoMdGitPullRequest, IoMdLogOut } from "react-icons/io";
import {HiRectangleGroup} from "react-icons/hi2"
import { useNavigate } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";
// import SubNavCard from "../Nav/SubNavCard";

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
        Icon={HiRectangleGroup}
        title={"Departments"}
        active={path === "/dashboard/departments"}
        navigate={() => navigate("/dashboard/departments")}
      />
      <NavCard
        Icon={MdGroups}
        title={"Staffs"}
        active={path === "/dashboard/staffs"}
        navigate={() => navigate("/dashboard/staffs")}
      />
      <NavCard
        Icon={IoMdGitPullRequest}
        title={"Tickets"}
        active={path === "/dashboard/tickets"}
        navigate={() => navigate("/dashboard/tickets")}
      />
      <NavCard
        Icon={MdLock}
        title={"Change Password"}
        active={path === "/dashboard/change-password"}
        navigate={() => navigate("/dashboard/change-password")}
      />
      <NavCard
        Icon={BsBellFill}
        title={"Notifications"}
        active={path === "/dashboard/notifications"}
        navigate={() => navigate("/dashboard/notifications")}
      />
      <span onClick={() => localStorage.clear()}>
        <NavCard
          Icon={IoMdLogOut}
          title={"Logout"}
          active={path === "/"}
          navigate={() => navigate("/login")}
        />
      </span>
    </div>
  );
};

export default Sidebar;
