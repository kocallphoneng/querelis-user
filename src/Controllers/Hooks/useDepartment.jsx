import { useRef, useState } from "react";
import { useAppContext } from "../Context/AppContext";

const useDepartment = () => {
  const { modal, setModal } = useAppContext();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    staffs: "",
  });
  const [staffs, setStaffs] = useState([]);
  const [error, setError] = useState({ name: "" });
  const [staffValue, setStaffValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [staffInputValue, setStaffInputValue] = useState("");

  const [loading, setLoading] = useState(false);

  const [showDepartment, setShowDepartment] = useState(false);

  const [target, setTarget] = useState({});

  // const

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

  const handleCategory = (value) => {
    setCategoryValue(value);
    setForm({ ...form, category: value });
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
    console.log(form);
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
    handleCategory,
    setTarget,
    categoryValue,
    setCategoryValue,
  };
};

export default useDepartment;
