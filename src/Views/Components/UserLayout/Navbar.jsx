import React from "react";

const Navbar = () => {
  return (
    <div className="h-[77px] p-5 ">
      <div className="w-full flex items-center justify-between">
        <span className="h-full w-[300px] flex items-center text-[20px] leading-[25px] font-[700]">
          Welcome To Your Dashboard
        </span>
        <div className="flex items-center gap-3"></div>
        <span className="w-[46px] h-[46px] bg-gray-300 rounded-full overflow-hidden border"></span>
        <div className="flex flex-col">
          <span className="text-[18px] leading-[24px] text-slate-700 font-[700] ">
            Bolu Lawal
          </span>
          <span className="text-[14px] leading-[20px] font-[300] ">
            Support staff{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
