import React from "react";
import Box from "@mui/material/Box";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/ResetPassword";
import Login from "./Pages/Login";
import CompulsoryPassword from "./Pages/CompulsoryChange";
import NewPassword from "./Pages/NewPassword";
import Dashboard from "./Pages/Dashboard";
import UserDashboard from "./Pages/UserDashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
      }}
    >
      <Router>
        <Routes>
          <Route path={"/"} element={<Navigate to="/login" />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
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
      {/* {loading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: "111",
            top: "0",
            background: "rgba(0, 0, 0, 0.274)",
          }}
        >
          <BeatSpinner />
        </Box>
      ) : (
        ""
      )} */}
    </Box>
  );
}

export default App;
