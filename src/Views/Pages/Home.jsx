import React from "react";
import StatCard from "../Components/Home/StatCard";
import Table from "../UI/Table/Table";
import DepartmentTable from "../UI/Table/DepartmentTable";
import RequestTable from "../UI/Table/RequestTable";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-5">
        <StatCard text={"No of Request In The Month"} number={"58"} />
        <StatCard text={"No of Answered Request"} number={"58"} />
        <StatCard text={"No of Active Support Staff"} number={"58"} />
        <StatCard text={"No of Allowed Support Staff"} number={"58"} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[24px] leading-[30px] font-[600] ">
          Departments
        </span>
        <div className="flex flex-col gap-3">
          <DepartmentTable num_of_rows={3} />
          <Link
            to={"/dashboard/departments"}
            className="text-[#0257E6] text-[14px] font-[700] underline flex justify-end cursor-pointer"
          >
            See all{">>"}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[24px] leading-[30px] font-[600] ">Requests</span>
        <div className="flex flex-col gap-3">
          <RequestTable num_of_rows={3} />
          <Link
            to={"/dashboard/requests"}
            className="text-[#0257E6] text-[14px] font-[700] underline flex justify-end cursor-pointer"
          >
            See all{">>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
