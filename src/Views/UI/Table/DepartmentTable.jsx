import React from "react";
// import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData } from "../../../Constants/testData";
import { useAppContext } from "../../../Controllers/Context/AppContext";

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
  const { showDataInfo, setTargetElement, openContentModal } = useAppContext();

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-12 text-[14px] font-[700] w-full items-center p-2 h-[50px] bg-[#fff] ">
        <span className={showDataInfo ? "col-span-10" : "col-span-3"}>
          Department
        </span>
        {!showDataInfo && (
          <>
            <span className="col-span-3">No of staffs</span>
            <span className="col-span-2">Completed requests</span>
            <span className="col-span-2">Incomplete requests</span>
          </>
        )}
        <span className="col-span-2 flex justify-center">Action</span>
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => (
        <div
          key={n}
          className="grid grid-cols-12 text-[14px] font-[400] w-full items-center p-2 h-[50px] bg-[#fff] "
        >
          <span className={showDataInfo ? "col-span-10" : "col-span-3"}>
            {row.name}
          </span>
          {!showDataInfo && (
            <>
              <span className="col-span-3">{row.staffs}</span>
              <span className="col-span-2">{row.completed_requests}</span>
              <span className="col-span-2">{row.pending_requests}</span>
            </>
          )}
          <span className="col-span-2 flex justify-center ">
            <span
              onClick={() => {
                openContentModal();
                setTargetElement({
                  title: row.name,
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
