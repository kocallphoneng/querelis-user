import React from "react";
import Auth from "../UI/Layouts/Auth";
import AuthForm from "../UI/Forms/AuthForm";
import PasswordInput from "../UI/Utilities/Inputs/PasswordInput";
import useAuthentication from "../../Controllers/Hooks/useAuthentication";

function NewPassword() {
  const {
    newPasswordValues,
    loading,
    newPasswordValidation,
    handleNewPassword,
  } = useAuthentication();

  return (
    <Auth
      title={"Create New Password"}
      helper={"Your new password must be different from the previous password"}
    >
      <AuthForm
        initialValues={newPasswordValues}
        validator={newPasswordValidation}
        handleSubmit={handleNewPassword}
        btn={"SUBMIT"}
        loading={loading}
      >
        <div className="flex flex-col gap-2 ">
          <PasswordInput name="password" placeholder={"Password"} />
          <PasswordInput name="cf_Password" placeholder={"Confirm Password"} />
        </div>
      </AuthForm>
    </Auth>
  );
}

export default NewPassword;
