import React, { useEffect, useState } from "react";
import { staffs } from "../../../Constants/testData";
import {
  Autocomplete,
  TextField,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { ButtonFill } from "../../UI/Utilities/Button";
import { staffService } from "../../../Controllers/Services/staff.service";
import { ticketService } from "../../../Controllers/Services/ticket.service";
import { toast } from "react-hot-toast";

const ReviewTicket = ({ ticket }) => {
  const { setModal, staffs } = useAppContext();
  const [status, setStatus] = useState("");
  const [staff, setStaff] = useState("");
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading_, setLoading_] = useState(false);
  const [loading__, setLoading__] = useState(false);
  const { assignTicket, postComment, updateTicketStatus } = new ticketService();
  const formData = new FormData();
  const changeStatus = async () => {
    if (status !== "" && status !== ticket?.status) {
      setLoading(true);
      const res = await updateTicketStatus(ticket?.uuid, {
        status: status.toLocaleUpperCase(),
      });
      if (res.message === "success") toast.success("Status updated");
      else toast.error("Failed update status");
      setLoading(false);
    }
  };
  const assignTicket_ = async () => {
    if (staff !== "") {
      setLoading_(true);
      const res = await assignTicket({
        ticket_id: ticket?.id,
        user_id: staff,
      });
      if (res.message === "success")
        toast.success("Ticket assigned successfully");
      else toast.error("Failed assign ticket");
      setLoading_(false);
    }
  };
  const addTicketComment = async () => {
    if (comment !== "") {
      setLoading__(true);
      formData.append("comment", comment);
      for (let i = 0; i < images.length; i++) {
        formData.append(`proof_${i + 1}`, images[i]);
      }
      const res = await postComment(ticket?.uuid, formData);
      if (res.message === "success") toast.success("Message attached");
      else toast.error("Failed assign ticket");
      setLoading_(false);
    }
  };
  useEffect(() => {
    setStatus(ticket?.status);
    ticket?.assigned_to_id && setStaff(ticket?.assigned_to_id);
  }, []);
  return (
    <div className="border-l px-3 flex flex-col gap-4 relative h-full">
      <div className=" flex flex-col gap-2 ">
        <span className=" col-span-3 text-gray-600 whitespace-nowrap text-[12px] font-[700]">
          Reassign Ticket
        </span>
        <div className="grid grid-cols-12 items-center gap-4">
          <FormControl className="col-span-8">
            <Select
              value={staff}
              onChange={(e) => setStaff(e.target.value)}
              size="small"
              id="staff"
              className="w-full"
            >
              {staffs?.data?.map((option) => (
                <MenuItem className=" capitalize" value={option?.id}>
                  {option.first_name + " " + option.last_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ButtonFill
            label={"save"}
            classes={"w-[120px] col-span-4 text-[#fff] h-[40px]"}
            action={assignTicket_}
            loading={loading_}
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <span className="col-span-3 text-gray-600 whitespace-nowrap text-[12px] font-[700]">
          Update status
        </span>
        <div className="grid grid-cols-12 items-center gap-4">
          <FormControl className="col-span-8">
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              size="small"
            >
              <MenuItem value="resolved">Resolved</MenuItem>
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"wip"}>Wip</MenuItem>
              <MenuItem value={"rejected"}>Rejected</MenuItem>
              {/* <MenuItem value={"escalated"}>Escalated</MenuItem> */}
            </Select>
          </FormControl>
          <ButtonFill
            label={"save"}
            classes={"w-[120px] col-span-4 text-[#fff] h-[40px]"}
            action={changeStatus}
            loading={loading}
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 ">
        <span className="col-span-3 text-gray-600 whitespace-nowrap text-[12px] font-[700]">
          Add Comment
        </span>
        <div className="grid grid-cols-12 items-center gap-4">
          <input
            onChange={(e) => setImages(e.target.files)}
            className="col-span-8"
            type="file"
            id="files"
            name="files"
            multiple
          />
          <FormControl className="col-span-8">
            <TextField
              multiline
              maxRows={4}
              size="small"
              id="outlined-multiline-flexible"
              label="Enter the reasons for your actions"
              onChange={(e) => setComment(e.target.value)}
            />
          </FormControl>
          <ButtonFill
            label={"save"}
            classes={"w-[120px] col-span-4 text-[#fff] h-[40px]"}
            action={addTicketComment}
            loading={loading__}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewTicket;
