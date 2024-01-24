import React from "react";
import { requestData } from "../../../Constants/testData";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { useState } from "react";

const TicketTable = ({ num_of_rows }) => {
  const { setModal, tickets, setTargetTicket } = useAppContext();
  const [options, setOptions] = useState(false);
  const [index, setIndex] = useState("");
  const rows = tickets?.data;
  console.log("tickets", rows);
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-12 gap-4 border-y text-[14px]  bg-[#ffffff9f] text-slate-700 font-[700] w-full items-center p-2 h-[50px] ">
        <span className="col-span-2">CC Ticket Id</span>
        <span className="col-span-2">Provider</span>
        <span className="col-span-1">Phone</span>
        <span className="col-span-2">Unit</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-1">Status</span>
        <span className="col-span-2">Vendor</span>
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => {
        console.log(row);
        return (
          <div
            key={n}
            className="grid grid-cols-12 gap-4 border-b h-fit relative text-[13px] font-[700] text-slate-600 w-full items-center p-2  bg-[#fff] "
          >
            <span className="col-span-2">{row?.ticket_id}</span>
            <span className="col-span-2">{row?.reporter?.network}</span>
            <span className="col-span-1">{row?.reporter?.msisdn}</span>
            <span className="col-span-2">{row?.unit?.name}</span>
            <span className="col-span-2">{row?.category}</span>
            <span className="col-span-1">{row?.status}</span>
            <span className="col-span-2">
              {row?.vendor ? row?.vendor?.name : "---"}
            </span>
            <span className="absolute right-0 h-full flex items-center justify-center w-[40px]">
              <div className="relative">
                <IoEllipsisVertical
                  onClick={() => {
                    setOptions(!options);
                    setIndex(n);
                  }}
                  className=" cursor-pointer"
                />
                {options && index === n && (
                  <div className="absolute w-[100px] top-[20px] right-0 items-center py-3 border justify-center gap-2 bg-[#dbdbf8] rounded-[14px] z-[99999] flex flex-col">
                    <span
                      className="text-[13px] border border-[--base_color] text-[--base_color] w-[70px] text-center rounded-md cursor-pointer"
                      onClick={() => {
                        setModal({ open: true, name: "ticket" });
                        setTargetTicket(row);
                      }}
                    >
                      View
                    </span>
                    <span className="text-red-600 bg-[#ff00002a] w-[70px] text-center rounded-md cursor-pointer">
                      Delete
                    </span>
                  </div>
                )}
              </div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TicketTable;
