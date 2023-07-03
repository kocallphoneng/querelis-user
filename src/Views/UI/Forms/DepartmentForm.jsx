import React from "react";
import { ClipLoader } from "react-spinners";
import Button from "@mui/material/Button";

const DepartmentForm = ({ children, loading, handleSubmit }) => {
  return (
    <form className=" flex flex-col gap-3">
      {children}
      <Button
        onClick={handleSubmit}
        className="h-[45px] w-full"
        variant="contained"
        type="submit"
      >
        {loading ? (
          <ClipLoader size={24} color={"#110C0C"} loading />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default DepartmentForm;
