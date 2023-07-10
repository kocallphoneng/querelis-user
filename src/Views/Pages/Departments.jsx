import React from "react";
import DepartmentTable from "../UI/Table/DepartmentTable";
import { BsPlus, BsSearch } from "react-icons/bs";
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
              <span className="text-[24px] leading-[30px] font-[600] ">
                Departments
              </span>
              <div className="flex items-center gap-5">
                {!showDataInfo && (
                  <span className="border rounded-[10px] overflow-hidden flex justify-between items-center min-w-[300px] bg-[#fff] h-[40px]">
                    <input
                      type="text"
                      placeholder="Search for departments"
                      className=" p-3 text-[14px] bg-transparent border-none outline-none h-full"
                    />
                    <span className="bg-[#c2bfbf1e] cursor-pointer transition-all duration-150 hover:bg-[#c9c9c991] min-w-[40px] h-[40px] flex justify-center items-center">
                      <BsSearch className="text-[#0257E6] text-[20px]" />
                    </span>
                  </span>
                )}
                <span
                  ref={openModalRef}
                  onClick={() =>
                    setModal({ open: true, name: "new_department" })
                  }
                  className="flex shadow-md items-center h-[40px] cursor-pointer gap-2 transition-all duration-150 bg-[#0257E6] hover:bg-[#0256e6a1] p-2 py-1 font-[700] text-[#fff] rounded-full text-[14px]"
                >
                  <BsPlus className="text-[25px]" />
                </span>
              </div>
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
