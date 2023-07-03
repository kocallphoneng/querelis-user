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
      <div className="grid grid-cols-12 gap-3 text-[14px] font-[700] w-full  p-2 h-[50px] bg-[#fff] ">
        {columns.map((col, n) => (
          <span key={n} className={`${n === 1 ? "col-span-2" : "col-span-1"}`}>
            {col}
          </span>
        ))}
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => {
        return (
          <div
            key={n}
            className="grid grid-cols-12 text-[12px] font-[700] w-full text-gray-500 gap-3  p-2 h-[50px] bg-[#fff] "
          >
            <span className="col-span-1">{row.name}</span>
            <span className="col-span-2">{row.tel}</span>
            <span className="col-span-1">{row.date.day}</span>
            <span className="col-span-1">{row.tikT}</span>
            <span className="col-span-1">{row.cat}</span>
            <span className="col-span-1">{row.reolvedT}</span>
            <span className="col-span-1">{row.mcc}</span>
            <span className="col-span-1">{row.mnc}</span>
            <span className="col-span-1">{row.lac}</span>
            <span className="col-span-1">{row.ci}</span>
            <span className="col-span-1">{row.status}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RequestTable;
