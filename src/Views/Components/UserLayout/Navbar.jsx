import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="p-5 pb-0 ">
      <div className="bg-[#fff] px-5 rounded-tr-[20px] rounded-bl-[20px] h-[60px] w-full flex items-center justify-between">
        <div className="flex bg-[--prymary_color] p-2 rounded-[24px] w-[300px] h-[40px]">
          <span className="flex items-center gap-3">
            <BsSearch className=" cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="border-none bg-[transparent] outline-none"
            />
          </span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <span className="w-[40px] h-[40px] bg-[--prymary_color] rounded-full"></span>
          <div className="flex flex-col ">
            <span className="text-[14px] font-[700] text-gray-600">
              Tekenna Tekenna
            </span>
            <span className="text-[12px] text-gray-600">Staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
