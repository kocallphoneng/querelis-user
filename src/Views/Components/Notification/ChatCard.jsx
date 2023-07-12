import React from "react";

const ChatCard = ({ position }) => {
  return (
    <div
      className={`flex w-full border h-fit ${
        position === "left" ? " justify-start" : " justify-end"
      }`}
    >
      <div
        className={`flex bg-[#fff] gap-3 max-w-[300px] rounded-[16px] w-fit p-2 `}
      >
        <span className="min-w-[25px] h-[25px] bg-gray-300 rounded-full"></span>
        <div className="flex flex-col">
          <span className="font-[700] text-[14px]">John Stack</span>
          <span className="text-[12px] leading-[21px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            nulla incidunt corporis aspernatur distinctio, enim ullam ratione
            necessitatibus esse? Cupiditate veritatis doloremque earum facilis
            doloribus et error beatae consectetur molestiae.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
