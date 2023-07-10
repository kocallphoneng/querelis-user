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

const TicketModal = () => {
  const { setModal } = useAppContext();
  const [activePage, setActivePage] = useState("ticket_info");

  return (
    <div className="flex flex-col gap-4">
      {/* <div className="flex justify-between items-center">
        <span className="text-[22px] font-[700]">Ticket #000000</span>
        <IoClose
          
          className="text-[21px] cursor-pointer hover:text-red-500 "
        />
      </div> */}
      <div className="grid grid-cols-12">
        <span
          onClick={() => setActivePage("ticket_info")}
          className={`col-span-6 h-[40px] font-[700] border-b cursor-pointer ${
            activePage === "ticket_info"
              ? "text-[#0257E6] border-b-2 border-b-[#0257E6]"
              : "text-gray-600"
          }`}
        >
          Ticket Info
        </span>
        <span
          onClick={() => setActivePage("process_ticket")}
          className={`col-span-6 h-[40px] font-[700] border-b cursor-pointer ${
            activePage === "process_ticket"
              ? "text-[#0257E6] border-b-2 border-b-[#0257E6]"
              : "text-gray-600"
          }`}
        >
          Review Ticket
        </span>
      </div>
      {activePage === "ticket_info" ? <TicketInfo /> : <ReviewTicket />}
    </div>
  );
};

export default TicketModal;
