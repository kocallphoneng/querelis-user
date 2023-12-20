import React from "react";

const SubNavCard = ({ element, active, title, navigate, children }) => {
  return (
    <div className="flex flex-col">
      <span
        onClick={navigate}
        className={`flex items-center text-[1rem] transition-all duration-200 ease-in-out  px-[35px] cursor-pointer gap-3 font-[700] ${
          active ? "" : ""
        } `}
      >
        {element}
        {title}
      </span>
    </div>
  );
};

export default SubNavCard;
