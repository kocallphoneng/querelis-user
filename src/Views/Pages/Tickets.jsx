import React from "react";
import { BsFilter, BsPlus, BsSearch } from "react-icons/bs";
import TicketTable from "../UI/Table/TicketTable";
import { useAppContext } from "../../Controllers/Context/AppContext";

const Tickets = () => {
  const { setModal, ticketSummary } = useAppContext();
  return (
    <div className="flex flex-col gap-3 md:p-5">
      <div className="flex flex-col gap-5 md:bg-white rounded-[20px]">
        <div className="flex bg-[#2170f807] h-[100px] p-5 justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <span className="text-[22px] leading-[30px] font-[700] ">
              Tickets
            </span>
            {/* <div className="flex gap-7 items-center">
              <div className="flex gap-1 w-[250px] shadow-[0px,10px,19px,-3px,#0f59d82f] justify-between h-[35px] p-1 px-4 items-center rounded-[20px] bg-white ">
                <span className="text-[13px] font-[700] text-gray-600 ">
                  All Tickets
                </span>
                <span className="flex items-center text-[--base_color] gap-2 text-[12px] cursor-pointer  font-[700]">
                  <BsFilter className="text-[21px] text-[--base_color] font-[700]" />
                  Filter
                </span>
              </div> */}
            {/* </div> */}
          </div>
          <div className="sm:flex hidden gap-4">
            <span className="flex flex-col items-center text-[--base_color] text-[30px] font-[700]">
              {ticketSummary?.total} <span className="text-[12px]">Total</span>
            </span>
            <span className="flex px-5 border-x flex-col items-center text-green-600 text-[30px] font-[700]">
              {ticketSummary?.resolved}{" "}
              <span className="text-[12px]">Resolved</span>
            </span>
            <span className="flex flex-col items-center text-[#ff5874ec] text-[30px] font-[700]">
              {ticketSummary?.pending}{" "}
              <span className="text-[12px]">Escalated</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full pt-0 md:px-5 p-5 px-0">
          <TicketTable num_of_rows={1000} />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
