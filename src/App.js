import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Views/Pages/Login";
import ForgotPassword from "./Views/Pages/ForgotPassword";
import ResetPassword from "./Views/Pages/ResetPassword";
import NewPassword from "./Views/Pages/NewPassword";
import Dashboard from "./Views/Pages/Dashboard";
import Home from "./Views/Pages/Home";
import Departments from "./Views/Pages/Departments";
import Requests from "./Views/Pages/Tickets";
import Staffs from "./Views/Pages/Staffs";
import ChangePassword from "./Views/Pages/ChangePassword";
import Notifications from "./Views/Pages/Notifications";
import Demo from "./Views/Pages/Demo";
import Department from "./Views/Pages/Department";
import LandingPage from "./Views/Pages/LandingPage";
import CompulsoryPassword from "./Views/Pages/CompulsoryChange";
// import CompulsoryPassword from "./Pages/CompulsoryChange";
// import DashboardCtrl from "./Pages/DashboardCtrl";
// import UserDashboard from "./Pages/UserDashboard";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/forgot-password"} element={<ForgotPassword />} />
      <Route path={"/reset-password"} element={<ResetPassword />} />
      <Route path={"/create-new-password"} element={<NewPassword />} />
      <Route
        path={"/compulsory-password-reset"}
        element={<CompulsoryPassword />}
      />
      <Route path={"/demo"} element={<Demo />} />
      <Route path={"/dashboard"} element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="vendors" element={<Departments />} />
        <Route path="tickets" element={<Requests />} />
        <Route path="tickets/pending" element={<Requests />} />
        <Route path="tickets/accepted" element={<Requests />} />
        <Route path="tickets/escalted" element={<Requests />} />
        <Route path="staffs" element={<Staffs />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="department" element={<Department />} />
      </Route>
    </Routes>
  );
}

export default App;
