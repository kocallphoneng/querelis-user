import React from "react";
import StatCard from "./StatCard";

import BarChart from "./BarChart";
import PieChart from "./PieCharts";

const Index = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-10">
      <div className="grid grid-cols-12 gap-5">
        <StatCard text={"No of Request In The Month"} number={"58"} />
        <StatCard text={"No of Answered Request"} number={"58"} />
        <StatCard text={"No of Active Support Staff"} number={"58"} />
        <StatCard text={"No of Allowed Support Staff"} number={"58"} />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Index;
