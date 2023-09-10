import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const StaffCard = ({ data }) => {
  const { setModal } = useAppContext();
  return (
    <div
      onClick={() => setModal({ open: true, name: "staff" })}
      className="grid hover:bg-slate-200 py-1 transition-all duration-100 grid-cols-12 cursor-pointer items-center"
    >
      <span className="bg-[#0257E6] col-span-2 text-white font-[700] w-[40px] h-[40px] flex items-center justify-center rounded-full">
        {data.label[0]}
      </span>
      <div className=" col-span-8 flex flex-col text-[14px] font-[700]">
        <span className="text-[14px]">{data.label}</span>
        <span className="text-[12px] text-gray-400">{data.email}</span>
      </div>
      <span className=" font-[700] text-[#cc1c39] text-[12px]">Active</span>
    </div>
  );
};

export default StaffCard;
