import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const TicketInfo = () => {
  const { setModal } = useAppContext();
  return (
    <div className="flex flex-col font-[700] gap-3 text-[14px] text-slate-400 ">
      <span className="flex justify-between items-center">
        CC Ticket ID : <span className="text-slate-400">828u299</span>
      </span>
      <span className="flex justify-between items-center">
        Phone number : <span className="text-slate-400">081892992002</span>
      </span>
      <span className="flex justify-between items-center">
        Provider name : <span className="text-slate-400">MTN</span>
      </span>
      <span className="flex justify-between items-center">
        Created Date : <span className="text-slate-400">5 days ago</span>
      </span>
      <span className="flex justify-between items-center">
        Due Date : <span className="text-slate-400">20-10-2023</span>
      </span>
      <span className="flex justify-between items-center">
        Assigned to :{" "}
        <span className="text-slate-400">Voice call Department</span>
      </span>
      <span className="flex justify-between items-center">
        Handler : <span className="text-slate-400">Mike Okoro</span>
      </span>
      <span className="flex justify-between items-center">
        LAC : <span className="text-slate-400">2929002</span>
      </span>
      <span className="flex justify-between items-center">
        MCC : <span className="text-slate-400">2929002</span>
      </span>

      <span className="flex justify-between items-center">
        MNC : <span className="text-slate-400">2929002</span>
      </span>
      <span className="flex justify-between items-center">
        CI : <span className="text-slate-400">2929002</span>
      </span>
      <span className="flex justify-between items-center">
        Status : <span className="text-[green]">Completed</span>
      </span>
      <div className="flex justify-end">
        <span
          onClick={() => setModal(false)}
          className="flex justify-center items-center w-[40px] text-white cursor-pointer rounded-md h-[40px] bg-[#0257E6]"
        >
          OK
        </span>
      </div>
    </div>
  );
};

export default TicketInfo;
