import React from "react";

const UserCard = () => {
  return (
    <div className="flex relative cursor-pointer items-center gap-4 bg-white p-2">
      <span className="min-w-[40px] h-[40px] bg-gray-300 rounded-full"></span>
      <div className="flex flex-col h-full border-b w-full py-1  font-[700]">
        <span className="text-[16px]">Peter Moses</span>
        <span className="text-[12px] text-gray-300">@Voice call deparment</span>
      </div>
      <span className="absolute flex flex-col items-end right-2 top-2 text-[12px] text-gray-300">
        2 days ago
      </span>
      <span className="absolute rounded-full items-end right-2 bottom-1 w-[7px] h-[7px] bg-blue-500"></span>
    </div>
  );
};

export default UserCard;
