import React from "react";
import { ButtonFill } from "../Utilities/Button";

const PriceCard = () => {
  return (
    <div className="flex flex-col shadow-xl items-center gap-5 p-5 rounded-[20px] bg-white w-[350px] ">
      <span className="text-[21px] pop text-gray-600  font-[900]">
        Standard Plan
      </span>
      <span>Everything you need to get started</span>
      <span className="text-[45px] text-[--dark] pop font-[700]">
        $ 1000.00 <span className="text-[20px]"> / yr</span>
      </span>
      <ButtonFill
        label={"Get Started"}
        classes={"w-full h-[45px] text-[#fff]"}
        
      />
    </div>
  );
};

export default PriceCard;
