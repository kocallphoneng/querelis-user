import React from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Auth from "../UI/Layouts/Auth";
import AuthForm from "../UI/Forms/AuthForm";
import AuthInput from "../UI/Utilities/Inputs/AuthInput";
import useAuthentication from "../../Controllers/Hooks/useAuthentication";

function ForgotPassword() {
  const {
    initialFgValues,
    loading,
    fgPasswordValidation,
    handleForgotPassword,
  } = useAuthentication();
  return (
    <Auth
      title={"Forgot Password"}
      helper={
        "Enter the email that is associated with your account and we’ll send an email having your OTP to reset your password."
      }
    >
      <AuthForm
        initialValues={initialFgValues}
        validator={fgPasswordValidation}
        handleSubmit={handleForgotPassword}
        btn={"SEND"}
        loading={loading}
      >
        <div className="flex flex-col gap-3">
          <AuthInput
            Icon={MailOutlineOutlinedIcon}
            name="email"
            type="email"
            placeholder={"Email"}
          />
        </div>
      </AuthForm>
    </Auth>
  );
}

export default ForgotPassword;
