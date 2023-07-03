import React from "react";
import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData } from "../../../Constants/testData";

const DepartmentTable = ({ num_of_rows }) => {
  const columns = [
    "Name",
    "Supervisor",
    "Number of staffs",
    "Completed Requests",
    "Pending Requests",
    "",
    "Delete",
  ];
  const rows = dapartmentData;
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-12 text-[14px] font-[700] w-full items-center p-2 h-[50px] bg-[#fff] ">
        <span className="col-span-3">Department</span>
        <span className="col-span-2">No of staffs</span>
        <span className="col-span-2">Completed requests</span>
        <span className="col-span-2">Incomplete requests</span>
        <span className="col-span-2"></span>
        <span className="col-span-2"></span>
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => (
        <div
          key={n}
          className="grid grid-cols-12 text-[14px] font-[400] w-full items-center p-2 h-[50px] bg-[#fff] "
        >
          <span className="col-span-3">{row.name}</span>
          <span className="col-span-2">{row.staffs}</span>
          <span className="col-span-2">{row.completed_requests}</span>
          <span className="col-span-2">{row.pending_requests}</span>
          <span className="col-span-2">
            <span className="p-2 bg-[#F25A29] rounded-md text-[#fff] text-[0.7rem] cursor-pointer">
              Add New Staff
            </span>
          </span>
          <span className="col-span-1 flex justify-center gap-5 items-center">
            <RiPencilFill className="text-[20px] cursor-pointer text-[#0257E6]" />
            <RiDeleteBinLine className="text-[20px] cursor-pointer text-red-600" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default DepartmentTable;
