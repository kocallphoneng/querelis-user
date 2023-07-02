import React from "react";

const Navbar = () => {
  return (
    <div className="h-[77px] px-10 bg-[#fff] shadow-lg w-full flex items-center justify-between">
      <span className="h-full w-[300px] flex items-center text-[20px] leading-[25px] font-[700]">Welcome To Your Dashboard</span>
      <div className="flex items-center gap-3">
        <span className="w-[46px] h-[46px] bg-gray-300 rounded-full overflow-hidden border"></span>
        <div className="flex flex-col">
          <span className="text-[20px] leading-[30px] font-[600] ">
            Kiki Store
          </span>
          <span className="text-[16px] leading-[20px] font-[300] ">Company </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
