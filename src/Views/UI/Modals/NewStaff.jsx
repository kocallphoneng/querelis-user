import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Form from "../Forms/StaffForm";
import { Autocomplete, TextField } from "@mui/material";
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
    category: "",
    pending_request: 0,
    phone: "",
    total_requests: 0,
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");
  const [roleValue, setRoleValue] = useState("");
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const departments = JSON.parse(localStorage.departments);
  const handleSubmit = () => {};
  const [open, setOpen] = useState(false);
  // console.log(JSON.parse(localStorage.staffs));

  const handleCategory = (value) => {
    setCategoryValue(value);
    setForm({ ...form, category: value });
  };
  const handleRole = (value) => {
    setRoleValue(value);
    setForm({ ...form, role: value });
  };
  const categories = ["call", "data", "sms", "enterprise", "general"];
  const roles = ["company", "staff"];
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
        <Autocomplete
          disablePortal
          id="category"
          size="small"
          options={categories}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
          onChange={(event, newValue) => {
            handleRole(newValue);
          }}
          inputValue={categoryValue}
          onInputChange={(event, newInputValue) => {
            setCategoryValue(newInputValue);
          }}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <Autocomplete
          disablePortal
          id="role"
          size="small"
          options={roles}
          renderOption={(props, option) => (
            <li className="capitalize" {...props} key={option}>
              {option}
            </li>
          )}
          onChange={(event, newValue) => {
            handleRole(newValue);
          }}
          inputValue={roleValue}
          onInputChange={(event, newInputValue) => {
            setRoleValue(newInputValue);
          }}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Role" />}
        />
      </Form>
    </div>
  );
};

export default NewStaff;
