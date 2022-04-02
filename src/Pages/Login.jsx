import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import client from "../helpers/axiosInstance";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { auth, } = state.user;

  const { login, firstTimeEmail, setIsLoading, setNotLoading } =
    bindActionCreators(actionCreators, dispatch);

  const handleSubmit = async (values) => {
    setIsLoading();
    const user = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await client.post("/login", user);
      console.log(res);
      const token = res.data.access_token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", res.data.user.name);
      login(res.data);
      setNotLoading()
      navigate("/dashboard");
    } catch (err) {
      console.log(err.response.data)
      if (err.response.data.code === "FIRST_LOGIN") {
        firstTimeEmail(values.email);
        setNotLoading();
        navigate("/createnewpassword");
      } else {
        console.log(err)
        setNotLoading();
      }
      
    }
  };
  useEffect(() => console.log("auth", auth), [auth]);
  const formValidation = yup.object().shape({
    email: yup.string().email("Invalid Email Addresss").required("*Required"),
    password: yup.string().required("*Required"),
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
          Admin Login
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
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
                <Box color={"red"}>
                  <ErrorMessage name="email" />
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
                  name="password"
                  style={{ padding: "0.2rem" }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment sx={{ mr: "1.2rem" }} position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
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
                  <ErrorMessage name="password" />
                </Box>
              </FormControl>

              <Button
                sx={{ width: "100%", padding: "0.5rem", mt: "0.5rem" }}
                variant="contained"
                type="submit"
              >
                {state.loading ? "Loading..." : "SEND"}
              </Button>

              <Typography
                sx={{
                  textAlign: "center",
                  color: "#C4C4C4",
                  fontSize: "1rem",
                  fontWeight: "600",
                  p: "1rem 0 2rem 0",
                  cursor: "pointer",
                }}
                variant="body2"
                gutterBottom
                component="div"
              >
                <Link className="link" to={"/forgotPassword"}>
                  Forgot Password Option
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;
