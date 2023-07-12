import React from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ContentLayout = ({ firstChild, secondChild }) => {
  const {
    showDataInfo,
    targetElement,
    toggleContentLayout,
    closeContentModal,
  } = useAppContext();
  // const [toggle, setToggle] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();


  return (
    <div className="grid grid-cols-12 gap-4">
      <div
        className={` ${
          showDataInfo ? "col-span-7" : "col-span-12"
        }  flex flex-col gap-3 p-5 border-2 transition-all ease-in-out duration-100`}
      >
        <div
          ref={ref1}
          className={`${
            toggleContentLayout ? "" : ""
          } transition-all ease-in-out duration-100`}
        >
          {firstChild}
        </div>
      </div>
      {showDataInfo && (
        <div className={` col-span-5 transition-all ease-in-out duration-100`}>
          <div
            ref={ref2}
            className={`${
              toggleContentLayout ? "translate-x-0" : " translate-x-[100px]"
            } fixed px-10 transition-all ease-in-out duration-100 py-5 bg-white min-h-[calc(100vh-100px)] top-[80px] w-[33%] right-0 bottom-0 overflow-y-auto`}
          >
            <div className="flex items-center gap-6">
              <IoClose
                onClick={closeContentModal}
                className="text-[21px] cursor-pointer text-[red]"
              />
              <span className="text-[21px] font-[700]">
                {targetElement?.title}
              </span>
            </div>
            {secondChild}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentLayout;
