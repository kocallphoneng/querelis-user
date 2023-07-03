import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { authService } from "../Services/auth/Service";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import * as yup from "yup";

const useDepartment = () => {
  const [form, setForm] = useState({ name: "", staffs: [] });
  const [error, setError] = useState({ name: "" });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setForm({ ...form, [name]: value });
    } else if (name === "staffs") {
      setForm({ ...form, [name]: form.staffs.push(value) });
    }
    if (name === "name" && value === "") {
      setError({ ...error, [name]: "Required*" });
    } else {
      setError({ ...error, [name]: "" });
    }
  };

  const handleSubmit = () => {};
  return {
    loading,
    form,
    error,
    handleSubmit,
    handleChange
  };
};

export default useDepartment;
