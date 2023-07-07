import React from "react";
import CompanyDashboard from "../UI/Layouts/CompanyDashboard";
// import UserDashboard from "../UI/Layouts/UserDashboard";
import useModal from "../../Controllers/Hooks/useModal";

const Dashboard = () => {
  return (
    <div className="">
      <CompanyDashboard />
      {/* {localStorage.isCompany ? <CompanyDashboard /> : <UserDashboard />} */}
      {/* {localStorage.user === "support_staff" ? (
        <UserDashboard />
      ) : (
        <Dashboard />
      )} */}
      {useModal()}
    </div>
  );
};

export default Dashboard;
