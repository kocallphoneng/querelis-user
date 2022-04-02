import React from "react";
import Box from "@mui/material/Box";
import Main from "./Main";
import NewStaff from "./RegNewStaff";
import Audit from "./Audit";
import ChangePass from "./ChangePass";
import Summary from "./Summary";
import Notification from "./Notication";
import { useSelector } from "react-redux";

function Body() {
  const state = useSelector((state) => state);
  
  const { audit, staff, dashboard, password, summary, notify } = state.displayState;

  return (
    <Box sx={{ width: "100%", p: "1.5rem", pt: "6rem" }}>
      {dashboard ? <Main /> : ""}
      {staff ? <NewStaff /> : ""}
      {audit ? <Audit /> : ""}
      {password ? <ChangePass /> : ""}
      {summary ? <Summary /> : ""}
      {notify ? <Notification /> : ""}
    </Box>
  );
}

export default Body;
