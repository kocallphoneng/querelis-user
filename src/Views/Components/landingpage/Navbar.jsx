import React from "react";
import logo from "../../../Assets/images/logo_d.png";
import { ButtonFill, ButtonOutline } from "../../UI/Utilities/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-[80px] flex items-center border w-full px-5 ">
      <div className="flex m-auto w-full gap-1 items-center justify-between max-w-[1200px]">
        <img src={logo} className="" alt="" />
        <div className="flex gap-5 items-center">
          <span className="text-[16px] text-[--dark] font-[600] cursor-pointer">
            About Us
          </span>
          <span className="text-[16px] text-[--dark] font-[600] cursor-pointer">
            Pricing
          </span>
          <span className="text-[16px] text-[--dark] font-[600] cursor-pointer">
            Contact Us
          </span>
        </div>
        <div className="flex gap-5">
          <ButtonOutline
            label={"Dashboard"}
            action={() => {
              navigate("/login");
            }}
            classes={"px-5 h-[45px] text-[--base_color]"}
          />
          <ButtonFill
            label={"Get Started"}
            action={() => {
              navigate("/login");
            }}
            classes={"px-5 h-[45px] text-[#fff]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
