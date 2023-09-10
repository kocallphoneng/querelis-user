import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Form from "../Forms/StaffForm";
import { TextField } from "@mui/material";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const NewStaff = () => {
  const { setModal, targetStaff } = useAppContext();
  const [form, setForm] = useState({
    completed_request: 0,
    deparment: [""],
    email: "",
    id: "",
    image: "",
    label: "",
    pending_request: 0,
    phone: "",
    total_requests: 0,
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const departments = JSON.parse(localStorage.departments);
  const handleSubmit = () => {};
  const [open, setOpen] = useState(false);
  // console.log(JSON.parse(localStorage.staffs));
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-[22px] font-[700]">Create New Staff</span>
        <IoClose
          onClick={() => setModal(false, "")}
          className="text-[21px] cursor-pointer hover:text-red-500 "
        />
      </div>
      <Form loading={loading} handleSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Full Name*"
          variant="outlined"
          name={"name"}
          size="small"
          onChange={handleChange}
          value={form.label}
          error={false}
        />
        <TextField
          id="outlined-basic"
          label="Email*"
          variant="outlined"
          name={"email"}
          size="small"
          onChange={handleChange}
          value={form.email}
          error={false}
        />
        <div
          className="border relative h-[35px]
       "
        >
          {" "}
          Select Department
          {open &&
            departments.map((d, n) => (
              <span key={n} value={d.name}>
                {d.name}
              </span>
            ))}
          <select name="" id=""></select>
        </div>
      </Form>
    </div>
  );
};

export default NewStaff;
