import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Field, ErrorMessage } from "formik";

const RegularInput = ({
  name,
  type,
  placeholder,
  error,
  handleChange,
  value,
}) => {
  return (
    <FormControl
      className={"min-h-[65px] w-full flex flex-col "}
      variant="outlined"
    >
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className={`h-[45px] outline-none border-2 ${
          error ? "border-red-500" : ""
        } rounded-md px-3 `}
      />
      <span className="text-red-500 h-[20px] font-[600] text-[14px] leading-[21px]">
        {error}
      </span>
    </FormControl>
  );
};

export default RegularInput;