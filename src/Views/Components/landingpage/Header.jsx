import React from "react";
import Navbar from "./Navbar";
import vector from "../../../Assets/vectors/connected.png";
import network from "../../../Assets/images/network.png";
import { ButtonOutline } from "../../UI/Utilities/Button";

const Header = () => {
  return (
    <div className="maxw-h-screen w-full  flex flex-col items-center  relative">
      <Navbar />
      <div className="grid grid-cols-12 max-w-[1200px] w-full relative ">
        <div className=" col-span-6 flex flex-col justify-center">
          <span className="text-[48px] font-[700] pop text-[--base_color]">
            Smart Customers Complaints Analytics.
          </span>
          <span className="text-[18px] text-gray-600 font-[600] pop">
            Your Network, Our Expertise.
          </span>
          <div className="flex">
            <ButtonOutline
              label={"Let's Get You Started"}
              classes={"w-[250px] h-[50px] text-[--base_color] mt-[20px]"}
            />
          </div>
        </div>
        <div className="col-span-6 flex justify-center overflow-y-hidden items-center relative">
          <img src={vector} className="max-w-[550px]" alt="" />
          <div className="absolute left-[-150px] z-[-1]">
            <img
              src={network}
              className="w-[600px] opacity-[0.3] -rotate-45"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
