import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ButtonFill } from "../Utilities/Button";
import { staffService } from "../../../Controllers/Services/staff.service";
import { toast } from "react-hot-toast";
import { ticketService } from "../../../Controllers/Services/ticket.service";

const Staff = () => {
  const { setModal, targetStaff, departments, tickets } = useAppContext();

  const { reassignStaffDepartment } = new staffService();
  const { assignTicket } = new ticketService();
  const total =
    targetStaff?.pending_tickets_count + targetStaff?.resolved_tickets_count;
  const p = total > 0 ? (total * 100) / targetStaff?.pending_tickets_count : 0;
  const r = total > 0 ? (total * 100) / targetStaff?.resolved_tickets_count : 0;
  const [departmentId, setDepartmentId] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading_, setLoading_] = useState(false);
  const changeDepartment = async () => {
    if (departmentId !== "") {
      setLoading(true);
      const res = await reassignStaffDepartment(
        {
          user_id: targetStaff?.id,
          department_id: departmentId,
        },
        targetStaff?.uuid
      );
      if (res.message === "success") toast.success("Department updated");
      else toast.success("Failed to update department");
      setLoading(false);
    }
  };
  const assignTicket_ = async () => {
    if (ticketId !== "") {
      setLoading_(true);
      const res = await assignTicket({
        ticket_id: ticketId,
        user_id: targetStaff?.id,
      });
      if (res.message === "success")
        toast.success("Ticket assigned successfully");
      else toast.success("Failed to assign ticket");
      setLoading_(false);
    }
  };
  // console.log(tickets);
  useEffect(() => {
    if (targetStaff?.department) setDepartmentId(targetStaff?.department?.id);
  }, []);
  return (
    <div className="flex flex-col gap-2 h-[400px] overflow-y-auto">
      <div className="flex items-center justify-between ">
        <span className="font-[700] text-[21px]">Staff Profile</span>
        <IoClose onClick={() => setModal(false)} className=" cursor-pointer" />
      </div>

      <hr />

      <div className="flex gap-3">
        <span className="w-[110px] text-[60px] h-[110px] text-[#fff] flex items-center justify-center bg-[--base_color] rounded-[10px]">
          {targetStaff?.first_name[0]}
          {targetStaff?.last_name[0]}
        </span>
        <div className="flex flex-col text-slate-600">
          <span className="text-[21px] font-[700] capitalize">
            {targetStaff?.first_name} {targetStaff?.last_name}
          </span>
          <span>{targetStaff?.email}</span>
          <span>{targetStaff?.phone ? targetStaff?.phone : "- -"}</span>
          <span className="text-[12px] flex flex-wrap">
            {targetStaff?.deparment ? targetStaff?.deparment : "- -"}
          </span>
        </div>
      </div>

      <hr />

      <div className="">
        <div className="flex items-center font-[700] gap-4">
          <div className="flex w-full h-[10px] bg-[#80808015] rounded-[10px] overflow-hidden">
            <span className={`w-[${r}%] h-full bg-green-600`}></span>
            <span className={`w-[${p}%] h-full bg-[#ff5874ec]`}></span>
          </div>
          <span className="whitespace-nowrap">{total} Tickets</span>
        </div>
        <div className="flex gap-5">
          <span className="flex items-center gap-3 font-[700] text-[12px]">
            <span className="h-[10px] w-[40px] bg-green-600"></span> Resolved
            tickets {r}%
          </span>
          <span className="flex items-center gap-3 font-[700] text-[12px]">
            <span className="h-[10px] w-[40px] bg-[#ff5874ec]"></span>Pending
            tickets {p}%
          </span>
        </div>
      </div>
      <hr />

      <div className="flex flex-col gap-2">
        <span className="text-[14px] font-[700]">#Change Department</span>
        <div className="flex items-center gap-5">
          <FormControl className="w-[200px] text-[14px]">
            {/* <InputLabel id="demo-simple-select-label">Deparment</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={departmentId}
              size="small"
              label=""
              onChange={(e) => {
                setDepartmentId(e.target.value);
              }}
            >
              {departments?.data?.map((d, n) => (
                <MenuItem key={n} value={d?.id}>
                  {d?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ButtonFill
            label={"Save"}
            classes={"text-[#fff] w-[100px] h-[40px]"}
            action={changeDepartment}
            loading={loading}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[14px] font-[700]">#Assign New Ticket</span>
        <div className="flex items-center gap-5">
          <FormControl className="w-[200px] text-[14px]">
            <InputLabel id="ticket">Ticket</InputLabel>
            <Select
              labelId="ticket"
              id="ticket"
              value={ticketId}
              size="small"
              label="Ticket"
              onChange={(e) => setTicketId(e.target.value)}
            >
              {tickets?.data?.map((t, n) => (
                <MenuItem key={n} value={t.id}>
                  {t.ticket_id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ButtonFill
            label={"Save"}
            classes={"text-[#fff] w-[100px] h-[40px]"}
            action={assignTicket_}
            loading={loading_}
          />
        </div>
      </div>

      {/* {activePage === "ticket_info" && <TicketInfo />}
      {activePage === "ticket_review" && <ReviewTicket />}
      {activePage === "ticket_thread" && <Thread />} */}
    </div>
  );
};

export default Staff;
