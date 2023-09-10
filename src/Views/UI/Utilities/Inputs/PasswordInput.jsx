import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Field, ErrorMessage } from "formik";

const PasswordInput = ({ name, type, placeholder }) => {
  const [vissible, setVissible] = useState();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl
      className={"min-h-[65px]  border w-full flex flex-col "}
      variant="outlined"
    >
      <Field
        as={OutlinedInput}
        name={name}
        type={vissible ? "text" : "password"}
        placeholder={placeholder}
        className="h-[45px]"
        endAdornment={
          <InputAdornment sx={{ mr: "1rem" }} position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setVissible(!vissible)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {!vissible ? (
                <VisibilityOff />
              ) : (
                <Visibility sx={{ color: "#0257E6" }} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <span className="text-red-600 h-[20px] font-[600] text-[14px] leading-[21px]">
        <ErrorMessage name={name} />
      </span>
    </FormControl>
  );
};

export default PasswordInput;