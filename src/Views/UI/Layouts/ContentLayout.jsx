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
          showDataInfo ? "md:col-span-7 col-span-12" : "col-span-12"
        }  flex flex-col gap-3 md:p-5 md:px-0 transition-all ease-in-out duration-100`}
      >
        <div
          ref={ref1}
          className={` transition-all ease-in-out  duration-100`}
        >
          {firstChild}
        </div>
      </div>
      {showDataInfo && (
        <div
          className={` lg:col-span-5 bg-[#00000025] w-full fixed min-h-screen h-full top-0 left-0 z-[999999] transition-all ease-in-out duration-100`}
        >
          <div
            ref={ref2}
            className={`${
              toggleContentLayout ? "translate-x-0" : " translate-x-[100px]"
            } fixed  lg:bg-transparent lg:w-[33%] lg:p-5 min-w-[350px] transition-all ease-in-out duration-100 lg:py-5  min-h-screen lg:top-[80px] top-0  right-0 bottom-0 overflow-y-auto`}
          >
            <div className="bg-white p-5 lg:rounded-[20px] lg:min-h-fit min-h-screen">
              <div className="flex items-center gap-6 border-b pb-4">
                <IoClose
                  onClick={closeContentModal}
                  className="text-[21px] cursor-pointer text-[red]"
                />
                <span className="md:text-[21px] text-[18px] font-[700]">
                  {targetElement?.title}
                </span>
              </div>
              {secondChild}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentLayout;
