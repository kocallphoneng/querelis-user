import React from "react";
import { GrUserWorker } from "react-icons/gr";
import BarChart from "./BarChart";
import PieChart from "./PieCharts";
import Card1 from "../../UI/Cards/Card1";
import Card2 from "../../UI/Cards/Card2";
import { FcCancel } from "react-icons/fc";
import { HiBadgeCheck } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const Index = () => {
  const { loadingData, departments, tickets, staffs } = useAppContext();

  console.log(departments);
  const staffData = loadingData
    ? []
    : staffs?.data?.slice(0, 5)?.map((s) => s.first_name[0] + s?.last_name[0]);

  return (
    <div className="w-full p-5 flex flex-col gap-6">
      <div className="grid grid-cols-12 gap-5  ">
        <Card1
          Icon={GrUserWorker}
          type={"staff"}
          title={"Staff Members"}
          loading={loadingData}
          count={staffData.length}
        />
        <Card2
          title={"Resolved Tickets"}
          Icon={HiBadgeCheck}
          num={50}
          sign={"+"}
          classs={"text-cyan-600 bg-[#89fc892f]"}
          loading={loadingData}
        />
        <Card2
          title={"Escalated Tickets"}
          sign={"-"}
          num={50}
          Icon={FcCancel}
          classs={"text-pink-600 bg-[#9c33330e]"}
          loading={loadingData}
        />
        <Card1
          Icon={MdGroups}
          type={"dep"}
          title={"Units"}
          loading={loadingData}
          count={departments?.data?.length}
        />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BarChart />
        <PieChart />
        <div className="flex col-span-12 w-full h-[200px] bg-slate-50"></div>
      </div>
    </div>
  );
};

export default Index;
