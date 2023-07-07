import React from "react";
import { useState } from "react";

const NavCard = ({ Icon, active, title, navigate, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`flex flex-col min-h-[84px] ${
        active
          ? "bg-[#fff] text-[#0257E6] text-[20px] leading-[25px]"
          : "bg-[#0257E6] text-[#fff] text-[16px] leading-[20px]"
      } `}
    >
      <span
        onClick={() => {
          navigate();
          setToggle(true);
        }}
        className={`flex items-center min-h-[50px] h-full transition-all duration-200 ease-in-out px-[35px] cursor-pointer gap-3 font-[700] ${
          active
            ? "bg-[#fff] text-[#0257E6] text-[20px] leading-[25px]"
            : "bg-[#0257E6] text-[#fff] text-[16px] leading-[20px]"
        } `}
      >
        <Icon
          className={`${
            active ? "text-[30px] text-[#0257E6]" : "text-[24px] text-[#fff]"
          }`}
        />
        {title}
      </span>
      {/* <div className="flex flex-col pl-10 gap-3">
        {toggle && title === "Requests" && children}
      </div> */}
    </div>
  );
};

export default NavCard;
