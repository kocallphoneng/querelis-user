import React from "react";
import TicketCard from "./TicketCard";

const DeptTicketList = () => {
  return (
    <div className="w-full p-5 bg-[#5f5fe207] flex flex-col gap-5 rounded-[10px] shadow-sm">
      <span className="text-[16px] font-[600]">Voice & Data Service Tickets</span>
      <div className="flex flex-col gap-2">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default DeptTicketList;
