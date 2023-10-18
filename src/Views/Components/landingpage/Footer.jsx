import React from "react";
import logo from "../../../Assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[--base_color] flex justify-center">
      <div className="max-w-[1200px] w-full py-10">
        <div className="border">
          <img src={logo} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
