import { useRef, useState } from "react";
import { useAppContext } from "../Context/AppContext";

const useDepartment = () => {
  const { modal, setModal } = useAppContext();
  const [form, setForm] = useState({ name: "", staffs: [] });
  const [staffs, setStaffs] = useState([]);
  const [error, setError] = useState({ name: "" });
  const [staffValue, setStaffValue] = useState("");
  const [staffInputValue, setStaffInputValue] = useState("");

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = () => {};

  window.addEventListener("click", (e) => {
    if (
      modal.open &&
      !modalRef.current?.contains(e.target) &&
      !openModalRef.current?.contains(e.target)
    )
      setModal({ open: false, name: "" });
  });

  return {
    loading,
    form,
    error,
    staffValue,
    setStaffValue,
    handleSubmit,
    handleChange,
    staffs,
    staffInputValue,
    setStaffInputValue,
    handleStaff,
    modalRef,
    openModalRef,
  };
};

export default useDepartment;
