import React from "react";
import useDepartment from "../../../Controllers/Hooks/useDepartment";
import { IoClose } from "react-icons/io5";

const Department = () => {
//   const {
//     loading,
//     handleSubmit,
//     handleChange,
//     form,
//     error,
//     staffInputValue,
//     setStaffInputValue,
//     staffs,
//     handleStaff,
//     modalRef,
//     closeModal,
//     removeStaff,
//   } = useDepartment();

  return (
    <div ref={modalRef} className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-[22px] font-[700]">Department</span>
        <IoClose
        //   onClick={closeModal}
          className="text-[21px] cursor-pointer hover:text-red-500 "
        />
      </div>
    </div>
  );
};

export default Department;
