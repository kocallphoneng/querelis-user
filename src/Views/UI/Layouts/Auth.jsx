import React from "react";
import logo from "../../../Assets/images/logo.png";

const Auth = ({ children, title, helper }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex-[0.4] min-w-[350px] md:flex hidden justify-center items-center p-5 py-10 bg-[--base_color] h-full">
        <img src={logo} className="w-[300px]" alt="" />
      </div>
      <div className="md:flex-[0.6] flex-1 h-full flex justify-center items-center">
        <div className="flex gap-[40px] rounded-[20px] flex-col max-w-[500px] w-full h-fit sm:p-[50px] px-[16px]">
          <div className="flex flex-col gap-[16px]">
            <span className="text-[24px] pop leading-[30px] w-full font-[700] text-[#110C0C]">
              {title}
            </span>
            {helper && (
              <span className="text-[rgba(17,12,12,0.85)] leading-[26.14px] text-[14px] font-[400] ">
                {helper}
              </span>
            )}
          </div>
          {children}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Auth;
