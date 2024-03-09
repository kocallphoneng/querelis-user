import React from "react";
// import Navbar from "../Components/landingpage/Navbar";
import logo from "../../Assets/images/logo_d.png";
// import Header from "../Components/landingpage/Header";
// import WhoWeAre from "../Components/landingpage/WhoWeAre";
// import OurPartners from "../Components/landingpage/OurPartners";
// import Pricing from "../Components/landingpage/Pricing";
// import Faqs from "../Components/landingpage/Faqs";
// import Footer from "../Components/landingpage/Footer";
import network from "../../Assets/images/network.png";
import vector from "../../Assets/vectors/connected.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff] min-h-screen pb-[20px] w-full px-5">
      <div className="flex flex-col items-center w-full max-w-[1110px] m-auto">
        <div className="w-full flex items-center justify-between h-[120px]">
          <img className="h-[40px]" src={logo} alt="" />
          <span
            onClick={() => navigate("/login")}
            className="bg-[--base_color] text-[#fff] text-[14px] font-[800] md:w-[150px] w-[130px] rounded-[10px] cursor-pointer md:h-[52px] h-[48px] flex items-center justify-center "
          >
            Get Started
          </span>
        </div>
        <div className="w-full bg-[#0f59d809] relative items-center min-h-[80vh] rounded-[40px] grid grid-cols-12">
          <div className="md:col-span-5 col-span-12 flex flex-col gap-[10px] px-[20px] pl-[40px] md:pt-0 pt-10 justify-center md:items-start items-center">
            <span className="text-[#1e3254c1] sm:text-[45px] text-[35px] font-[400] md:leading-[62px] leading-[52px] md:text-start text-center">
              Smart Customers Complaints Analytics.
            </span>
            <span className="md:text-start text-center">
              Your Network, Our Expertise.
            </span>
            <span
              onClick={() => navigate("/login")}
              className="bg-[--base_color] mt-[20px] text-[#fff] text-[14px] font-[800] w-[250px] rounded-[10px] cursor-pointer h-[52px] flex items-center justify-center "
            >
              Click To Get Started
            </span>
          </div>
          <div className="md:col-span-7 col-span-12 h-full flex md:items-center">
            <img src={vector} className="z-[9999]" alt="" />
          </div>
          <img
            className="absolute right-0 bottom-[100px] w-[70%] opacity-[0.4]"
            src={network}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
