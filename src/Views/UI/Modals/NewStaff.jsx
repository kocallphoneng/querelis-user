import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Form from "../Forms/StaffForm";
import {
  Autocomplete,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { staffService } from "../../../Controllers/Services/staff.service";
import { toast } from "react-hot-toast";

const NewStaff = () => {
  const { setModal, targetStaff, departments } = useAppContext();
  const { createStaff } = new staffService();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_type: "",
    department_id: "",
    department_name: "",
  });
  const [error, setError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    user_type: "",
    department: "",
  });
  const [loading, setLoading] = useState(false);

  const [roleValue, setRoleValue] = useState("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    if (value === "") setError({ ...error, [name]: "Required*" });
    else if (name === "email" && !validateEmail(value))
      setError({ ...error, [name]: "Invalid Email*" });
    else setError({ ...error, [name]: "" });
  };

  const handleRole = (value) => {
    setRoleValue(value);
    setForm({ ...form, user_type: value });
    setError({ ...error, user_type: "" });
  };
  const validateForm = () => {
    const { first_name, last_name, email, user_type, department_id } = form;
    const newErrors = {};
    if (first_name === "") newErrors.first_name = "Required*";
    if (last_name === "") newErrors.last_name = "Required*";
    if (email === "") newErrors.email = "Required*";
    else if (email !== "" && !validateEmail(email))
      newErrors.email = "Invalid Email*";
    if (user_type === "") newErrors.role = "Required*";
    if (department_id === "") newErrors.department_id = "Required*";
    return newErrors;
  };
  const handleSubmit = async () => {
    console.log(form);
    if (Object.keys(validateForm()).length > 0) {
      console.log("test");
      setError({ ...error, ...validateForm() });
    } else {
      setLoading(true);
      const res = await createStaff(form);
      if (res.message === "success") {
        toast.success("Staff has been created");
        setModal(false, "");
      } else {
        toast.error("Failed to create staff");
      }
      setLoading(false);
    }
  };
  // const categories = ["call", "data", "sms", "enterprise", "general"];
  const roles = ["admin", "support"];
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
          label="First Name*"
          variant="outlined"
          name={"first_name"}
          size="small"
          onChange={handleChange}
          value={form.first_name}
          error={error.first_name !== ""}
        />
        <TextField
          id="outlined-basic"
          label="Last Name*"
          variant="outlined"
          name={"last_name"}
          size="small"
          onChange={handleChange}
          value={form.last_name}
          error={error.last_name !== ""}
        />
        <TextField
          id="outlined-basic"
          label="Email*"
          variant="outlined"
          name={"email"}
          size="small"
          onChange={handleChange}
          value={form.email}
          error={error.email !== ""}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User Role*</InputLabel>
          <Select
            labelId="role"
            id="role"
            value={form.user_type}
            name="user_type"
            size="small"
            label="User Role*"
            onChange={handleChange}
          >
            {roles?.map((d, n) => (
              <MenuItem key={n} value={d}>
                {d}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Department*</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.department_id}
            name="department_id"
            size="small"
            label="Department*"
            onChange={handleChange}
          >
            {departments?.data?.map((d, n) => (
              <MenuItem key={n} value={d.id}>
                {d.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Form>
    </div>
  );
};

export default NewStaff;
