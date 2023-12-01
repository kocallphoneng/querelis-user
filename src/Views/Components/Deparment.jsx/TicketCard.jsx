import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const TicketCard = ({ data }) => {
  const { setModal } = useAppContext();
  const getColors = () => {
    if (data.status === "PENDING") return { color: "gold" };
    else if (data.status === "RESOLVED") return { color: "green" };
    else if (data.status === "REJECTED") return { color: "purple" };
    else if (data.status === "ACCEPTED") return { color: "orange" };
    else if (data.status === "ESCALTED") return { color: "red" };
    else return { color: "gray" };
  };
  return (
    <div
      onClick={() => setModal({ open: true, name: "ticket" })}
      className="flex flex-col bg-[#8080800e] hover:bg-slate-200 transition-all duration-100 cursor-pointer gap-1 shadow-sm w-full p-2 rounded-lg text-gray-400 text-[12px]"
    >
      <div className="flex justify-between items-center">
        <span className="font-[700] flex items-center gap-10">
          {data?.reporter?.network} <span># {data?.ticket_id}</span>
        </span>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <span className=" whitespace-nowrap truncate">
          Handler: {data?.assigned_to?.first_name}
        </span>
        <span className="flex items-center gap-3">
          Status:{" "}
          <span style={getColors()} className=" font-[500]">{data?.status}</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
