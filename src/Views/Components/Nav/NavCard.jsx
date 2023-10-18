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
      className={`flex items-center rounded-[20px] h-[46px] text-[14px] font-[500] transition-all duration-200 ease-in-out px-[35px] cursor-pointer gap-3 ${
        active
          ? "bg-[#4082f5] text-[#fff] "
          : "bg-[transpatent] text-[#fff] "
      }
       `}
    >
      <Icon
        className={`${
          active ? "text-[18px] text-[#fff]" : "text-[20px] text-[#fff]"
        }`}
      />
      {title}
    </span>
  );
};

export default NavCard;
