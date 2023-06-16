import React from "react";
import Box from "@mui/material/Box";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/ResetPassword";
import Login from "./Pages/Login";
import CompulsoryPassword from "./Pages/CompulsoryChange";
import NewPassword from "./Pages/NewPassword";
import DashboardCtrl from "./Pages/DashboardCtrl";
import UserDashboard from "./Pages/UserDashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Navigate to="/login" />} />
        <Route path={"/dashboard"} element={<DashboardCtrl />} />
        <Route path={"/userdashboard"} element={<UserDashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/resetPassword"} element={<Verification />} />
        <Route path={"/createnewpassword"} element={<NewPassword />} />
        <Route path={"/forgotPassword"} element={<ForgotPassword />} />
        <Route
          path={"/compulsorypasswordreset"}
          element={<CompulsoryPassword />}
        />
      </Routes>
    </Router>
  );
}

export default App;
