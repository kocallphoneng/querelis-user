import React from "react";
import { Formik, Form } from "formik";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const AuthForm = ({
  initialValues,
  validator,
  handleSubmit,
  children,
  btn,
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
        <Form className=" flex flex-col gap-3">
          {children}
          <Button className="h-[45px] w-full" variant="contained" type="submit">
            {loading ? <ClipLoader size={24} color={"#110C0C"} loading /> : btn}
          </Button>
          {link && (
            <Link
              to="/forgot-password"
              className="text-[#C4C4C4] mt-5 text-center text-[16px] font-[500] cursor-pointer"
            >
              Change Password
            </Link>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
