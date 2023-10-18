import React from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Staff = () => {
  const { setModal, targetStaff } = useAppContext();
  const [activePage, setActivePage] = useState("profile");
  const departments = JSON.parse(localStorage.departments);
  console.log(departments);
  return (
    <div className="flex flex-col gap-2 h-[400px] overflow-y-auto">
      <div className="flex items-center justify-between ">
        <span className="font-[700] text-[21px]">Staff Profile</span>
        <IoClose onClick={() => setModal(false)} className=" cursor-pointer" />
      </div>

      <hr />

      <div className="flex gap-3">
        <span className="w-[110px] text-[60px] h-[110px] text-[#fff] flex items-center justify-center bg-[--base_color] rounded-[10px]">
          {targetStaff?.label[0]}
        </span>
        <div className="flex flex-col text-slate-600">
          <span className="text-[21px] font-[700]">{targetStaff.label}</span>
          <span>{targetStaff.email}</span>
          <span>{targetStaff.phone}</span>
          <span className="text-[12px] flex flex-wrap">
            {targetStaff?.deparment[0]}
          </span>
        </div>
      </div>

      <hr />

      <div className="">
        <div className="flex items-center font-[700] gap-4">
          <div className="flex w-full h-[10px] rounded-[10px] overflow-hidden">
            <span className="w-[30%] h-full bg-green-600"></span>
            <span className="w-[70%] h-full bg-[#ff5874ec]"></span>
          </div>
          <span className="whitespace-nowrap">
            {targetStaff.completed_request + targetStaff.pending_request}{" "}
            Tickets
          </span>
        </div>
        <div className="flex gap-5">
          <span className="flex items-center gap-3 font-[700] text-[12px]">
            <span className="h-[10px] w-[40px] bg-green-600"></span> Resolved
            tickets 30%
          </span>
          <span className="flex items-center gap-3 font-[700] text-[12px]">
            <span className="h-[10px] w-[40px] bg-[#ff5874ec]"></span> Escalated
            tickets 30%
          </span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <span className="text-[14px] font-[700]">#Change Department</span>
        <FormControl className="w-[200px] text-[14px]">
          {/* <InputLabel id="demo-simple-select-label">Deparment</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            size="small"
            label=""
            // onChange={handleChange}
          >
            {departments.map((d, n) => (
              <MenuItem key={n} value={d?.name}>
                {d?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[14px] font-[700]">#Assign New Ticket</span>
        <FormControl className="w-[200px] text-[14px]">
          {/* <InputLabel id="demo-simple-select-label">Deparment</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            size="small"
            label=""
            // onChange={handleChange}
          >
            <MenuItem value={10}>Voice Service</MenuItem>
            {/* <MenuItem value={20}>Data Service</MenuItem> */}
            {/* <MenuItem value={30}>SOS</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* {activePage === "ticket_info" && <TicketInfo />}
      {activePage === "ticket_review" && <ReviewTicket />}
      {activePage === "ticket_thread" && <Thread />} */}
    </div>
  );
};

export default Staff;
