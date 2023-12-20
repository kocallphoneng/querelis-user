import React from "react";
import { GrUserWorker } from "react-icons/gr";
import BarChart from "./BarChart";
import PieChart from "./PieCharts";
import Card1 from "../../UI/Cards/Card1";
import Card2 from "../../UI/Cards/Card2";
import { FcCancel, FcHighPriority } from "react-icons/fc";
import { HiBadgeCheck } from "react-icons/hi";
import { MdGroups, MdPendingActions } from "react-icons/md";
import Card3 from "../../UI/Cards/Card3";

const Index = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-6">
      <div className="grid grid-cols-12 gap-5 text-[]">
        <Card3
          title={"Newly Assigned Tickets"}
          Icon={MdPendingActions}
          num={50}
          sign={"+"}
          classs={"text-orange-500 bg-[#ffa6000a]"}
        />
        <Card3
          title={"Completed Tickets"}
          Icon={HiBadgeCheck}
          num={50}
          sign={"+"}
          classs={"text-cyan-600 bg-[#89fc892f]"}
        />
        <Card3
          title={"Pending Tickets"}
          sign={"-"}
          num={50}
          Icon={FcCancel}
          classs={"text-pink-600 bg-[#9c33330e]"}
        />
        <Card3
          title={"Escalated Tickets"}
          sign={"!"}
          num={50}
          Icon={FcHighPriority}
          classs={"text-red-400 bg-[#9c33330e]"}
        />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Index;
