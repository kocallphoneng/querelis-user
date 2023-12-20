import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../Services/authService";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import * as yup from "yup";

const useAuthentication = () => {
  const authContext = useAuthContext();
  const { login, forgotPassword, newPassword } = authService();
  const navigate = useNavigate();

  const initialLoginValues = { email: "", password: "" };
  const initialFgValues = { email: "" };
  const newPasswordValues = { password: "", cf_password: "" };

  const [loading, setLoading] = useState(false);

  const loginValidation = yup.object().shape({
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
    password: yup.string().required("*Required"),
  });
  const fgPasswordValidation = yup.object().shape({
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
  });
  const newPasswordValidation = yup.object().shape({
    password: yup
      .string()
      .min(8, "*Password should be a minimum of 8 characters")
      .required("*Required"),
    cf_password: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("*Required"),
  });

  const handleLogin = async (values) => {
    setLoading(true);
    console.log(values);
    const user = {
      email: values.email,
      password: values.password,
    };

    const res = await login(user);
    if (res.message === "success") {
      console.log(res);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      localStorage.setItem(
        "user_type",
        JSON.stringify(res.data.data.user.user_type)
      );

      setLoading(false);
      navigate("/dashboard");
    } else {
      if (res.data.code === "FIRST_LOGIN") {
        localStorage.setItem("firstTimer", user.email);
        setLoading(false);
        navigate("/createnewpassword");
      } else if (res.data.code === "EXPIRED_PASSWORD") {
        localStorage.setItem("firstTimer", user.email);
        setLoading(false);
        navigate("/compulsory-password-reset");
      } else if (res.data.message === "Invalid credentials") {
        toast.error("Invalid email or password");
        setLoading(false);
      } else {
        toast.error("Something went wrong, please try again.");
        setLoading(false);
      }
    }
  };
  const handleForgotPassword = async (values) => {
    setLoading(true);
    const email = values?.email;
    const res = await forgotPassword(email);
    if (res.message === "success") {
      localStorage.setItem("reset-config", JSON.stringify({ email: email }));
      authContext.setFirstTimer(true);
      navigate("/reset-password");
      setLoading(false);
    } else {
      if (res.data.message === "The selected email is invalid.") {
        toast.error("The selected email is invalid.");
      } else {
        toast.error("Something went wrong, Please try again.");
      }
      setLoading(false);
    }
  };

  const handleNewPassword = async (passwords) => {
    setLoading(true);
    const res = await newPassword(passwords, authContext.isFirtTimer);
    if (res.message === "success") {
      toast.success("Password changed successfully");
      navigate("/login");
    } else {
      if (
        res.data.message ===
        "Your password must be different from the previous password"
      ) {
        toast.error("Password must be different from the previous password");
      } else if (res.data.message === "Invalid OTP") {
        toast.error("Invalid OTP");
        navigate("/reset-password");
      } else {
        toast.error("Something went wrong, please try again.");
      }
    }
  };

  return {
    initialLoginValues,
    initialFgValues,
    newPasswordValues,
    loading,
    loginValidation,
    fgPasswordValidation,
    newPasswordValidation,
    handleLogin,
    handleForgotPassword,
    handleNewPassword,
  };
};

export default useAuthentication;
