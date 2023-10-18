import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const [delay, setDelay] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setDelay(true);
    }, 50);
  };
  const close = () => {
    setDelay(false);
    setTimeout(() => {
      setOpen(false);
    }, 50);
  };
  return (
    <div className=" flex flex-col w-full">
      <div
        onClick={() => (open ? close() : toggle())}
        className="flex w-full rounded-[12px] justify-between items-center bg-[--hue] p-3 text-[18px] font-[600] cursor-pointer"
      >
        How can Querelis help improve customer relations?{" "}
        <FaChevronDown
          className={` transition-all duration-100 ${
            !delay ? "rotate-0" : "rotate-180"
          } `}
        />
      </div>
      {open && (
        <span
          className={`p-3 w-full transition-all duration-100  ${
            !delay ? " translate-y-0" : " translate-y-[10px]"
          } `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla
          placeat sequi quam vel amet quasi, architecto blanditiis sunt corrupti
          quia rem nesciunt cupiditate facere, laborum ut, ratione vero
          mollitia.
        </span>
      )}
    </div>
  );
};

export default Accordion;
