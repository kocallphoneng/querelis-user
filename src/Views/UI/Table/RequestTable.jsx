import React from "react";
import { requestData } from "../../../Constants/testData";

const RequestTable = ({ num_of_rows }) => {
  const columns = [
    "Name",
    "Mobile number",
    "Date",
    "CC Ticket ID",
    "Category",
    "Resolve Time",
    "MCC",
    "MNC",
    "LAC",
    "CI",
    "Status",
  ];
  const rows = requestData;
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-12 text-[14px] font-[700] w-full  p-2 h-[50px] bg-[#fff] ">
        {columns.map((col, n) => (
          <span key={n} className={`${n === 0 ? "col-span-2" : "col-span-1"}`}>
            {col}
          </span>
        ))}
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => (
        <div
          key={n}
          className="grid grid-cols-12 text-[14px] font-[400] w-full items-center p-2 h-[50px] bg-[#fff] "
        ></div>
      ))}
    </div>
  );
};

export default RequestTable;
