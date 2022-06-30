import React from "react";
import UserDashboard from "./UserDashboard";
import Dashboard from "./Dashboard";

function DashboardCtrl() {
  return (
    <div>
      {localStorage.user === "support_staff" ? (
        <UserDashboard />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default DashboardCtrl;
