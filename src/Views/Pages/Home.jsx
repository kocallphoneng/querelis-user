import React from "react";
import CompanyHome from "../Components/Home/Index";
import UserHome from "../Components/UserHome/Index";

const Home = () => {
  return (
    <>
      {/* <CompanyHome /> */}
      <UserHome />
      {/* {localStorage.isCompany ? <CompanyHome /> : <UserDashboard />} */}
    </>
  );
};

export default Home;
