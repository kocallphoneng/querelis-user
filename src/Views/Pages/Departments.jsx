import React from "react";
import DepartmentTable from "../UI/Table/DepartmentTable";
import { BsFilter, BsPlus } from "react-icons/bs";

import { useAppContext } from "../../Controllers/Context/AppContext";
// import useDepartment from "../../Controllers/Hooks/useDepartment";
import ContentLayout from "../UI/Layouts/ContentLayout";
import InfoCard from "../Components/Deparment.jsx/InfoCard";

const Departments = () => {
  const { setModal, departments } = useAppContext();
  // const { openModalRef } = useDepartment();
  // const { showDataInfo } = useAppContext();
  console.log(departments);
  return (
    <ContentLayout
      firstChild={
        <div className="flex flex-col gap-5 bg-white rounded-[20px]">
          <div className="flex bg-[#2170f807] h-[100px] p-5 justify-between items-center">
            <div className="flex flex-col gap-2 ">
              <span className="text-[22px] leading-[30px] font-[700] ">
                Vendors
              </span>
              <div className="flex gap-7 items-center">
                <div className="flex gap-1 w-[250px] shadow-[0px,10px,19px,-3px,#0f59d82f] justify-between h-[35px] p-1 px-4 items-center rounded-[20px] bg-white ">
                  <span className="text-[13px] font-[700] text-gray-600 ">
                    All Vendors
                  </span>
                  <span className="flex items-center text-[--base_color] gap-2 text-[12px] cursor-pointer  font-[700]">
                    <BsFilter className="text-[21px] text-[--base_color] font-[700]" />
                    Filter
                  </span>
                </div>
                <span
                  onClick={() =>
                    setModal({ open: true, name: "new_department" })
                  }
                  className="flex gap-1 cursor-pointer w-fit shadow-[0px,10px,19px,-3px,#0f59d82f] justify-between items-center h-[35px] p-1 px-3 items-cente rounded-[20px] bg-white border-gray-300"
                >
                  <span className="text-[13px] font-[700] text-[--base_color] ">
                    New
                  </span>
                  <BsPlus className="text-[21px] font-[700] text-[--base_color]" />
                </span>
              </div>
            </div>
            <span className="flex flex-col items-center text-[--base_color] text-[30px] font-[700]">
              {departments?.data?.length} <span className="text-[12px]">Total</span>
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full pt-0 p-5">
            <DepartmentTable num_of_rows={1000} />
          </div>
        </div>
      }
      secondChild={<InfoCard />}
    />
  );
};

export default Departments;
