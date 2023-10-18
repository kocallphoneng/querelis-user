import React, { useState } from "react";
import * as yup from "yup";
import Auth from "../UI/Layouts/Auth";
import AuthForm from "../UI/Forms/AuthForm";
import AuthInput from "../UI/Utilities/Inputs/AuthInput";
import PasswordInput from "../UI/Utilities/Inputs/PasswordInput";
import { authService } from "../../Controllers/Services/authService";
import { useNavigate } from "react-router-dom";

function CompulsoryPassword() {
  const { newPassword } = authService();
  const navigate = useNavigate();
  const initialValues = {
    password: "",
    cfPassword: "",
  };
  const [loading, setLoading] = useState(false);
  const formValidation = yup.object().shape({
    password: yup.string().required("*Required"),
    cfPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("*Required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    const res = await newPassword(values, true);
    if (res.message === "success") {
      localStorage.clear();
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      localStorage.setItem("user_type", res.data.user.user_type);
      navigate("/dashboard");
    }
    setLoading(false);
  };

  return (
    <Auth
      title={"Compulsory Password"}
      helper={
        " Your password has expired. Please enter a new password before login."
      }
    >
      <AuthForm
        initialValues={initialValues}
        validator={formValidation}
        handleSubmit={handleSubmit}
        loading={loading}
      >
        <PasswordInput name={"password"} placeholder={"New Password"} />
        <PasswordInput name={"cfPassword"} placeholder={"Confirm Password"} />
      </AuthForm>
    </Auth>
  );
}

export default CompulsoryPassword;
