import React from "react";
import StatCard from "../Components/Home/StatCard";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-12 gap-5">
        <StatCard text={"No of Request In The Month"} number={"58"} />
        <StatCard text={"No of Answered Request"} number={"58"} />
        <StatCard text={"No of Active Support Staff"} number={"58"} />
        <StatCard text={"No of Allowed Support Staff"} number={"58"} />
      </div>
      <div className="flex flex-col">
        <span className="text-[24px] leading-[30px] ">Supports</span>
      </div>
    </div>
  );
};

export default Home;
