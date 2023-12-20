import { useRef, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { companyService } from "../Services/compnay.service";
import { departmentService } from "../Services/departmentService";
import { toast } from "react-hot-toast";

const useDepartment = () => {
  const { modal, setModal } = useAppContext();
  const { createDepartment } = new departmentService();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
  });
  const [staffs, setStaffs] = useState([]);
  const [error, setError] = useState({
    name: "",
    description: "",
    category: "",
  });
  const [staffValue, setStaffValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [staffInputValue, setStaffInputValue] = useState("");

  const [loading, setLoading] = useState(false);

  const [showDepartment, setShowDepartment] = useState(false);

  const [target, setTarget] = useState({});

  const modalRef = useRef();
  const openModalRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value === "") {
      setError({ ...error, [name]: "Required*" });
    } else {
      setError({ ...error, [name]: "" });
    }
  };

  const handleCategory = (value) => {
    setCategoryValue(value);
    setForm({ ...form, category: value });
    setError({ ...error, category: "" });
  };

  const handleStaff = (value) => {
    setStaffValue(value);
    // setError({...})
    setStaffs([...staffs, value]);
  };

  const removeStaff = (staff) => {
    const newStaffs = staffs.filter((s) => s.id !== staff.id);
    setStaffs(newStaffs);
  };

  const closeModal = () => setModal({ open: false, name: "" });

  const validateForm = () => {
    const { name, description, category } = form;
    const newError = {};
    if (name === "") newError.name = "Required*";
    if (description === "") newError.description = "Required*";
    if (category === "") newError.category = "Required*";
    return newError;
  };

  const handleSubmit = async () => {
    if (Object.keys(validateForm()).length > 0) {
      setError({ ...error, ...validateForm() });
    } else {
      setLoading(true);
      const res = await createDepartment(form);
      if (res.message === "success") {
        toast.success("Department Created");
        closeModal()
      } else toast.error("Failed to create department");
      setLoading(false);
    }
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
