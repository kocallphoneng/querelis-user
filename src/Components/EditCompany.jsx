import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import client from "../helpers/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function EditCompany() {
  const state = useSelector((state) => state);
  const { companies } = state.user;

  const dispatch = useDispatch();
  const { showEditSuccess, hideEditForm, setIsLoading, setNotLoading } =
    bindActionCreators(actionCreators, dispatch);
  const formValidation = yup.object().shape({
    companyName: yup.string().required("*Required"),
    address: yup.string().required("*Required"),
    contact: yup.number().required("*Required"),
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
    support: yup.number().required("*Required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
    setIsLoading();
    client
      .post("/companies", {
        name: values.companyName,
        address: values.address,
        phone_number: values.contact,
        email: values.email,
        company_representative: values.rep,
        logo: values.photo,
        allowed_support_staff: values.support,
        is_active: 1,
      })
      .then((res) => {
        console.log(res);
        setNotLoading();
        showEditSuccess();
      })
      .catch((err) => {
        setNotLoading();
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "99",
        background: "#110c0c75",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        left: "0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          maxWidth: "550px",
          background: "white",
          pb: "3.5rem",
          borderRadius: "1.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "2rem",
            pb: "1rem",
            borderBottom: "1px solid gray",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#110C0C",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Edit Company
          </Typography>
          <CloseOutlinedIcon
            onClick={() => hideEditForm()}
            sx={{ fontSize: "2rem", fontWeight: "900" }}
          />
        </Box>
        <Formik
          initialValues={{
            companyName: "",
            address: "",
            email: "",
            photo: "",
            rep: "",
            support: "",
          }}
          validationSchema={formValidation}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => (
            <Form style={{ background: "white", padding: "0 2rem 1rem 2rem" }}>
              <Field name="companyName">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                }) => (
                  <select
                    type="text"
                    placeholder="Name"
                    className="input"
                    {...field}
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      marginTop: "1rem",
                      padding: "0.5rem",
                      marginLeft: "0.1rem",
                      borderRadius: "0.4rem",
                      border: "none",
                      boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                      WebkitBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                      MozBoxShadow: "0px 0px 0px 1px rgba(0,0,0,0.2)",
                    }}
                  >
                    <option
                      style={{
                        padding: "0.7rem",
                      }}
                    >
                      Select company
                    </option>
                    {companies.map((company) => (
                      <option
                        value={company.name}
                        key={company.id}
                        style={{
                          width: "100px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {company.name}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <Box color="red">
                <ErrorMessage name="companyName" />
              </Box>
              <Field name="address">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                }) => (
                  <input
                    type="text"
                    placeholder="Address"
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
                <ErrorMessage name="address" />
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
              <Field name="rep">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                }) => (
                  <input
                    type="text"
                    placeholder="Company Representative"
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
                <ErrorMessage name="rep" />
              </Box>
              <Field name="support">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                }) => (
                  <input
                    type="number"
                    placeholder="Total Allowed Support"
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
                <ErrorMessage name="support" />
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
                SAVE
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default EditCompany;
