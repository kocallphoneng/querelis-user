import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import TicketCard from "./TicketCard";
import StaffCard from "./StaffCard";
import { BsFillPencilFill } from "react-icons/bs";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const InfoCard = () => {
  const { setModal } = useAppContext();
  const [ticketType, setTicketType] = useState("All Tickets");
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          nobis. Possimus, rerum expedita nemo corrupti optio in numquam
          perferendis saepe maxime fugit non doloribus asperiores quidem magni?
          Accusantium, provident voluptate.
        </span>
      </div>
      <hr />
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between items-center">
          <span className="font-[700] text-[14px] flex items-center gap-5">
            # Tickets
            <span className="bg-[#0257E6] flex items-center justify-center text-[10px] w-[25px] h-[25px] rounded-full text-[#fff]">
              100
            </span>
          </span>
          <span className="flex relative gap-3 w-[150px] justify-between items-center text-[14px] cursor-pointer">
            <span
              onClick={changeTicketType}
              className="flex justify-between items-center w-full"
            >
              Completed <IoChevronDownOutline />
            </span>
            {openTicketType && (
              <div
                className={`flex transition-all duration-100 ${
                  ticketDelay ? "translate-y-0" : "translate-y-[-20px]"
                } text-[0.7rem] flex-col absolute  top-[30px] bg-[#deeaff] w-full`}
              >
                <span className="px-3 py-1 hover:bg-[#fff8] ">All Tickets</span>
                <span className="px-3 py-1 hover:bg-[#fff8] ">
                  Completed Tickets
                </span>
                <span className="px-3 py-1 hover:bg-[#fff8] ">
                  Pending Tickets
                </span>
                <span className="px-3 py-1 hover:bg-[#fff8] ">
                  Abandoned Tickets
                </span>
              </div>
            )}
          </span>
        </div>
        <div className="flex flex-col max-h-[300px] gap-3 overflow-auto">
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
      <hr />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <span className="font-[700] text-[14px] flex items-center gap-5">
            # Staffs
            <span className="bg-[#0257E6] flex items-center justify-center text-[10px] w-[25px] h-[25px] rounded-full text-[#fff]">
              20
            </span>
          </span>
          <span
            onClick={() => setModal({ open: true, name: "new_staff" })}
            className="font-[700] underline text-[12px] text-[#0257E6] cursor-pointer"
          >
            + Add New Staff
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
