import React from "react";
import useAuthentication from "../../Controllers/Hooks/useAuthentication";
import PasswordInput from "../UI/Utilities/Inputs/PasswordInput";
import Auth from "../UI/Layouts/Auth";
import AuthForm from "../UI/Forms/AuthForm";
import PreviewLayout from "../UI/Layouts/PreviewLayout";

const ChangePassword = () => {
  const {
    newPasswordValues,
    loading,
    newPasswordValidation,
    handleNewPassword,
  } = useAuthentication();
  return (
    <div className="p-5">
      <PreviewLayout
        title={"Change Password"}
        helper={
          "Your new password must be different from the previous password"
        }
      >
        <div className="max-w-[350px] m-auto pb-5">
          <AuthForm
            initialValues={newPasswordValues}
            validator={newPasswordValidation}
            handleSubmit={handleNewPassword}
            btn={"SUBMIT"}
            loading={loading}
          >
            <div className="flex flex-col gap-1 ">
              <PasswordInput name="old_password" placeholder={"Old Password"} />
              <PasswordInput name="password" placeholder={"New Password"} />
              <PasswordInput
                name="cf_Password"
                placeholder={"Confirm Password"}
              />
            </div>
          </AuthForm>
        </div>
      </PreviewLayout>
    </div>
  );
};

export default ChangePassword;
