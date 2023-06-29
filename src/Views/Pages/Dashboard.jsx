import React from "react";
import CompanyDashboard from "../UI/Layouts/CompanyDashboard";
import UserDashboard from "../UI/Layouts/UserDashboard";

const Dashboard = () => {
  return (
    <div className="">
      {localStorage.isCompany ? <CompanyDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
