import React from "react";
import { staffs } from "../../../Constants/testData";
import {
  Autocomplete,
  TextField,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const ReviewTicket = () => {
  const { setModal } = useAppContext();
  return (
    <div className="py-5 flex flex-col gap-4">
      <div className="grid grid-cols-12 items-center gap-4">
        <span className=" col-span-3 whitespace-nowrap text-[14px] font-[700]">
          Reassign Ticket
        </span>
        <Autocomplete
          disablePortal
          id="staffs"
          size="small"
          className="col-span-9"
          options={staffs}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.label}
            </li>
          )}
          onChange={(event, newValue) => {
            // handleStaff(newValue);
          }}
          inputValue={""}
          onInputChange={(event, newInputValue) => {
            // setStaffInputValue(newInputValue);
          }}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Enter staff name" />
          )}
        />
      </div>
      <div className="grid grid-cols-12 items-center gap-4">
        <span className="col-span-3 whitespace-nowrap text-[14px] font-[700]">
          Update status
        </span>
        <FormControl className="col-span-9">
          <Select
            value={""}
            // onChange={"}
            size="small"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Completed</MenuItem>
            <MenuItem value={10}>Pending</MenuItem>
            <MenuItem value={20}>Abandoned</MenuItem>
            <MenuItem value={30}>Rejected</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="grid grid-cols-12  gap-4">
        <span className="col-span-3 whitespace-nowrap text-[14px] font-[700]">
          Add Comment
        </span>
        <FormControl className="col-span-9">
          <TextField
            size="small"
            id="outlined-multiline-flexible"
            label="Enter the reasons for your actions"
            multiline
            maxRows={4}
          />
        </FormControl>
      </div>
      <div className="grid grid-cols-6 gap-5">
        <span onClick={()=> setModal(false)} className="col-span-3 bg-[#ff1c1c91] w-full flex justify-center items-center h-[45px] rounded-md text-white ">
          Cancel
        </span>
        <span onClick={()=> setModal(false)} className="col-span-3 bg-[#0257E6] w-full flex justify-center items-center h-[45px] rounded-md text-white ">
          Save
        </span>
      </div>
    </div>
  );
};

export default ReviewTicket;
