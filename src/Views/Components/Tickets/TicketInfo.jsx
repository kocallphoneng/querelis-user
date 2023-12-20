import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import call from "../../../Assets/images/call.svg";
import { staffService } from "../../../Controllers/Services/staff.service";

const Info = ({ name, value }) => {
  return (
    <span className="flex items-center text-slate-600 gap-3 whitespace-nowrap font-[700] text-[12px] ">
      {name + " "} : <span className="text-slate-400">{value}</span>
    </span>
  );
};

const TicketInfo = ({ ticket }) => {
  const { setModal, staffs } = useAppContext();
  const { getStaff } = new staffService();
  const getAssignee = async () => {
    const res = getStaff();
  };
  return (
    <div className="flex flex-col gap-5 text-slate-700 border-l px-2 overflow-y-auto">
      <div className="flex flex-col">
        <span className="text-[14px] font-[700] ">#Ticket Informaion</span>
        <div className="flex bg-gray-50 shadow-sm rounded-md p-3 flex-wrap gap-5 gap-y-2">
          <Info name={"CC Ticket ID"} value={ticket?.ticket_id} />
          <Info name={"Provider name"} value={ticket?.reporter?.network} />
          <Info name={"Phone number"} value={ticket?.reporter?.msisdn} />
          <Info name={"Category"} value={ticket?.category} />
          <Info
            name={"Created Date"}
            value={ticket?.created_at?.split(0, 16)}
          />
          <Info
            name={"Last updated"}
            value={ticket?.updated_at?.split(0, 16)}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-[700] ">#User Report </span>
        <div className="flex gap-3 flex-wrap p-3 shadow-sm bg-gray-50 ">
          {JSON.parse(ticket?.issue)?.map((issue, n) => (
            <span
              key={n}
              className="bg-blue-100 text-[12px] w-fit px-1 rounded-[4px]"
            >
              <span className="">{issue?.key}</span> --{" "}
              <i className="text-slate-700 font-[600]">{issue?.value}</i>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-[700] ">#Server Report </span>
        <div className="flex gap-3 flex-wrap p-3 shadow-sm bg-gray-50 ">
          {Object.keys(JSON.parse(ticket?.server_query))?.map((issue, n) => (
            <span
              key={n}
              className="bg-blue-100 text-[12px] w-fit px-1 rounded-[4px]"
            >
              <span className="">{issue}</span> --{" "}
              <i className="text-slate-700 font-[600]">
                {JSON.parse(ticket?.server_query)[issue]}
              </i>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-[700] ">#Assinged To </span>
        <div className="flex flex-col bg-gray-50 shadow-sm p-3 ">
          <span className="font-[700] text-[13px]">
            @{ticket?.assigned_to?.department?.code}
          </span>
          <div className="flex justify-between font-[500] text-[12px]">
            <span className=" capitalize">
              Assigned To : {ticket?.assigned_to?.first_name}{" "}
              {ticket?.assigned_to?.last_name}
            </span>
            <span className=" capitalize">
              Assigned By : {ticket?.assigned_by?.first_name}{" "}
              {ticket?.assigned_by?.last_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
