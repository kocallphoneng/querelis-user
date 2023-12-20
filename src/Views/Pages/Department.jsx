import React from "react";
import { BsFilter } from "react-icons/bs";
import DeptStaffsList from "../Components/Deparment.jsx/DeptStaffsList";
import DeptTicketList from "../Components/Deparment.jsx/DeptTicketList";

const Department = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex flex-col gap-5 bg-white rounded-[20px]">
        <div className="flex bg-[#2170f807] h-[100px] p-5 justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <div className="text-[22px] flex gap-3 text-[#4e4e4e] leading-[30px] font-[900] ">
              Department{" "}
              <div className="flex gap-1 w-fit shadow-[0px,10px,19px,-3px,#0f59d82f] justify-between h-[35px] p-1 px-4 items-center rounded-[20px] bg-white ">
                <span className="text-[14px] font-[700]">
                  Voice & Data Service
                </span>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              {/* <span className="text-[14px] font-[600] text-gray-500">Description</span> */}
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex flex-col items-center text-[--base_color] text-[30px] font-[700]">
              100 <span className="text-[12px]">Total</span>
            </span>
            <span className="flex px-5 border-x flex-col items-center text-green-600 text-[30px] font-[700]">
              50 <span className="text-[12px]">Complete</span>
            </span>
            <span className="flex flex-col items-center text-[#ff5874ec] text-[30px] font-[700]">
              50 <span className="text-[12px]">Incomplete</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 w-full px-7 py-4">
          <div className="col-span-4">
            <DeptStaffsList />
          </div>
          <div className="col-span-8">
            <DeptTicketList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
