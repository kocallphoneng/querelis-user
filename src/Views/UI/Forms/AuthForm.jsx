import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { ButtonFill } from "../Utilities/Button";

const AuthForm = ({
  initialValues,
  validator,
  handleSubmit,
  children,
  loading,
  link,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validator}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form className=" flex flex-col gap-5">
          {children}
          {link && (
            <Link
              to="/forgot-password"
              className="text-[#C4C4C4] text-end text-[16px] font-[500] cursor-pointer"
            >
              Change Password
            </Link>
          )}
          <ButtonFill
            label={"Submit"}
            loading={loading}
            action={() => {}}
            classes={"h-[45px] text-[#fff]"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
