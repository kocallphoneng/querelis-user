import React from "react";

const StatCard = ({ number, text }) => {
  return (
    <div className=" col-span-3 p-[20px] rounded-[10px] h-[143px] flex flex-col bg-[#fff]">
      <span className="h-[50px] w-full text-[18px] leading-[25px] font-[500]">
        {text}
      </span>
      <span className="h-[52px] text-[45px] font-[700] text-[#0257E6]">
        {number}
      </span>
    </div>
  );
};
export default StatCard;
