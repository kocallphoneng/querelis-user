import React from "react";
// import RegularInput from "../Utilities/Inputs/RegularInput";
import DepartmentForm from "../Forms/DepartmentForm";
import useDepartment from "../../../Controllers/Hooks/useDepartment";
// import Selector from "../Utilities/Inputs/Selector";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { staffs as staffs_ } from "../../../Constants/testData";
import { IoCloseCircleOutline } from "react-icons/io5";

const NewDepartment = () => {
  const {
    loading,
    handleSubmit,
    handleChange,
    form,
    error,
    staffInputValue,
    setStaffInputValue,
    staffs,
    handleStaff,
    modalRef,
  } = useDepartment();

  return (
    <div ref={modalRef} className="flex flex-col gap-4">
      <span className="text-[22px] font-[700]">Create New Department</span>
      <DepartmentForm loading={loading} handleSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name of department*"
          variant="outlined"
          name={"name"}
          onChange={handleChange}
          value={form.name}
          error={error?.name !== ""}
        />
        <div className="flex flex-col gap-3">
          {staffs.length > 0 && (
            <div className="bg-gray-50 mt-3 rounded-md w-full p-3 flex flex-wrap gap-3">
              {staffs?.map((staff, n) => (
                <span
                  key={n}
                  className="border text-[14px] px-1 flex items-center gap-1"
                >
                  {staff.label}
                  <IoCloseCircleOutline className="text-[20px] text-red-500 cursor-pointer" />
                </span>
              ))}
            </div>
          )}
          <Autocomplete
            disablePortal
            id="staffs"
            options={staffs_}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.label}
              </li>
            )}
            onChange={(event, newValue) => {
              handleStaff(newValue);
            }}
            inputValue={staffInputValue}
            onInputChange={(event, newInputValue) => {
              setStaffInputValue(newInputValue);
            }}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="Add New User" />
            )}
          />
        </div>
      </DepartmentForm>
    </div>
  );
};

export default NewDepartment;
