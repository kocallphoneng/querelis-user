import React, { useEffect, useState } from "react";
import Auth from "../UI/Layouts/Auth";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { Button } from "@mui/material";
import { useAuthContext } from "../../Controllers/Context/AuthContext";

function ResetPassword() {
  const navigate = useNavigate();
  const authContext = useAuthContext();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleOtpChange = (val) => {
    setOtp(val);
    setOtpError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 6) setOtpError("OTP is incomplete");
    else {
      const email = JSON.parse(localStorage["reset-config"]).email;
      localStorage.setItem(
        "reset-config",
        JSON.stringify({ email: email, otp: otp })
      );
      authContext.setFirstTimer(true);
      navigate("/create-new-password");
    }
  };

  useEffect(() => {
    if (!localStorage["reset-config"]) navigate("/forgot-password");
    // eslint-disable-next-line
  }, []);

  return (
    <Auth
      title={"Reset Password"}
      helper={
        "Enter the email that is associated with your account and we’ll send an email having your OTP to reset your password."
      }
    >
      <div className="flex flex-col ">
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
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
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
        />
        <span className="text-red-600 h-[20px] font-[600] text-[14px] leading-[21px]">
          {otpError}
        </span>
      </div>
      <Button
        onClick={handleSubmit}
        className="h-[45px] w-full"
        variant="contained"
        type="submit"
      >
        CONTINUE
      </Button>
    </Auth>
  );
}

export default ResetPassword;
