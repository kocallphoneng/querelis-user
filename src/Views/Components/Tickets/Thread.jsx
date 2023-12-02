import React, { useEffect } from "react";
import { useState } from "react";
import { ticketService } from "../../../Controllers/Services/ticket.service";

const Chat = ({ children, log }) => {
  const [open, toggle] = useState(false);
  return (
    <div className="border min-h-[100px] p-1  relative w-full rounded-[10px] flex gap-3">
      <span className="min-w-[40px] col-span-1 h-[40px]  rounded-full bg-gray-100"></span>
      <div className="flex flex-col col-span-10">
        <div className="flex flex-col text-[14px]  font-[700] text-gray-600">
          <span>
            {log?.user?.first_name} {log?.user?.last_name}
          </span>
          <span className="text-[12px] ">{log?.user?.email}</span>
        </div>
        <div className=" relative w-full flex font-[700] gap-2 text-[11px] text-gray-600">
          #{" "}
          <span className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            nulla, corporis autem quasi aliquam in sint praesentium unde
            perspiciatis voluptas deleniti tempore tenetur exercitationem nam
            vitae sapiente saepe. Nemo, provident!
          </span>
          <span className="absolute bottom-0 right-0 cursor-pointer hover:text-blue-600">
            Reply
          </span>
          {/* <span
            onClick={() => toggle(!open)}
            className="absolute bottom-[-11px] text-blue-500 left-[-50px] cursor-pointer hover:text-blue-600"
          >
            {open ? " Hide replies" : "show replies"}
          </span> */}
        </div>
        {open && children}
      </div>
      <span className="absolute top-1 right-1 text-[11px] font-[600] text-gray-600 flex flex-row-reverse gap-3 ">
        12:40pm
        <span>/</span> <span>12-12-20</span>
      </span>
    </div>
  );
};
const Reply = () => {
  return (
    <div className=" border-t relative w-full pt-2 mt-2 flex gap-3">
      <span className="min-w-[30px] col-span-1 h-[30px]  rounded-full bg-gray-100"></span>
      <div className="flex flex-col col-span-10">
        <div className="flex flex-col text-[13px]  font-[700] text-gray-600">
          <span>Chris London</span>
          <span className="text-[11px] ">081890200209</span>
        </div>
        <div className=" relative w-full flex font-[700] gap-2 text-[11px] text-gray-600">
          #{" "}
          <span className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            nulla, corporis autem quasi aliquam in sint praesentium unde
            perspiciatis voluptas deleniti tempore tenetur exercitationem nam
            vitae sapiente saepe. Nemo, provident!
          </span>
        </div>
      </div>
      <span className="absolute top-1 right-1 text-[11px] font-[600] text-gray-600 flex flex-row-reverse gap-3 ">
        12:40pm
        <span>/</span> <span>12-12-20</span>
      </span>
    </div>
  );
};
const Thread = ({ ticket }) => {
  const { getTicketLog } = new ticketService();
  const [logs, setLogs] = useState([]);
  const getLogs = async () => {
    const res = await getTicketLog(ticket?.uuid);
    if (res.message === "success") setLogs(res.data.data.logs);
  };
  useEffect(() => {
    getLogs();
  }, []);
  return (
    <div className="h-fit border-l px-2 flex flex-col gap-7">
      {logs.length > 0 ? (
        logs.map((l, n) => (
          <Chat key={n} log={l}>
            <Reply />
            <Reply />
            <Reply />
          </Chat>
        ))
      ) : (
        <div className="h-[150px] w-full bg-[#00000013] flex items-center justify-center round-[20px  ]">
          No Logs Found
        </div>
      )}
    </div>
  );
};

export default Thread;
