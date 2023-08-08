import React from "react";
import { FaEllipsisH } from "react-icons/fa";
const images = [
  require("../../../../Assets/images/u1.png"),
  require("../../../../Assets/images/u2.png"),
  require("../../../../Assets/images/u3.png"),
  require("../../../../Assets/images/u4.png"),
  require("../../../../Assets/images/u5.png"),
];
const deps = [
  { name: "VS", gradient: "orange" },
  { name: "DS", gradient: "green" },
  { name: "IS", gradient: "red" },
  { name: "CS", gradient: "purple" },
  { name: "CS", gradient: "gray" },
];

const Card1 = ({ type,title, Icon }) => {
  return (
    <div className="col-span-3 p-[20px] bg-[#0000ff0e] rounded-[24px] h-[150px] flex flex-col border border-[#00000098] border-dashed">
      <span className="text-[14px] font-[700]">{title}</span>
      <div className="flex gap-5  items-baseline">
        <span className="text-[27px] font-bold">100</span>
        <Icon className=" text-[--base_color]" />
      </div>
      <div className="flex relative">
        {type === "staff"
          ? images.map((i, n) => {
              const position = n * 30;
              let style = { left: `${position}px` };
              return (
                <span
                  style={style}
                  className={`w-[40px] h-[40px] p-[1px] absolute top-0  shadow-md bg-[#fff] rounded-full`}
                >
                  <img key={n} src={i} alt="" />
                </span>
              );
            })
          : deps.map((i, n) => {
              const position = n * 30;
              let style = { left: `${position}px`, background: i.gradient };
              return (
                <span
                  style={style}
                  className={`w-[40px] text-white font-[700] h-[40px] flex justify-center items-center p-[1px] absolute top-0  shadow-md bg-[#fff] rounded-full`}
                >{i.name}</span>
              );
            })}
        <span
          className={`w-[40px] flex items-center justify-center bg-[--base_color] z-[9999] h-[40px] p-[1px] absolute top-0 left-[150px]  shadow-lg rounded-full`}
        >
          <FaEllipsisH className="text-[#fff]" />
        </span>
      </div>
    </div>
  );
};

export default Card1;
