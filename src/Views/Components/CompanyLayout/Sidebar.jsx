import React from "react";
import logo from "../../../Assets/images/logo.svg";
import NavCard from "../Nav/NavCard";
import { MdGroups, MdLock, MdOutlineDashboard } from "react-icons/md";
import { IoMdGitPullRequest, IoMdLogOut } from "react-icons/io";
import { HiRectangleGroup } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
// import SubNavCard from "../Nav/SubNavCard";

const Sidebar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div className=" fixed left-0 top-0 h-screen w-[20%] p-4">
      <div className="flex flex-col bg-[#0f59d8] rounded-[20px]  h-[90%]">
        <img src={logo} alt="" className="h-[77px] w-[236px]" />
        <div className="flex flex-col">
          <NavCard
            Icon={MdOutlineDashboard}
            title={"Dashboard"}
            active={path === "/dashboard"}
            navigate={() => navigate("/dashboard")}
          />
          <NavCard
            Icon={HiRectangleGroup}
            title={"Units"}
            active={path === "/dashboard/units"}
            navigate={() => navigate("/dashboard/units")}
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
          {/* <NavCard
            Icon={BsBellFill}
            title={"Notifications"}
            active={path === "/dashboard/notifications"}
            navigate={() => navigate("/dashboard/notifications")}
          /> */}
        </div>
      </div>
      <div className="flex mt-10 justify-center gap-5 items-center w-full">
        <IoSettings className="text-[24px] cursor-pointer" />
        {/* <span
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          className={`flex items-center h-[40px] w-[100px] bg-[#ff000015] justify-center rounded-md`}
        >
          <IoMdLogOut className={`text-[red] text-[20px] `} />
          Logout
        </span> */}
      </div>
    </div>
  );
};

export default Sidebar;
