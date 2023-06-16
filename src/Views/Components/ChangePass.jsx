import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import client from "../Constants/helpers/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function ChangePass() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading } = state.displayState;
  const { showPasswordSuccess, showLoading, hideLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const formValidation = yup.object().shape({
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
    password: yup.string().required("*Required"),
    cfPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("*Required"),
  });
  const handleSubmit = (values) => {
    showLoading();
    client
      .post("/change-password", {
        email: values.email,
        password: values.password,
        password_confirmation: values.cfPassword,
      })
      .then(() => {
        hideLoading();
        toast.success("Successful !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        showPasswordSuccess();
      })
      .catch((err) => {
        hideLoading();
        if (
          err.response.data.message ===
          "Your password must be different from the previous password"
        ) {
          toast.error(
            "Your password must be different from the previous password !",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
            }
          );
        } else {
          toast.error("Failed to change password !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
        }
      });
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        background: "white",
        pb: "3.5rem",
        borderRadius: "1.5rem",
      }}
    >
      <Typography
        sx={{
          color: "#110C0C",
          fontSize: "1.2rem",
          fontWeight: "600",
          width: "100%",
          padding: "2rem",
          pb: "1rem",
          borderBottom: "1px solid gray",
        }}
        variant="h6"
        gutterBottom
        component="div"
      >
        Change Password
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
          cfPassword: "",
          support: "",
        }}
        validationSchema={formValidation}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <Form style={{ background: "white", padding: "0 2rem 1rem 2rem" }}>
            <Field name="email">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  {...field}
                  style={{
                    heignt: "100%",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    marginLeft: "0.1rem",
                    width: "100%",
                    borderRadius: "0.4rem",
                    border: "none",
                    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    WebkitBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    MozBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </Field>
            <Box color="red">
              <ErrorMessage name="email" />
            </Box>
            <Field name="password">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  {...field}
                  style={{
                    heignt: "100%",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    marginLeft: "0.1rem",
                    width: "100%",
                    borderRadius: "0.4rem",
                    border: "none",
                    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    WebkitBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    MozBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </Field>
            <Box color="red">
              <ErrorMessage name="password" />
            </Box>
            <Field name="cfPassword">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input"
                  {...field}
                  style={{
                    heignt: "100%",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    marginLeft: "0.1rem",
                    width: "100%",
                    borderRadius: "0.4rem",
                    border: "none",
                    boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    WebkitBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    MozBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </Field>
            <Box color="red">
              <ErrorMessage name="cfPassword" />
            </Box>
            <Button
              sx={{
                width: "100%",
                padding: "0.5rem",
                mt: "1rem",
              }}
              type="submit"
              variant="contained"
              disabled={loading}
            >
              {loading ? <ClipLoader /> : "SAVE"}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ChangePass;
