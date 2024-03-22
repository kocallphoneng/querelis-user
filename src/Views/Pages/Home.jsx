import React from "react";
import CompanyHome from "../Components/Home/Index";
import UserHome from "../Components/UserHome/Index";

const Home = () => {
  return (
    <>
      {" "}
      <CompanyHome />
      {/* <CompanyHome /> */}
      {/* <UserHome /> */}
      {/* {localStorage.user_type === "company" ? <CompanyHome /> : <UserHome />} */}
    </>
  );
};

export default Home;
