import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { authService } from "../Services/auth/Service";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import * as yup from "yup";

const useDepartment = () => {
  const [form, setForm] = useState({ name: "", staffs: [] });
  const [staffs, setStaffs] = useState([]);
  const [select, setSelect] = useState("");
  const [error, setError] = useState({ name: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "name" && value === "") {
      setError({ ...error, [name]: "Required*" });
    } else {
      setError({ ...error, [name]: "" });
    }
  };
  const handleStaff = (e) => {
    setStaffs([
      ...staffs,
      {
        name: e.label,
      },
    ]);
  };

  const handleSubmit = () => {};
  return {
    loading,
    form,
    error,
    handleSubmit,
    handleChange,
    staffs,
    handleStaff,
  };
};

export default useDepartment;
