import React from "react";

const PreviewLayout = ({ children, title, helper }) => {
  return (
    <div className="w-full flex justify-start items-center">
      <div className="flex bg-[#fff] gap-[30px] rounded-[20px] flex-col max-w-[600px] w-full h-fit ">
        <div className="flex flex-col p-5 gap-[16px] bg-[--prymary_color]">
          <span className="text-[24px] leading-[30px]  w-full font-[700] text-[#110C0C]">
            {title}
          </span>
          {helper && (
            <span className="text-[rgba(17,12,12,0.85)] leading-[26.14px] text-[14px] font-[400] ">
              {helper}
            </span>
          )}
        </div>
        <div className="p-5 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default PreviewLayout;
