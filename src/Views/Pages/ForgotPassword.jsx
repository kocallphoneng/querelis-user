import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import client from "../Constants/helpers/axiosInstance";
import ClipLoader from "../Components/Spinners/ClipSpinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const { setUserEmail } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (values) => {
    setLoading(true);
    client
      .post("/get-otp", {
        email: values.email,
      })
      .then((res) => {
        setLoading(false);
        setUserEmail(values.email);
        navigate("/resetPassword");
      })
      .catch((err) => {
        setLoading(false);
        err.response.data.message === "The selected email is invalid."
          ? toast.error("Email not found !", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
            })
          : toast.error("Please try again later", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              delay: 500,
            });
      });
  };
  const formValidation = yup.object().shape({
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
  });
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.07)",
          borderRadius: "16px",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 3.5rem",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#110C0C",
            fontSize: "1.2rem",
            pb: "1rem",
            fontWeight: "600",
          }}
        >
          Forgot Password
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontSize: "0.8rem",
            color: "rgba(17,12, 12, 0.85)",
            paddingBottom: "1rem",
            textAlign: "center",
          }}
          variant="body2"
          gutterBottom
          component="div"
        >
          Enter the email that is associated with your account and we’ll send an
          email having your OTP to reset your password.
        </Typography>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={formValidation}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <FormControl
                sx={{ mb: "1rem", width: "100%" }}
                variant="outlined"
              >
                <Field
                  as={OutlinedInput}
                  name="email"
                  type="email"
                  size="small"
                  style={{ padding: "0.2rem" }}
                  placeholder="Email"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1rem" }} position="end">
                      <MailOutlineOutlinedIcon sx={{ color: "#0257E6" }} />
                    </InputAdornment>
                  }
                />
                <Box color="red">
                  <ErrorMessage className="err" name="email" />
                </Box>
              </FormControl>
              <Button
                sx={{
                  width: "100%",
                  padding: "0.5rem",
                  mt: "0.5rem",
                  mb: "2rem",
                }}
                variant="contained"
                type="submit"
                disabled={loading}
              >
                {loading ? <ClipLoader /> : "SEND"}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
