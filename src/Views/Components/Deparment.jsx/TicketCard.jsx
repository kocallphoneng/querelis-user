import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const TicketCard = () => {
  const { setModal } = useAppContext();
  return (
    <div
      onClick={() => setModal({ open: true, name: "ticket" })}
      className="flex flex-col bg-slate-50 hover:bg-slate-200 transition-all duration-100 cursor-pointer gap-1 shadow-md w-full p-2 rounded-lg text-gray-400 text-[12px]"
    >
      <div className="flex justify-between items-center">
        <span className="font-[700] flex items-center gap-10">
          MTN <span># 6266291</span>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span>Handler: James Okoro</span>
        <span className="flex items-center gap-3">
          Status: <span className="text-[green] font-[500]">Completed</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
