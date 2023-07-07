import React from "react";

const ModalLayout = ({ children }) => {
  return (
    <div className="bg-[#00000038] flex justify-center items-center fixed h-screen w-full left-0 right-0 top-0 bottom-0">
      <div className="bg-[#fff] max-w-[500px] w-full h-fit p-5 rounded-[24px]">
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
