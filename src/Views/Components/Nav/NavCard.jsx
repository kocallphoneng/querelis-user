import React from "react";

const NavCard = ({ Icon, active, title, navigate }) => {
  return (
    <span
      onClick={navigate}
      className={`flex items-center transition-all duration-200 ease-in-out h-[84px] px-[35px] cursor-pointer gap-3 font-[700] ${
        active
          ? "bg-[#fff] text-[#0257E6] text-[20px] leading-[25px]"
          : "bg-[#0257E6] text-[#fff] text-[16px] leading-[20px]"
      } `}
    >
      <Icon
        className={`${
          active ? "text-[30px] text-[#0257E6]" : "text-[24px] text-[#fff]"
        }`}
      />{" "}
      {title}
    </span>
  );
};

export default NavCard;
