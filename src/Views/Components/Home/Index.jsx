import React from "react";
import { GrUserWorker } from "react-icons/gr";
import BarChart from "./BarChart";
import PieChart from "./PieCharts";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import { FcCancel } from "react-icons/fc";
import { HiBadgeCheck } from "react-icons/hi";
import { MdGroups } from "react-icons/md";

const Index = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-6">
      <div className="grid grid-cols-12 gap-5  ">
        <Card1 Icon={GrUserWorker} type={"staff"} title={"Staff Members"} />
        <Card2
          title={"Completed Tickets"}
          Icon={HiBadgeCheck}
          num={50}
          sign={"+"}
          classs={"text-cyan-600 bg-[#89fc892f]"}
        />
        <Card2
          title={"InComplete Tickets"}
          sign={"-"}
          num={50}
          Icon={FcCancel}
          classs={"text-pink-600 bg-[#9c33330e]"}
        />
        <Card1 Icon={MdGroups} type={"dep"} title={"Departments"} />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Index;
