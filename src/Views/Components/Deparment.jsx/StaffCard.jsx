import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const StaffCard = () => {
  const { setModal } = useAppContext();
  return (
    <div
      onClick={() => setModal({ open: true, name: "staff" })}
      className="grid hover:bg-slate-200 transition-all duration-100 grid-cols-12 cursor-pointer items-center"
    >
      <span className="bg-[#0257E6] col-span-2 text-white font-[700] w-[40px] h-[40px] flex items-center justify-center rounded-full">
        MO
      </span>
      <div className=" col-span-8 flex flex-col text-[14px] font-[700]">
        <span className="text-[14px]">Mike Okoro</span>
        <span className="text-[12px] text-gray-400">mikeokoro@mail.com</span>
      </div>
      <span className="text-[14px] font-[700] text-[#cc1c39]">Offline</span>
    </div>
  );
};

export default StaffCard;
