import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import client from "../helpers/axiosInstance";

function NewPassword() {
  const state = useSelector((state) => state);
  const { userEmail, otp, firstEmail, firstTimeUser} = state.user;
  
  const [values, setValues] = React.useState({
    view1: false,
    view2: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsLoading, setNotLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (values) => {
    setIsLoading()
    if (firstTimeUser) {
      client.post("/change-password", {
        email: firstEmail,
        password: values.password,
        password_confirmation: values.cfPassword
      }).then(res => {
        console.log(res)
        setNotLoading()
        navigate("/login")

      }).catch(err => {
        console.log(err)
        setNotLoading();
      })
    }
    client
      .post("/reset-password", {
        email: userEmail,
        password: values.password,
        password_confirmation: values.cfPassword,
        token: otp,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
        setNotLoading();
      })
      .catch((err) => {
        console.log(err);
        setNotLoading();
      });
  };
  
  const formValidation = yup.object().shape({
    password: yup
      .string()
      .min(8, "*Password should be a minimum of 8 characters")
      .required("*Required"),
    cfPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match")
      .required("*Required"),
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
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.07)",
          borderRadius: "16px",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#110C0C",
            fontSize: "1.2rem",
            fontWeight: "600",
            width: "100%",
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          Create New Password
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
          Your new password must be different from the previous password
        </Typography>
        <Formik
          initialValues={{
            password: "",
            cfPassword: "",
          }}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
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
                size="small"
                sx={{ mb: "1rem", width: "100%" }}
                variant="outlined"
              >
                <Field
                  as={OutlinedInput}
                  id="outlined-adornment-weight"
                  name="password"
                  style={{ padding: "0.2rem" }}
                  type={values.view1 ? "text" : "password"}
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1.2rem" }} position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => {
                          e.preventDefault();
                          setValues({ ...values, view1: !values.view1 });
                        }}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.view1 ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility sx={{ color: "#0257E6" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "Password",
                  }}
                />
                <Box color="red">
                  <ErrorMessage name="password" />
                </Box>
              </FormControl>
              <FormControl
                size="small"
                sx={{ mb: "1rem", width: "100%" }}
                variant="outlined"
              >
                <Field
                  as={OutlinedInput}
                  id="outlined-adornment-weight"
                  name="cfPassword"
                  style={{ padding: "0.2rem" }}
                  type={values.view2 ? "text" : "password"}
                  placeholder="Confirm Password"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1.2rem" }} position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => {
                          e.preventDefault();
                          setValues({ ...values, view2: !values.view2 });
                        }}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.view2 ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility sx={{ color: "#0257E6" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "Password",
                  }}
                />
                <Box color="red">
                  <ErrorMessage name="cfPassword" />
                </Box>
              </FormControl>

              <Button
                sx={{ width: "100%", padding: "0.5rem", m: "0.5rem 0" }}
                variant="contained"
                type="submit"
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default NewPassword;
