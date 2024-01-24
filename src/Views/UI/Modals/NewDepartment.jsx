import React from "react";
// import RegularInput from "../Utilities/Inputs/RegularInput";
import DepartmentForm from "../Forms/DepartmentForm";
import useDepartment from "../../../Controllers/Hooks/useDepartment";
// import Selector from "../Utilities/Inputs/Selector";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { staffs as staffs_ } from "../../../Constants/testData";
import { IoCloseCircleOutline, IoClose } from "react-icons/io5";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const NewDepartment = () => {
  const {
    loading,
    handleSubmit,
    handleChange,
    form,
    error,
    categoryValue,
    setCategoryValue,
    staffs,
    handleStaff,
    modalRef,
    closeModal,
    units,
    unitValue,
    handleUnit,
    removeStaff,
    handleCategory,
    setUnitValue,
  } = useDepartment();

  const categories = ["call", "data", "sms", "enterprise", "general"];
  console.log("unitValue", unitValue);
  return (
    <div ref={modalRef} className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-[22px] font-[700]">Create New Vendor</span>
        <IoClose
          onClick={closeModal}
          className="text-[21px] cursor-pointer hover:text-red-500 "
        />
      </div>
      <DepartmentForm loading={loading} handleSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name of vendor*"
          variant="outlined"
          name={"name"}
          size="small"
          onChange={handleChange}
          value={form.name}
          error={error?.name !== ""}
        />
        {/* <Autocomplete
          disablePortal
          id="unit"
          size="small"
          options={units}
          renderOption={(props, option) => {
            console.log("option", option);
            console.log("props", props);
            return (
              <li className=" capitalize " {...props} key={option.id}>
                {option.name}
              </li>
            );
          }}
          onChange={(event, newValue) => {
            console.log(newValue);
            handleUnit(newValue.id);
          }}
          inputValue={unitValue.name}
          onInputChange={(event, newInputValue) => {
            // console.log(newInputValue);
            setUnitValue(newInputValue);
          }}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField className="capitalize" {...params} label="Unit" />
          )}
        /> */}
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Unit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={unitValue}
            label="Unit"
            onChange={(e) => handleUnit(e.target.value)}
          >
            <MenuItem value={""}></MenuItem>
            {units?.map((u, n) => (
              <MenuItem key={n} value={u}>
                {u.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Autocomplete
          disablePortal
          id="category"
          size="small"
          options={categories}
          renderOption={(props, option) => (
            <li className=" capitalize " {...props} key={option}>
              {option}
            </li>
          )}
          onChange={(event, newValue) => {
            handleCategory(newValue);
          }}
          inputValue={categoryValue}
          onInputChange={(event, newInputValue) => {
            setCategoryValue(newInputValue);
          }}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField className="capitalize" {...params} label="Category" />
          )}
        />
        {/* </div> */}
        <TextField
          id="outlined-basic"
          label="Description of vendor*"
          variant="outlined"
          name={"description"}
          size="small"
          onChange={handleChange}
          value={form.description}
          error={error?.description !== ""}
        />
        {/* <div className="flex flex-col gap-3">
          {staffs.length > 0 && (
            <div className="bg-gray-50 mt-3 rounded-md w-full p-3 flex flex-wrap gap-3">
              {staffs?.map((staff, n) => (
                <span
                  key={n}
                  className="border text-[14px] px-1 flex items-center gap-1"
                >
                  {staff.label}
                  <IoCloseCircleOutline
                    onClick={() => removeStaff(staff)}
                    className="text-[20px] text-red-500 cursor-pointer"
                  />
                </span>
              ))}
            </div>
          )}
          
        </div> */}
      </DepartmentForm>
    </div>
  );
};

export default NewDepartment;
