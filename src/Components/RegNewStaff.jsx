import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import client from "../helpers/axiosInstance";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function RegNewComapany() {
  const dispatch = useDispatch();
  const { showCreateSuccess, setIsLoading, setNotLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [err, setErr] = useState("");
  const formValidation = yup.object().shape({
    staffName: yup.string().required("*Required"),
    staffId: yup.number().required("*Required"),
    contact: yup.number().required("*Required"),
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
    password: yup.string().required("*Required"),
  });
  const handleSubmit = (values) => {
    console.log(values.photo.files);
    const formData = new FormData()
    formData.append("image", values.photo)
    
    console.log(formData)
    setIsLoading();
    client
      .post("/support-staff", {
        name: values.staffName,
        staff_id: values.staffId,
        phone_number: values.contact,
        email: values.email,
        password: values.password,
        image: values.photo
      })
      .then((res) => {
        console.log(res);
        setNotLoading();
        showCreateSuccess();
      })
      .catch((err) => {
        setNotLoading();
        console.log("error", err);
        setErr(err.response.data.message);
      });
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "648px",
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
        Register A Support Staff
      </Typography>
      <Typography
        sx={{ color: "red", textAlign: "center", fontSize: "0.8rem" }}
      >
        {err}
      </Typography>

      <Formik
        initialValues={{
          staffName: "",
          staffId: "",
          contact: "",
          photo: "",
          password: "",
          email: "",
        }}
        validationSchema={formValidation}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <Form style={{ background: "white", padding: "0 2rem 1rem 2rem" }}>
            <Field name="staffName">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="text"
                  placeholder="Staff Name"
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
              <ErrorMessage name="staffName" />
            </Box>
            <Field name="staffId">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="number"
                  placeholder="Staff ID"
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
              <ErrorMessage name="staffId" />
            </Box>
            <Field name="contact">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="number"
                  placeholder="Contact"
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
              <ErrorMessage name="contact" />
            </Box>
            <Field name="photo">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="file"
                  placeholder="Company logo"
                  className="input"
                  onChange={(e) =>
                    props.setFieldValue("photos", e.target.files[0])
                  }
                  {...field}
                  style={{
                    heignt: "100%",
                    marginTop: "1rem",
                    padding: "0.4rem",
                    marginLeft: "0.1rem",
                    borderRadius: "0.4rem",
                    width: "100%",
                    border: "none",
                    boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.1)",
                    WebkitBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    MozBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </Field>

            <Field name="email">
              {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              }) => (
                <input
                  type="text"
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
                  type="text"
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
            <Button
              sx={{
                width: "100%",
                padding: "0.5rem",
                mt: "1rem",
              }}
              type="submit"
              variant="contained"
            >
              REGISTER
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default RegNewComapany;
