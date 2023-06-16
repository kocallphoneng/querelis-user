import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [values, setValues] = useState({
    otp: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUserOtp } = bindActionCreators(actionCreators, dispatch);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.otp !== 0) {
      setUserOtp(values.otp);
      navigate("/createnewpassword");
    }
  }
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
          width: "600px",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.07)",
          borderRadius: "16px",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#110C0C",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          Verification
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
          Input the codes that was sent to your email address
        </Typography>
        <Box sx={{ width: "100%" }}>
          <OtpInput
            containerStyle={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
            inputStyle={{
              width: "4rem",
              height: "2.5rem",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "1px solid #C4C4C4",
              outline: "none",
              color: "gray",
            }}
            focusStyle={{
              border: "3px solid #0257E6",
            }}
            value={values.otp}
            onChange={(e) => setValues({ otp: e })}
            numInputs={6}
            separator={" "}
          />
        </Box>
        <Button
          sx={{ width: "100%", padding: "0.5rem", mt: "1rem" }}
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          SEND
        </Button>
      </Box>
    </Box>
  );
}

export default ResetPassword;
