import React, { useState } from "react";
import { IoChevronDownOutline, IoCloseCircleOutline } from "react-icons/io5";
import RegularInput from "./RegularInput";
import { staffs } from "../../../../Constants/testData";

const Selector = () => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <span>Add staffs</span>
      <div className="flex gap-3 flex-wrap">
        <span className="border text-[14px] px-1 flex items-center gap-1">
          Tunde Fatai{" "}
          <IoCloseCircleOutline className="text-[20px] text-red-500 cursor-pointer" />
        </span>
        <span className="border text-[14px] px-1 flex items-center gap-1">
          Tunde Fatai{" "}
          <IoCloseCircleOutline className="text-[20px] text-red-500 cursor-pointer" />
        </span>
        <span className="border text-[14px] px-1 flex items-center gap-1">
          Tunde Fatai{" "}
          <IoCloseCircleOutline className="text-[20px] text-red-500 cursor-pointer" />
        </span>
      </div>
      <div className="relative">
        <RegularInput />
        <span
          onClick={() => setToggle(!toggle)}
          className="absolute right-0 top-0 w-[45px] h-[45px] rounded-md flex justify-center items-center cursor-pointer"
        >
          <IoChevronDownOutline />
        </span>
        {/* <div className="absolute z-40 p-2 flex flex-col gap-2 bg-[#fff] overflow-auto rounded-md w-full top-[47px] border border-black min-h-[100px]">
          {staffs.map((staff, n) => (
            <span key={n} className="flex items-center gap-3">
              <span className="w-[25px] text-[0.7rem] h-[25px] bg-gray-400 rounded-full"></span>{" "}
              {staff.name}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Selector;
