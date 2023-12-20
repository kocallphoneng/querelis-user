import React from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Auth from "../UI/Layouts/Auth";
import AuthForm from "../UI/Forms/AuthForm";
import AuthInput from "../UI/Utilities/Inputs/AuthInput";
import PasswordInput from "../UI/Utilities/Inputs/PasswordInput";
import useAuthentication from "../../Controllers/Hooks/useAuthentication";

function Login() {
  const { initialLoginValues, loading, loginValidation, handleLogin } =
    useAuthentication();

  return (
    <Auth title={"Login"}>
      <AuthForm
        initialValues={initialLoginValues}
        validator={loginValidation}
        handleSubmit={handleLogin}
        loading={loading}
        link={true}
      >
        <div className="flex flex-col gap-2 ">
          <AuthInput
            Icon={MailOutlineOutlinedIcon}
            name="email"
            type="email"
            placeholder={"Email"}
          />
          <PasswordInput name="password" type="text" placeholder={"Password"} />
        </div>
      </AuthForm>
    </Auth>
  );
}

export default Login;
