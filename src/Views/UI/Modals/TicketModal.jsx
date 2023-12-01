import React from "react";
// import RegularInput from "../Utilities/Inputs/RegularInput";
import DepartmentForm from "../Forms/DepartmentForm";
import useDepartment from "../../../Controllers/Hooks/useDepartment";
// import Selector from "../Utilities/Inputs/Selector";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { staffs as staffs_ } from "../../../Constants/testData";
import { IoCloseCircleOutline, IoClose } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { useState } from "react";
import TicketInfo from "../../Components/Tickets/TicketInfo";
import ReviewTicket from "../../Components/Tickets/ReviewTicket";
import Thread from "../../Components/Tickets/Thread";

const TicketModal = () => {
  const { setModal, targetTicket } = useAppContext();
  const [activePage, setActivePage] = useState("ticket_info");
  console.log(targetTicket);
  return (
    <div className="flex flex-col gap-2 h-[400px] overflow-y-auto">
      <div className="flex items-center justify-between ">
        <span className="font-[700] text-[21px]">Ticket 820uw9</span>
        <IoClose onClick={() => setModal(false)} className=" cursor-pointer" />
      </div>
      <div className="flex w-full gap-10 ">
        <span
          onClick={() => setActivePage("ticket_info")}
          className="flex items-center gap-2 text-[14px] cursor-pointer"
        >
          <span
            className={`${
              activePage === "ticket_info" ? "bg-blue-300" : "bg-gray-100"
            } w-[10px] h-[10px] rounded-full`}
          ></span>
          Ticket Info
        </span>
        <span
          onClick={() => setActivePage("ticket_review")}
          className="flex items-center gap-2 text-[14px] cursor-pointer"
        >
          <span
            className={`${
              activePage === "ticket_review" ? "bg-blue-300" : "bg-gray-100"
            } w-[10px] h-[10px] rounded-full`}
          ></span>
          Review
        </span>
        <span
          onClick={() => setActivePage("ticket_thread")}
          className="flex items-center gap-2 text-[14px] cursor-pointer"
        >
          <span
            className={`${
              activePage === "ticket_thread" ? "bg-blue-300" : "bg-gray-100"
            } w-[10px] h-[10px] rounded-full`}
          ></span>
          Threads
        </span>
      </div>
      <hr />
      {activePage === "ticket_info" && <TicketInfo ticket={targetTicket} />}
      {activePage === "ticket_review" && <ReviewTicket ticket={targetTicket} />}
      {activePage === "ticket_thread" && <Thread ticket={targetTicket} />}
    </div>
  );
};

export default TicketModal;
