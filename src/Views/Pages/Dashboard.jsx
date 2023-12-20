import React from "react";
import CompanyDashboard from "../UI/Layouts/CompanyDashboard";
import UserDashboard from "../UI/Layouts/UserDashboard";
import useModal from "../../Controllers/Hooks/useModal";

const Dashboard = () => {
  return (
    <div className="">
      <CompanyDashboard />
      {/* <UserDashboard /> */}
      {/* {localStorage.user_type === "support_staff" ? (
        <CompanyDashboard />
      ) : (
        <UserDashboard />
      )} */}
      {useModal()}
    </div>
  );
};

export default Dashboard;
