import React from "react";
import vector from "../../../Assets/vectors/v2.png";
import board from "../../../Assets/images/board.png";
import { BsCheck } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="max-w-[1200px]  m-auto relative gap-10 min-h-[600px] grid grid-cols-12">
      <div className="col-span-6 flex items-center">
        <img
          src={board}
          className=" bg-[#fff] shadow-xl rounded-[20px]"
          alt=""
        />
      </div>
      <div className=" col-span-6 flex flex-col justify-center ">
        <span className="text-[--base_color] font-[700] text-[56px] pop">
          Our Services
        </span>
        <div className="flex flex-col gap-5">
          <span className="pop text-[18px] flex gap-3 font-[400] text-gray-500 leading-[27px]">
            <span className="text-[--base_color] font-[700] flex items-center justify-center rounded-[12px] bg-[--hue] h-[40px] w-[40px]">
              <BsCheck className="text-[21px]" />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum
          </span>
          <span className="pop text-[18px] flex gap-3 font-[400] text-gray-500 leading-[27px]">
            <span className="text-[--base_color] font-[700] flex items-center justify-center rounded-[12px] bg-[--hue] h-[40px] w-[40px]">
              <BsCheck className="text-[21px]" />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum
          </span>
          <span className="pop text-[18px] flex gap-3 font-[400] text-gray-500 leading-[27px]">
            <span className="text-[--base_color] font-[700] flex items-center justify-center rounded-[12px] bg-[--hue] h-[40px] w-[40px]">
              <BsCheck className="text-[21px]" />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum
          </span>
          <span className="pop text-[18px] flex gap-3 font-[400] text-gray-500 leading-[27px]">
            <span className="text-[--base_color] font-[700] flex items-center justify-center rounded-[12px] bg-[--hue] h-[40px] w-[40px]">
              <BsCheck className="text-[21px]" />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum
          </span>
          <span className="pop text-[18px] flex gap-3 font-[400] text-gray-500 leading-[27px]">
            <span className="text-[--base_color] font-[700] flex items-center justify-center rounded-[12px] bg-[--hue] h-[40px] w-[40px]">
              <BsCheck className="text-[21px]" />
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum
          </span>
         
        </div>
      </div>
      <div className="absolute bottom-0 z-[-1] w-full h-full flex justify-center items-center">
        <img src={vector} className=" max-w-[900px] " alt="" />
      </div>
    </div>
  );
};

export default WhoWeAre;
