import React from "react";
import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData, staffs } from "../../../Constants/testData";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const StaffsTable = ({ num_of_rows }) => {
  const { setModal, targetStaff, setTargetStaff } = useAppContext();

  const rows = localStorage.staffs ? JSON.parse(localStorage.staffs) : staffs;
  // console.log(JSON.parse(localStorage.staffs));
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-12 border-y text-[14px]  bg-[#ffffff9f] text-slate-700 font-[700] w-full items-center p-2 h-[50px] ">
        <span className="col-span-2">Name</span>
        <span className="col-span-2">Email</span>
        <span className="col-span-2">Phone</span>
        <span className="col-span-2">Departments </span>
        <span className="col-span-2">Tickets</span>
        <span className="col-span-1">Active</span>
        <span className="col-span-1"></span>
      </div>
      {rows?.map((row, n) => (
        <div
          key={n}
          className="grid grid-cols-12 text-[13px] font-[700] text-slate-600 w-full items-center p-2 h-[50px] bg-[#fff] "
        >
          <span className="col-span-2 flex gap-3 items-center">
            <span className="w-[25px] whitespace-nowrap truncate h-[25px] bg-gray-300 rounded-full"></span>
            {row.label}
          </span>
          <span className="col-span-2 whitespace-nowrap truncate">
            {row.email}
          </span>
          <span className="col-span-2 whitespace-nowrap truncate">
            {row.phone}
          </span>
          <span className="col-span-2 whitespace-nowrap truncate">
            {row?.deparment[0]}
          </span>
          <span className="col-span-2 flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-[30px] rounded-[10px] h-[7px] bg-[#ff5874ec] "></span>
              {row?.pending_request}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-[30px] rounded-[10px] h-[7px] flex-nowrap bg-green-600 "></span>
              {row.completed_request}
            </span>
          </span>
          <span className="col-span-1 text-red-600">Active</span>
          <span className="col-span-1 flex justify-center items-center ">
            <IoEllipsisVertical
              onClick={() => {
                setModal({ open: true, name: "staff" });
                setTargetStaff(row);
              }}
              className=" cursor-pointer"
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default StaffsTable;
