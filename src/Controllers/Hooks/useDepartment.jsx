import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { companyService } from "../Services/compnay.service";
import { departmentService } from "../Services/departmentService";
import { toast } from "react-hot-toast";

const useDepartment = () => {
  const { modal, setModal } = useAppContext();
  const { getUnits, createVendor } = new departmentService();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    unit_id: "",
  });
  const [staffs, setStaffs] = useState([]);
  const [error, setError] = useState({
    name: "",
    description: "",
    category: "",
    unit_id: "",
  });
  const [staffValue, setStaffValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [unitValue, setUnitValue] = useState({ name: "", id: "" });
  const [staffInputValue, setStaffInputValue] = useState("");

  const [loading, setLoading] = useState(false);

  const [showDepartment, setShowDepartment] = useState(false);

  const [target, setTarget] = useState({});

  const [units, setUnits] = useState([]);

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

  const handleUnit = (value) => {
    // console.log(value);
    setUnitValue(value);
    setForm({ ...form, unit_id: value.id });
    setError({ ...error, unit_id: "" });
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
    const { name, description, category, unit_id } = form;
    const newError = {};
    if (name === "") newError.name = "Required*";
    if (description === "") newError.description = "Required*";
    if (category === "") newError.category = "Required*";
    if (unit_id === "") newError.unit_id = "Required*";
    return newError;
  };

  const handleSubmit = async () => {
    if (Object.keys(validateForm()).length > 0) {
      setError({ ...error, ...validateForm() });
    } else {
      setLoading(true);
      const res = await createVendor(form);
      if (res.message === "success") {
        // console.log(res.data)
        toast.success("Vendor Created");

        closeModal();
      } else toast.error("Failed to create vendor");
      setLoading(false);
    }
  };

  const loadUnits = async () => {
    const res = await getUnits();
    // console.log(res)
    setUnits(res.data.data.unit);
  };

  useEffect(() => {
    loadUnits();
  }, []);
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
    units,
    unitValue,
    handleUnit,
    setUnitValue,
  };
};

export default useDepartment;
