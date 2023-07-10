import React from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { useState } from "react";

const Staff = () => {
  const { setModal } = useAppContext();
  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="flex flex-col gap-2 h-[400px] overflow-y-auto">
      <div className="flex items-center justify-between ">
        <span className="font-[700] text-[21px]">Staff Profile</span>
        <IoClose onClick={() => setModal(false)} className=" cursor-pointer" />
      </div>

      <hr />

      <div className="flex gap-3">
        <span className="w-[120px] h-[120px] bg-gray-300 rounded-[10px]"></span>
        <div className="flex flex-col text-slate-600">
          <span className="text-[21px] font-[700]">Mike Okoro</span>
          <span>mikeokoro@querilis.com</span>
          <span>+23491892992999</span>
          <span className="text-[12px] flex flex-wrap">@Voice service department | @Data service department</span>
        </div>
      </div>

      {/* {activePage === "ticket_info" && <TicketInfo />}
      {activePage === "ticket_review" && <ReviewTicket />}
      {activePage === "ticket_thread" && <Thread />} */}
    </div>
  );
};

export default Staff;
