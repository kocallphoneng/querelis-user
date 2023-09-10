import { useRef, useState } from "react";
import { useAppContext } from "../Context/AppContext";

const useDepartment = () => {
  const { modal, setModal } = useAppContext();
  const [form, setForm] = useState({ name: "", description: "", staffs: "" });
  const [staffs, setStaffs] = useState([]);
  const [error, setError] = useState({ name: "" });
  const [staffValue, setStaffValue] = useState("");
  const [staffInputValue, setStaffInputValue] = useState("");

  const [loading, setLoading] = useState(false);

  const [showDepartment, setShowDepartment] = useState(false);

  const [target, setTarget] = useState({});

  const departments = JSON.parse(localStorage.departments);

  const modalRef = useRef();
  const openModalRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "name" && value === "") {
      setError({ ...error, [name]: "Required*" });
    } else {
      setError({ ...error, [name]: "" });
    }
  };

  const handleStaff = (value) => {
    setStaffValue(value);

    setStaffs([...staffs, value]);
  };

  const removeStaff = (staff) => {
    const newStaffs = staffs.filter((s) => s.id !== staff.id);
    setStaffs(newStaffs);
  };

  const closeModal = () => setModal({ open: false, name: "" });

  const handleSubmit = () => {
    setLoading(true);
    const newArr = [...departments];
    newArr.push({
      completed_requests: 0,
      description: form.description,
      name: form.name,
      pending_requests: 0,
      staffs: form.staffs,
    });
    // console.log(newArr);
    localStorage.setItem("departments", JSON.stringify(newArr));
    setLoading(false);
  };
  // console.log(departments);
  return {
    loading,
    form,
    error,
    staffValue,
    staffs,
    staffInputValue,
    modalRef,
    openModalRef,
    showDepartment,
    target,
    setStaffValue,
    handleSubmit,
    handleChange,
    setStaffInputValue,
    handleStaff,
    removeStaff,
    closeModal,
    setShowDepartment,
    setTarget,
  };
};

export default useDepartment;
