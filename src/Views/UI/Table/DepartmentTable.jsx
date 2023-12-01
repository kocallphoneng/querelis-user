import React from "react";
// import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData } from "../../../Constants/testData";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const DepartmentTable = ({ num_of_rows }) => {
  const { showDataInfo, setTargetElement, openContentModal, departments } =
    useAppContext();
  // bg-[#0257E6]
  const rows = departments?.data
  return (
    <div className="flex flex-col gap-1">
      <div className="grid border-y grid-cols-12 text-[14px]  bg-[#ffffff9f] text-slate-700 font-[700] w-full items-center p-2 h-[50px]  ">
        <span className={showDataInfo ? "col-span-10" : "col-span-3"}>
          Department
        </span>
        {!showDataInfo && (
          <>
            <span className="col-span-3">No of staffs</span>
            <span className="col-span-2">Resolved Tickets</span>
            <span className="col-span-2">Pending Tickets</span>
          </>
        )}
        <span className="col-span-2 flex justify-center">Action</span>
      </div>
      {rows?.map((row, n) => (
        <div
          key={n}
          className="grid grid-cols-12 text-[13px] font-[700] text-slate-400 w-full items-center p-2 h-[50px] bg-[#fff] "
        >
          <span className={showDataInfo ? "col-span-10" : "col-span-3"}>
            {row?.name}
          </span>
          {!showDataInfo && (
            <>
              <span className="col-span-3">{row?.users_count}</span>
              <span className="col-span-2">{row?.resolved_tickets_count}</span>
              <span className="col-span-2">{row?.pending_tickets_coun}</span>
            </>
          )}
          <span className="col-span-2 flex justify-center ">
            <span
              onClick={() => {
                openContentModal();
                setTargetElement({
                  title: row?.name,
                  data: row,
                });
              }}
              className="text-[#0257E6] cursor-pointer font-[700]"
            >
              view
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default DepartmentTable;
