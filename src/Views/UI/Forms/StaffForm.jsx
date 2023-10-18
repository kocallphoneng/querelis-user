import React from "react";
import { Formik, Form } from "formik";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ButtonFill } from "../Utilities/Button";

const StaffForm = ({
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
        <Form className=" flex flex-col gap-3">
          {children}
          <ButtonFill
            classes="h-[45px] text-[#fff] w-full"
            label={"Submit"}
            action={handleSubmit}
            loading={loading}
          />
        </Form>
      )}
    </Formik>
  );
};

export default StaffForm;
