import React from "react";
import Loader from "./Loader";

export const ButtonFill = ({ label, classes, action, loading }) => {
  return (
    <span
      onClick={action}
      className={`bg-[--base_color] rounded-[12px] cursor-pointer font-[600] flex justify-center items-center ${classes}`}
    >
      {loading ? <Loader color={"green"} size={[20, 20]} /> : label}
    </span>
  );
};

export const ButtonOutline = ({ label, classes, action }) => {
  return (
    <span
      onClick={action}
      className={`border border-[--base_color] rounded-[12px] cursor-pointer font-[600] flex justify-center items-center ${classes}`}
    >
      {label}
    </span>
  );
};
