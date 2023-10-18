import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import TicketCard from "./TicketCard";
import StaffCard from "./StaffCard";
import { BsFillPencilFill } from "react-icons/bs";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { staffs } from "../../../Constants/testData";

const InfoCard = () => {
  const { setModal, targetElement } = useAppContext();
  const [ticketType, setTicketType] = useState("All Tickets");
  const [view, setView] = useState("tickets");
  const [openTicketType, setOpenTicketType] = useState(false);
  const [ticketDelay, setTicketDelay] = useState(false);
  const changeTicketType = () => {
    if (!openTicketType) {
      setOpenTicketType(true);
      setTimeout(() => {
        setTicketDelay(true);
      }, 20);
    } else {
      setTicketDelay(false);
      setTimeout(() => {
        setOpenTicketType(false);
      }, 50);
    }
  };
  const data = targetElement.data;
  const tickets = [
    "All Tickets",
    "Resolved Tickets",
    "Escalated Tickets",
    "Accepted Tickets",
    "Open Tickets",
  ];
  const staffs_ = localStorage.staffs
    ? JSON.parse(localStorage.staffs)
    : staffs;
  console.log(staffs_);
  console.log(staffs_?.filter((s) => s.deparment[0] === targetElement.title));
  return (
    <div className="flex flex-col py-5 gap-5">
      <div className="flex flex-col gap-3">
        <span className="font-[700] text-[14px] relative">
          # Description{" "}
          <div className="absolute right-0 bottom-0 bg-[#0256e6a1] w-[20px] h-[20px] rounded-full flex justify-center items-center">
            <BsFillPencilFill className=" text-white text-[10px]" />
          </div>
        </span>
        <span className="font-[600] relative text-[14px] leading-[21px] text-gray-400">
          {data.description}
        </span>
      </div>
      <hr />
      <div className="flex gap-10">
        <span
          onClick={() => setView("tickets")}
          className={`${
            view === "tickets"
              ? "text-[--base_color] border-b border-[--base_color]"
              : ""
          } text-[14px] cursor-pointer font-[700] transition-all duration-200 pb-2`}
        >
          Tickets
        </span>
        <span
          onClick={() => setView("staffs")}
          className={`${
            view === "staffs"
              ? "text-[--base_color] border-b border-[--base_color]"
              : ""
          } text-[14px] cursor-pointer font-[700] transition-all duration-200 pb-2`}
        >
          Staffs
        </span>
      </div>
      {view === "tickets" && (
        <div className="flex flex-col gap-3 ">
          <div className="flex justify-between items-center">
            <span className="font-[700] text-[14px] flex items-center gap-5">
              # Tickets
              <span className="bg-[#0257E6] flex items-center justify-center text-[10px] w-[25px] h-[25px] rounded-full text-[#fff]">
                {parseInt(data.completed_requests) +
                  parseInt(data.pending_requests)}
              </span>
            </span>
            <span className="flex border p-1 px-2 rounded-md relative gap-3 w-[150px] justify-between items-center text-[14px] cursor-pointer">
              <span
                onClick={changeTicketType}
                className="flex justify-between capitalize text-[13px] items-center w-full"
              >
                {ticketType} <IoChevronDownOutline />
              </span>
              {openTicketType && (
                <div
                  className={`flex transition-all rounded-[14px] duration-100 ${
                    ticketDelay ? "translate-y-0" : "translate-y-[-10px]"
                  } text-[0.7rem] flex-col absolute  top-[30px] bg-[#deeaff] w-full`}
                >
                  {tickets.map((t, n) => (
                    <span
                      onClick={() => {
                        setTicketType(t);
                        changeTicketType();
                      }}
                      key={n}
                      className="px-3 py-1 hover:bg-[#fff8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </span>
          </div>
          <div className="flex flex-col pr-3 max-h-[300px] gap-3 overflow-auto">
            <TicketCard />
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
      )}

      {view === "staffs" && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <span className="font-[700] text-[14px] flex items-center gap-5">
              # Staffs
              <span className="bg-[#0257E6] flex items-center justify-center text-[10px] w-[25px] h-[25px] rounded-full text-[#fff]">
                {
                  staffs_?.filter((s) => s.deparment[0] === targetElement.title)
                    .length
                }
              </span>
            </span>
            <span
              onClick={() => setModal({ open: true, name: "new_staff" })}
              className="font-[700] text-[12px] text-[#0257E6] border px-3 p-1 rounded-md border-[#0257E6] cursor-pointer"
            >
              + Add New Staff
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {staffs_
              ?.filter((s) => s.deparment[0] === targetElement.title)
              ?.map((info, n) => (
                <StaffCard key={n} data={info} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
