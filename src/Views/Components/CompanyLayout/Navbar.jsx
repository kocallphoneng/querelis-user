import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ toggle, menu }) => {
  const user = localStorage.user ? JSON.parse(localStorage.user) : {};

  return (
    <div className="p-5 pb-0 md:relative fixed top-0 right-0 left-0">
      <div className="bg-[#fff] px-5 rounded-tr-[20px] rounded-bl-[20px] h-[60px] w-full flex items-center md:justify-end justify-between">
        {/* <div className="flex bg-[--prymary_color] p-2 rounded-[24px] w-[300px] h-[40px]">
          <span className="flex items-center gap-3">
            <BsSearch className=" cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="border-none bg-[transparent] outline-none"
            />
          </span>
        </div> */}
        <MdOutlineMenu
          onClick={toggle}
          className="cursor-pointer md:hidden block"
        />
        <div
          onClick={() => {
            menu && toggle();
          }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <span className="w-[40px] h-[40px] bg-slate-300 flex items-center justify-center uppercase rounded-full">
            {user?.first_name[0]} {user?.last_name[0]}
          </span>
          <div className="flex flex-col ">
            <span className="text-[14px] font-[700] whitespace-nowrap capitalize text-gray-600">
              {user?.first_name} {user?.last_name[0]}
            </span>
            <span className="text-[12px] text-gray-600">{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
