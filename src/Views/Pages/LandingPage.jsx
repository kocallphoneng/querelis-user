import React from "react";
// import Navbar from "../Components/landingpage/Navbar";
import Header from "../Components/landingpage/Header";
import WhoWeAre from "../Components/landingpage/WhoWeAre";
import OurPartners from "../Components/landingpage/OurPartners";
import Pricing from "../Components/landingpage/Pricing";
import Faqs from "../Components/landingpage/Faqs";
import Footer from "../Components/landingpage/Footer";

const LandingPage = () => {
  return (
    <div className="">
      <Header />
      <WhoWeAre />
      <OurPartners />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
};

export default LandingPage;
