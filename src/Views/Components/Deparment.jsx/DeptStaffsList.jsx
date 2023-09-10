import React from "react";
import StaffCard from "./StaffCard";

const DeptStaffsList = () => {
  return (
    <div className="w-full p-5 bg-[#5f5fe207] flex flex-col gap-5 rounded-[10px] shadow-sm">
      <span className="text-[16px] font-[600]">Deparment Staffs</span>
      <div className="flex flex-col gap-2">
        <StaffCard />
      </div>
    </div>
  );
};

export default DeptStaffsList;
