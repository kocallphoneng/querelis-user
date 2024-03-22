import React from "react";
// import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData } from "../../../Constants/testData";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import Loader from "../Utilities/Loader";
const DepartmentTable = ({ num_of_rows }) => {
  const {
    showDataInfo,
    setTargetElement,
    openContentModal,
    departments,
    loadingData,
  } = useAppContext();
  // bg-[#0257E6]
  // console.log(departments.data)
  const rows = departments?.data ? departments?.data : [];
  // console.log("rows", rows.length);
  return (
    <div className="flex flex-col gap-1 overflow-x-auto pb-[40px]">
      <div
        className={`grid ${
          showDataInfo ? "min-w-[300px]" : "min-w-[800px]"
        } border-y grid-cols-12 text-[14px]  bg-[#ffffff9f] text-slate-700 font-[700] w-full items-center md:p-2 md:px-2 px-5 h-[50px]  `}
      >
        <span
          className={`${
            showDataInfo ? "col-span-10" : "col-span-2"
          } min-w-[130px] pr-3`}
        >
          Units
        </span>
        {!showDataInfo && (
          <>
            <span className="col-span-2 min-w-[130px] pr-3">No of staffs</span>
            <span className="col-span-2 min-w-[130px] pr-3">
              Resolved Tickets
            </span>
            <span className="col-span-2 min-w-[130px] pr-3">
              Pending Tickets
            </span>
            <span className="col-span-1 min-w-[130px] pr-3">
              Unit <span className="sm:block hidden"> Code</span>
            </span>
            <span className="col-span-2 min-w-[130px] pr-3]">Vendor</span>
          </>
        )}
        <span className="col-span-1 flex justify-center min-w-[100px]">
          Action
        </span>
      </div>
      {rows && rows?.length > 0 && !loadingData ? (
        rows?.map((row, n) => (
          <div
            key={n}
            className={`grid grid-cols-12 ${
              showDataInfo ? "min-w-[300px]" : "min-w-[800px] "
            }  text-[13px] font-[700]  justify-between text-slate-400 w-full items-center md:p-2 md:px-2 px-5 min-h-[50px] bg-[#fff] `}
          >
            <div
              className={`${
                showDataInfo ? "col-span-10" : "col-span-2"
              } min-w-[130px] pr-3 overflow-hidden `}
            >
              {row?.name}
            </div>
            {/* {! && ( */}

            <span
              className={`col-span-2 min-w-[130px] pr-3 ${
                showDataInfo && "hidden"
              }`}
            >
              {row?.users_count}
            </span>
            <span className="col-span-2 min-w-[130px] pr-3">
              {row?.resolved_tickets_count}
            </span>
            <span className="col-span-2 min-w-[130px] pr-3">
              {row?.pending_tickets_count}
            </span>
            <span className="col-span-1 min-w-[130px] pr-3">{row?.code}</span>
            <span className="col-span-2 min-w-[130px] pr-3">
              {row?.vendor.name}
            </span>

            {/* // )} */}
            <span className="col-span-1 flex justify-center ">
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
        ))
      ) : (
        <div
          className={`flex flex-col  text-gray-300 w-full items-center justify-center min-h-[300px]`}
        >
          {loadingData ? <Loader size={[50, 50]} /> : <span>No Data Yet</span>}
        </div>
      )}
    </div>
  );
};

export default DepartmentTable;
