import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Field, ErrorMessage } from "formik";

const AuthInput = ({ Icon, name, type, placeholder }) => {
  return (
    <FormControl
      className={"min-h-[65px] w-full flex flex-col "}
      variant="outlined"
    >
      <Field
        as={OutlinedInput}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-[45px]"
        endAdornment={
          <InputAdornment sx={{ mr: "1rem" }} position="end">
            <Icon className="text-[24px] " />
          </InputAdornment>
        }
      />
      <span className="text-red-600 h-[20px] font-[600] text-[14px] leading-[21px]">
        <ErrorMessage name={name} />
      </span>
    </FormControl>
  );
};

export default AuthInput;
