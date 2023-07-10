import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";
const NavCard = ({ Icon, active, title, navigate }) => {
  const { setModal } = useAppContext();
  return (
    <span
      onClick={() => {
        navigate();
        setModal(false);
      }}
      className={`flex items-center h-[60px]  transition-all duration-200 ease-in-out px-[35px] cursor-pointer gap-3 font-[700] ${
        active
          ? "bg-[#fff] text-[#0257E6] text-[18px] leading-[25px]"
          : "bg-[#0257E6] text-[#fff] text-[14px] leading-[20px]"
      } `}
    >
      <Icon
        className={`${
          active ? "text-[30px] text-[#0257E6]" : "text-[24px] text-[#fff]"
        }`}
      />
      {title}
    </span>
  );
};

export default NavCard;
