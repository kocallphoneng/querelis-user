import React from "react";
import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData, staffs } from "../../../Constants/testData";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import Loader from "../Utilities/Loader";

const StaffsTable = ({ num_of_rows }) => {
  const { setModal, targetStaff, setTargetStaff, staffs, loadingData } =
    useAppContext();

  const rows = localStorage.staffs ? JSON.parse(localStorage.staffs) : staffs;
  // console.log(JSON.parse(localStorage.staffs));
  return (
    <div className="flex flex-col gap-1 overflow-x-auto pb-[40px]">
      <div
        className={`grid min-w-[800px]  grid-cols-12 text-[13px] font-[700]  justify-between text-slate-400 w-full items-center md:p-2 md:px-2 px-5 min-h-[50px] bg-[#fff]`}
      >
        <span className="col-span-2">Name</span>
        <span className="col-span-2">Email</span>
        <span className="col-span-2">Phone</span>
        <span className="col-span-2">Departments </span>
        <span className="col-span-2">Tickets</span>
        <span className="col-span-1">Active</span>
        <span className="col-span-1"></span>
      </div>
      {staffs?.data.length > 0 && !loadingData ? (
        staffs?.data?.map((row, n) => (
          <div
            key={n}
            className={`grid grid-cols-12 min-w-[800px] text-[13px] font-[700]  justify-between text-slate-400 w-full items-center md:p-2 md:px-2 px-5 min-h-[50px] bg-[#fff] `}
          >
            <span className="col-span-2 flex gap-3 items-center">
              <span className="w-[25px] whitespace-nowrap truncate h-[25px] bg-gray-300 rounded-full"></span>
              {row?.first_name} {row?.last_name[0]}
            </span>
            <span className="col-span-2 whitespace-nowrap   truncate">
              {row?.email}
            </span>
            <span className="col-span-2 whitespace-nowrap   truncate">
              {row?.phone ? row?.phone : "- -"}
            </span>
            <span className="col-span-2 whitespace-nowrap   truncate">
              {row?.department ? row?.department?.name : " - -"}
            </span>
            <span className="col-span-2 flex gap-6  ">
              <span className="flex items-center gap-1">
                <span className="w-[30px] rounded-[10px] h-[7px] bg-[#ff5874ec] "></span>
                {row?.pending_tickets_count}
              </span>
              <span className="flex items-center gap-1  ">
                <span className="w-[30px] rounded-[10px] h-[7px] flex-nowrap bg-green-600 "></span>
                {row?.resolved_tickets_count}
              </span>
            </span>
            <span className="col-span-1 text-red-600  ">
              {row?.is_active === 1 ? "Active" : "Inactive"}
            </span>
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
        ))
      ) : (
        <div className="flex flex-col text-gray-300 items-center justify-center min-h-[300px]">
          {loadingData ? <Loader size={[50, 50]} /> : <span>No Data Yet</span>}
        </div>
      )}
    </div>
  );
};

export default StaffsTable;
