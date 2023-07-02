import React from "react";
import StatCard from "../Components/Home/StatCard";
import Table from "../UI/Table/Table";
import DepartmentTable from "../UI/Table/DepartmentTable";
import RequestTable from "../UI/Table/RequestTable";

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
        <div className="flex flex-col">
          <DepartmentTable num_of_rows={3} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[24px] leading-[30px] font-[600] ">Requests</span>
        <div className="flex flex-col">
          <RequestTable num_of_rows={3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
