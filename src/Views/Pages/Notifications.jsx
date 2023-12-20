import React, { useState } from "react";
import { BsFilter, BsPlus, BsSearch } from "react-icons/bs";
import UserCard from "../Components/Notification/UserCard";
import ChatCard from "../Components/Notification/ChatCard";
import { IoSend } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";
function Notication() {
  const [showMsg, setShowMsg] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-5 pb-0">
      <div className="flex flex-col gap-5 bg-white overflow-hidden rounded-[20px]">
        <div className="flex bg-[#2170f807] h-[100px] p-5 justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <span className="text-[22px] leading-[30px] font-[700] ">
              Messages
            </span>
            {/* <div className="flex gap-7 items-center">
              <div className="flex gap-1 w-[250px] shadow-[0px,10px,19px,-3px,#0f59d82f] justify-between h-[35px] p-1 px-4 items-center rounded-[20px] bg-white ">
                <span className="text-[13px] font-[700] text-gray-600 ">
                  All Staffs
                </span>
                <span className="flex items-center text-[--base_color] gap-2 text-[12px] cursor-pointer  font-[700]">
                  <BsFilter className="text-[21px] text-[--base_color] font-[700]" />
                  Filter
                </span>
              </div>
            </div> */}
          </div>
          <div className="flex gap-4">
            <span className="flex flex-col items-center text-gray-700 text-[30px] font-[700]">
              100 <span className="text-[12px]">Total</span>
            </span>
            <span className="flex px-5 border-x flex-col items-center text-green-600 text-[30px] font-[700]">
              50 <span className="text-[12px]">Read</span>
            </span>
            <span className="flex flex-col items-center text-[--base_color] text-[30px] font-[700]">
              50 <span className="text-[12px]">Unread</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div
            className={` col-span-6 flex  rounded-[5px]  flex-col h-fit max-h-[calc(100vh-170px)] overflow-y-scroll no-scrollbar`}
          >
            {[0, 1, 2, 3, 4, 5, 6, 2, 4, 5].map((_u, n) => (
              <UserCard key={n} />
            ))}
          </div>
          <div className=" col-span-6 relative shadow-md">
            <div className="absolute left-0 opacity-[0.2] overflow-hidden rounded-[20px] w-full h-full chat_layout">
              <div className="w-full h-full "></div>
            </div>
            <div className="grid grid-rows-6 pr-0  rounded-[20px] bg-[--prymary_color] gap-3 w-full h-full border border-gray-300 p-4">
              <div className="flex flex-col pr-4 row-span-5 gap-5 max-h-[calc(100vh-300px)] overflow-y-auto">
                <ChatCard position="left" />
                <ChatCard position="right" />
                <ChatCard position="left" />
              </div>
              <div className="grid z-[99999] mr-4 grid-cols-12 gap-5 row-span-1 rounded-[10px] bg-[#fff] p-2">
                <textarea
                  type="text"
                  rows={1}
                  className=" outline-none text-[14px] p-2 border col-span-10"
                />
                <div className="col-span-2 gap-5 flex items-center">
                  <span className="w-[16px] relative">
                    <FaPaperclip className=" cursor-pointer text-red-400" />
                    <input type="file" className="absolute w-[16px] top-0 left-0 opacity-0 cursor-pointer" />
                  </span>

                  <IoSend className=" cursor-pointer text-[--base_color]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notication;
