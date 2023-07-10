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
    <div className="border-l px-3 flex flex-col gap-4 relative h-full">
      <div className=" flex flex-col gap-2 ">
        <span className=" col-span-3 text-gray-600 whitespace-nowrap text-[12px] font-[700]">
          Reassign Ticket
        </span>
        <Autocomplete
          disablePortal
          id="staffs"
          size="small"
          className="col-span-9 text-[13px]"
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
            <TextField
              {...params}
              label="Enter staff name"
              className="text-[13px]"
            />
          )}
        />
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <span className="col-span-3 text-gray-600 whitespace-nowrap text-[12px] font-[700]">
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
      <hr />
      <div className="flex flex-col gap-2 ">
        <span className="col-span-3 text-gray-600 whitespace-nowrap text-[12px] font-[700]">
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

      <span
        onClick={() => setModal(false)}
        className=" bg-blue-600 min-w-[80px] flex justify-center items-center h-[40px] rounded-md text-[#fff] cursor-pointer "
      >
        Save
      </span>
    </div>
  );
};

export default ReviewTicket;
