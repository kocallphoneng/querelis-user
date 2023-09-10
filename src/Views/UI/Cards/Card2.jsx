import React from "react";
import chart from "../../../Assets/images/chart.png";

const Card2 = ({ title, classs, num, sign, Icon }) => {
  return (
    <div
      className={
        "col-span-3 p-[20px] rounded-[24px] h-[150px] flex flex-col border border-[#00000098] border-dashed " +
        classs
      }
    >
      <span className="text-[14px] font-[700]">{title}</span>
      <div className="flex gap-5 h-[60px] items-baseline">
        <img src={chart} className="h-fit" alt="" />
      </div>
      <div className="flex justify-between  items-center">
        <div className={"flex gap-5 items-center "}>
          <span className="text-[25px] font-[700] flex">
            {num} <span className="text-[12px]">{sign}</span>
          </span>
          <Icon className=" text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Card2;
