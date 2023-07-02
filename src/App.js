import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Views/Pages/Login";
import ForgotPassword from "./Views/Pages/ForgotPassword";
import ResetPassword from "./Views/Pages/ResetPassword";
import NewPassword from "./Views/Pages/NewPassword";
import Dashboard from "./Views/Pages/Dashboard";
import Home from "./Views/Pages/Home";
// import CompulsoryPassword from "./Pages/CompulsoryChange";
// import DashboardCtrl from "./Pages/DashboardCtrl";
// import UserDashboard from "./Pages/UserDashboard";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/login" />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/forgot-password"} element={<ForgotPassword />} />
      <Route path={"/reset-password"} element={<ResetPassword />} />
      <Route path={"/create-new-password"} element={<NewPassword />} />
      <Route path={"/dashboard"} element={<Dashboard />}>
        <Route path="" element={<Home />} />
      </Route>

      {/* <Route
        path={"/compulsorypasswordreset"}
        element={<CompulsoryPassword />}
      /> */}
    </Routes>
  );
}

export default App;
