import React from "react";
import { RiDeleteBinLine, RiPencilFill } from "react-icons/ri";
import { dapartmentData, staffs } from "../../../Constants/testData";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const StaffsTable = ({ num_of_rows }) => {
  const { setModal } = useAppContext();

  const rows = staffs;
  
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-12 text-[14px]  bg-[#ffffff9f] text-slate-700 font-[700] w-full items-center p-2 h-[50px] ">
        <span className="col-span-2">Name</span>
        <span className="col-span-2">Email</span>
        <span className="col-span-2">Phone</span>
        <span className="col-span-2">Departments </span>
        <span className="col-span-2">Tickets</span>
        <span className="col-span-1">Active</span>
        <span className="col-span-1"></span>
      </div>
      {rows?.slice(0, num_of_rows)?.map((row, n) => (
        <div
          key={n}
          className="grid grid-cols-12 text-[13px] font-[700] text-slate-600 w-full items-center p-2 h-[50px] bg-[#fff] "
        >
          <span className="col-span-2 flex gap-3 items-center">
            <span className="w-[25px] whitespace-nowrap truncate h-[25px] bg-gray-300 rounded-full"></span>
            John Doe
          </span>
          <span className="col-span-2 whitespace-nowrap truncate">
            johnsmail@mail.com
          </span>
          <span className="col-span-2 whitespace-nowrap truncate">
            23482882999299
          </span>
          <span className="col-span-2 whitespace-nowrap truncate">
            @Voice call
          </span>
          <span className="col-span-2 flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-[20px] h-[7px] bg-[goldenrod] "></span>18
            </span>
            <span className="flex items-center gap-1">
              <span className="w-[20px] h-[7px] flex-nowrap bg-green-600 "></span>
              30
            </span>
          </span>
          <span className="col-span-1 text-red-600">Offline</span>
          <span className="col-span-1 flex justify-center items-center ">
            <IoEllipsisVertical
              onClick={() => setModal({ open: true, name: "staff" })}
              className=" cursor-pointer"
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default StaffsTable;
