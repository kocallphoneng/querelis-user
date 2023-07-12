import React from "react";
import { requestData } from "../../../Constants/testData";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const TicketTable = ({ num_of_rows }) => {
  const { setModal } = useAppContext();
  const rows = requestData;
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-12 text-[14px]  bg-[#ffffff9f] text-slate-700 font-[700] w-full items-center p-2 h-[50px] ">
        <span className="col-span-2">CC Ticket Id</span>
        <span className="col-span-2">Provider Name</span>
        <span className="col-span-2">Phone</span>
        <span className="col-span-1">Assigned</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-3">Issue</span>
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => {
        return (
          <div
            key={n}
            className="grid grid-cols-12 relative text-[13px] font-[700] text-slate-600 w-full items-center p-2 h-[50px] bg-[#fff] "
          >
            <span className="col-span-2">{row.ci}</span>
            <span className="col-span-2">{row.name}</span>
            <span className="col-span-2">{row.tel}</span>
            <span className="col-span-1">{"true"}</span>
            <span className="col-span-2">{row.cat}</span>
            <div className="col-span-3 text-[12px] text-gray-400 flex flex-col">
              <span># Voice call service</span>
              <span># Happened before</span>
            </div>
            <span className="absolute right-0 h-full flex items-center justify-center w-[40px]">
              <IoEllipsisVertical
                onClick={() => setModal({ open: true, name: "ticket" })}
                className=" cursor-pointer"
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TicketTable;
