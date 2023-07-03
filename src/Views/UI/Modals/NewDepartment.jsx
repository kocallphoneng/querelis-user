import React from "react";
import RegularInput from "../Utilities/Inputs/RegularInput";
import DepartmentForm from "../Forms/DepartmentForm";
import useDepartment from "../../../Controllers/Hooks/useDepartment";
import Selector from "../Utilities/Inputs/Selector";

const NewDepartment = () => {
  const { loading, handleSubmit, handleChange, form, error } = useDepartment();
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[22px] font-[700]">Create New Department</span>
      <DepartmentForm loading={loading} handleSubmit={handleSubmit}>
        <RegularInput
          name={"name"}
          placeholder={"Name of department"}
          type="text"
          handleChange={handleChange}
          error={error?.name}
          value={form.name}
        />
        <Selector />
      </DepartmentForm>
    </div>
  );
};

export default NewDepartment;
