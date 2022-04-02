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
// import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
// import client from "../helpers/axiosInstance";

function CompulsoryPassword() {
  const [display, setDisplay] = React.useState({
    view1: false,
    view2: false,
    view3: false,
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword1 = () =>
    setDisplay({ ...display, view1: !display.view1 });
  const handleClickShowPassword2 = () =>
    setDisplay({ ...display, view2: !display.view2 });
  const handleClickShowPassword3 = () =>
    setDisplay({ ...display, view3: !display.view3 });

  const handleSubmit = (values) => {
    console.log(values);
  };
  const formValidation = yup.object().shape({
    password1: yup.string().required("*Required"),
    password2: yup.string().required("*Required"),
    password3: yup
      .string()
      .oneOf([yup.ref("password2")], "Password does not match")
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
          Compulsory Password Change After 60 Days
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
          Your password has expired. Please enter a new password before login.
        </Typography>
        <Formik
          initialValues={{
            password1: "",
            password2: "",
            password3: "",
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
                size="small"
                sx={{ mb: "1rem", width: "100%" }}
                variant="outlined"
              >
                <Field
                  as={OutlinedInput}
                  id="outlined-adornment-weight"
                  name="password1"
                  style={{ padding: "0.2rem" }}
                  type={display.view1 ? "text" : "password"}
                  placeholder="Old Password"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1.2rem" }} position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {display.view1 ? (
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
                <Box color={"red"}>
                  <ErrorMessage name="password1" />
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
                  name="password2"
                  style={{ padding: "0.2rem" }}
                  type={display.view2 ? "text" : "password"}
                  placeholder="New Password"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1.2rem" }} position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {display.view2 ? (
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
                <Box color={"red"}>
                  <ErrorMessage name="password2" />
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
                  name="password3"
                  style={{ padding: "0.2rem" }}
                  type={display.view3 ? "text" : "password"}
                  placeholder="Confirm New Password"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1.2rem" }} position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword3}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {display.view3 ? (
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
                <Box color={"red"}>
                  <ErrorMessage name="password3" />
                </Box>
              </FormControl>
              <Button
                sx={{ width: "100%", padding: "1rem", mt: "1rem" }}
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

export default CompulsoryPassword;
