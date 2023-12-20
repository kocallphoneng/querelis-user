import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const Input = ({ label, value, handleChange, name, error }) => {
  const border_class =
    error === ""
      ? "bg-[--light] border-[--dark]"
      : "bg-[--lazy_red] border-[--danger] border";
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[12px] text-[#333131] flex justify-between items-center">
        {label}
        <span className="text-[--danger]">{error}</span>
      </span>
      <input
        type="text"
        value={value}
        name={name}
        onChange={handleChange}
        className={`${border_class} border h-[40px] rounded-[8px] outline-none px-3`}
      />
    </div>
  );
};
export const PasswordInput = ({ label, value, handleChange, name, error }) => {
  const [type, setType] = useState("password");
  const border_class =
    error === ""
      ? "bg-[--light] border-[--dark]"
      : "bg-[--lazy_red] border-[--danger] border";
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[12px] text-[#333131] flex justify-between items-center">
        {label}
        <span className="text-[--danger]">{error}</span>
      </span>
      <div className="relative">
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className={`${border_class} border w-full h-[40px] rounded-[8px] outline-none px-3`}
        />
        <span className="absolute right-3 top-[12px]">
          {type === "password" ? (
            <AiOutlineEye
              onClick={() => setType("text")}
              className="cursor-pointer text-[16px]"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setType("password")}
              className="cursor-pointer text-[16px]"
            />
          )}
        </span>
      </div>
    </div>
  );
};
