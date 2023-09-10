import React from "react";
import { ButtonFill } from "../Utilities/Button";

const DepartmentForm = ({ children, loading, handleSubmit }) => {
  return (
    <form className=" flex flex-col gap-5">
      {children}
      <ButtonFill
        label={"Submit"}
        classes={"h-[45px] w-full text-[#fff]"}
        action={handleSubmit}
        loading={loading}
      />
    </form>
  );
};

export default DepartmentForm;
