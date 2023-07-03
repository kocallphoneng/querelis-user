import React from "react";
import RegularInput from "../Utilities/Inputs/RegularInput";
import DepartmentForm from "../Forms/DepartmentForm";
import useDepartment from "../../../Controllers/Hooks/useDepartment";
import Selector from "../Utilities/Inputs/Selector";
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
    select,
    staffs,
    handleStaff,
  } = useDepartment();
  return (
    <div className="flex flex-col gap-4">
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
        <span>Add new users to the department</span>
        <div className="bg-gray-100 rounded-md w-full p-3 flex flex-wrap gap-3">
          {staffs?.map((staff, n) => (
            <span
              key={n}
              className="border text-[14px] px-1 flex items-center gap-1"
            >
              {staff.name}
              <IoCloseCircleOutline className="text-[20px] text-red-500 cursor-pointer" />
            </span>
          ))}
        </div>
        <Autocomplete
          disablePortal
          id="staffs"
          options={staffs_}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.label}
            </li>
          )}
        //   value={select}
          getOptionLabel={(option) =>
            handleStaff({
              name: "staffs",
              value: option.label,
            })
          }
          sx={{ width: "100%" }}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="Add New User" />
          )}
        />
      </DepartmentForm>
    </div>
  );
};

export default NewDepartment;
