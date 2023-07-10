import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import call from "../../../Assets/images/call.svg";

const Info = ({ name, value }) => {
  return (
    <span className="flex items-center text-slate-600 gap-3 whitespace-nowrap font-[700] text-[12px] ">
      {name + " "} : <span className="text-slate-400">{value}</span>
    </span>
  );
};

const TicketInfo = () => {
  const { setModal } = useAppContext();
  return (
    <div className="flex flex-col gap-5 text-slate-700 border-l px-2 overflow-y-auto">
      <div className="flex flex-col">
        <span className="text-[14px] font-[700] ">#Ticket Informaion</span>
        <div className="flex bg-gray-50 shadow-sm rounded-md p-3 flex-wrap gap-5 gap-y-2">
          <Info name={"CC Ticket ID"} value={"717u9282"} />
          <Info name={"Provider name"} value={"MTN"} />
          <Info name={"Phone number"} value={"081892992002"} />
          <Info name={"Category"} value={"Voice call service"} />
          <Info name={"Created Date"} value={"5 days ago"} />
          <Info name={"Due Date"} value={"20-10-2023"} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-[700] ">#Report </span>
        <div className="flex gap-3 flex-wrap p-2 shadow-sm bg-gray-50 ">
          <span className="bg-blue-100 text-[12px] w-fit px-1 rounded-[5px]">
            Has happened before
          </span>
          <span className="bg-blue-100 text-[12px] w-fit px-1 rounded-[5px]">
            Unable to call
          </span>
          <span className="bg-blue-100 text-[12px] w-fit px-1 rounded-[5px]">
            Poor internet speed
          </span>
          <span className="bg-blue-100 text-[12px] w-fit px-1 rounded-[5px]">
            No reception
          </span>
        </div>
      </div>
      <div className="flex flex-col">
      <span className="text-[14px] font-[700] ">#Assinged To </span>
        <div className="flex flex-col bg-gray-50 shadow-sm p-3 ">
          <span className="font-[700] text-[13px]">@Voice Call Services</span>
          <div className="flex justify-between font-[500] text-[12px]">
            <span>Assigned By : Ola Bolu</span>
            <span>Assigned To : John Kalu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;

