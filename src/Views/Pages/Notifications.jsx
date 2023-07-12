import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import UserCard from "../Components/Notification/UserCard";
import ChatCard from "../Components/Notification/ChatCard";
import { IoSend } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";
function Notication() {
  const [showMsg, setShowMsg] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-5 pb-0">
      <div className="flex flex-col gap-3">
        <span className="text-[22px] leading-[30px] font-[700] ">
          Messages (30)
        </span>
        <div className="flex items-center gap-5">
          <span className="flex gap-1 w-[250px] h-[35px] items-center border-2 rounded-[7px] border-gray-300 bg-white">
            <BsSearch className="mx-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-gray-600 text-[13px] bg-transparent font-[700] outline-none"
            />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div
          className={` col-span-6 flex  rounded-[5px]  flex-col h-fit max-h-[calc(100vh-190px)] overflow-y-scroll no-scrollbar`}
        >
          {[0, 1, 2, 3, 4, 5, 6, 2, 4, 5].map((_u, n) => (
            <UserCard key={n} />
          ))}
        </div>
        <div className=" col-span-6 relative shadow-md">
          <div className="absolute left-0 -z-20 opacity-[0.2] w-full h-full chat_layout">
            <div className="w-full h-full bg-[#0c0c5e18]"></div>
          </div>
          <div className="grid grid-rows-6 gap-3 w-full h-full border border-gray-300 p-4">
            <div className="flex flex-col row-span-5 gap-5 max-h-[calc(100vh-300px)] overflow-y-auto">
              <ChatCard position="left" />
              <ChatCard position="right" />
              <ChatCard position="left" />
            </div>
            <div className="grid grid-cols-12 gap-5 row-span-1 rounded-[10px] bg-[#fff] p-2">
              <textarea
                type="text"
                rows={1}
                className=" outline-none text-[14px] p-2 border col-span-10"
              />
              <div className="col-span-2 gap-5 flex items-center">
                <FaPaperclip className=" cursor-pointer" />
                <IoSend className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notication;
