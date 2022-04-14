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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function RegNewComapany() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { loading } = state.displayState;
  const dispatch = useDispatch();
  const {
    showCreateSuccess,
    showLoading,
    hideLoading,
    getAllStaffs,
    getAllRequests,
  } = bindActionCreators(actionCreators, dispatch);
  const formValidation = yup.object().shape({
    staffName: yup.string().required("*Required"),
    staffId: yup.number().required("*Required"),
    contact: yup.number().required("*Required"),
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
    password: yup.string().required("*Required"),
  });
  const restore = () => {
    if (!localStorage.token || localStorage.user !== "company") {
      navigate("/login");
    }
    const token = localStorage.getItem("token");
    client.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
      const fetchData = async () => {
        const staffRes = await client.get("/support-staff");
        const supReq = await client.get("/support-requests");
        getAllStaffs(staffRes.data.data);
        getAllRequests(supReq.data.data);
        toast.success("Successful !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      };
      fetchData();
    } catch (err) {
      const message = err.response.data.message;
      if (message === "Unauthenticated" || message === "Unauthorized") {
        navigate("/login");
      } else {
        toast.error("Couldn't load data, please refresh !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    }
  };
  const handleSubmit = (values) => {
    console.log(values.photo.files);
    const formData = new FormData();
    formData.append("image", values.photo);

    showLoading();
    client
      .post("/support-staff", {
        name: values.staffName,
        staff_id: values.staffId,
        phone_number: values.contact,
        email: values.email,
        password: values.password,
        image: values.photo,
      })
      .then((res) => {
        console.log(res);
        hideLoading();
        restore();
        showCreateSuccess();
      })
      .catch((err) => {
        hideLoading();
        if (err.response.data.message === "The email has already been taken.") {
          toast.error("Email is already taken !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
        } else {
          toast.error("Couldn't load data, please refresh !", {
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
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
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
              disabled={loading}
            >
              {loading ? <ClipLoader /> : "REGISTER"}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default RegNewComapany;
