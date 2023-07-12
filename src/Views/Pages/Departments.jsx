import React from "react";
import DepartmentTable from "../UI/Table/DepartmentTable";
import { BsFilter, BsPlus, BsSearch } from "react-icons/bs";

import { useAppContext } from "../../Controllers/Context/AppContext";
import useDepartment from "../../Controllers/Hooks/useDepartment";
import ContentLayout from "../UI/Layouts/ContentLayout";
import InfoCard from "../Components/Deparment.jsx/InfoCard";
// import { Link } from "react-router-dom";

const Departments = () => {
  const { setModal } = useAppContext();
  const { openModalRef } = useDepartment();
  const { showDataInfo } = useAppContext();

  return (
    <>
      <ContentLayout
        firstChild={
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <span className="text-[22px] leading-[30px] font-[700] ">
                Departments
              </span>
              {!showDataInfo && (
                <div className="flex items-center gap-5">
                  <span className="flex gap-1 w-[250px] h-[35px] items-center border-2 rounded-[7px] border-gray-300 bg-white">
                    <BsSearch className="mx-2" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full text-gray-600 text-[13px] bg-transparent font-[700] outline-none"
                    />
                  </span>
                  <span className="flex gap-1 w-[250px] justify-between h-[35px] p-1 px-2 items-center border-2 rounded-[7px] bg-white border-gray-300">
                    <span className="text-[13px] font-[700] text-gray-600 ">
                      All Categories
                    </span>
                    <span className="flex items-center gap-2 text-[12px] cursor-pointer text-gray-600 font-[700]">
                      <BsFilter className="text-[21px] font-[700]" />
                      Filter
                    </span>
                  </span>
                  <span
                    onClick={() =>
                      setModal({ open: true, name: "new_department" })
                    }
                    className="flex gap-1 cursor-pointer w-fit justify-between h-[35px] p-1 px-2 items-center border-2 rounded-[7px] bg-white border-gray-300"
                  >
                    <span className="text-[13px] font-[700] text-gray-600 ">
                      New
                    </span>
                    <BsPlus className="text-[21px] font-[700] text-gray-600 " />
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 w-full">
              <DepartmentTable num_of_rows={1000} />
            </div>
          </div>
        }
        secondChild={<InfoCard />}
      />
    </>
  );
};

export default Departments;
