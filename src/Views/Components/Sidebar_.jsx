import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

function Sidebar() {
  const navigate = useNavigate();
  const select = {
    background: "white",
    display: "flex",
    width: "100%",
    padding: "1.1rem 0",
    alignItems: "center",
    transitionDuration: "500ms",
  };
  const unSelect = {
    background: "transparent",
    display: "flex",
    width: "100%",
    padding: "1.3rem 0",
    alignItems: "center",
  };
  const selectText = {
    fontSize: "1.1rem",
    color: "#0257E6",
    fontWeight: "800",
  };
  const unSelectText = {
    fontSize: "0.9rem",
    color: "white",
    fontWeight: "500",
  };
  const selectIcon = {
    width: "2rem",
    m: "0 1rem",
    fontSize: "1.7rem",
    color: "#0257E6",
    fontWeight: "600",
  };
  const unSelectIcon = {
    width: "2rem",
    m: "0 1rem",
    fontSize: "1.3rem",
    color: "white",
    fontWeight: "600",
  };
  const [display, setDisplay] = useState({
    audit: false,
    accepted: false,
    dashboard: false,
    password: false,
    summary: false,
    logout: false,
    notify: false,
  });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setDisplay(state.displayState);
  }, [state]);
  const { accepted, dashboard, password } = display;

  const { setAccepted, setDashboard, setPassword } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "289px",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "0",
        background: "#0257E6",
        cursor: "pointer",
        zIndex: "999",
      }}
    >
      <Box sx={{ width: "100%", height: "4rem" }}>
        <img src={logo} style={{ width: "70%", height: "4rem" }} alt="..." />
      </Box>
      <Box
        onClick={(e) => {
          e.preventDefault();
          setDashboard();
        }}
        sx={dashboard ? select : unSelect}
      >
        <DashboardOutlinedIcon sx={dashboard ? selectIcon : unSelectIcon} />
        <Typography sx={dashboard ? selectText : unSelectText}>
          Dashboard
        </Typography>
      </Box>
      <Box
        onClick={(e) => {
          e.preventDefault();
          setAccepted();
        }}
        sx={accepted ? select : unSelect}
      >
        <DomainAddOutlinedIcon sx={accepted ? selectIcon : unSelectIcon} />
        <Typography sx={accepted ? selectText : unSelectText}>
          Accepted Requests
        </Typography>
      </Box>

      <Box
        onClick={(e) => {
          e.preventDefault();
          setPassword();
        }}
        sx={password ? select : unSelect}
      >
        <LockClockOutlinedIcon sx={password ? selectIcon : unSelectIcon} />
        <Typography sx={password ? selectText : unSelectText}>
          Change Password
        </Typography>
      </Box>

      <Box
        sx={display.logout ? select : unSelect}
        onClick={() => {
          setDisplay({ ...state, logout: true });
          localStorage.clear();
          navigate("/login");
        }}
      >
        <LogoutSharpIcon sx={display.logout ? selectIcon : unSelectIcon} />
        <Typography sx={display.logout ? selectText : unSelectText}>
          Log Out
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
