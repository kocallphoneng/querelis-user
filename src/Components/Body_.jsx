import React from "react";
import Box from "@mui/material/Box";
import Main from "./Main_";
import ChangePass from "./ChangePass";
import Notification from "./Notication";
import AcceptedRequests from "./AcceptedRequests_"
import { useSelector } from "react-redux";

function Body() {
  const state = useSelector((state) => state);

  const { accepted,  dashboard, password, notify } =
    state.displayState;
  return (
    <Box sx={{ width: "100%", p: "1.5rem", pt: "6rem" }}>
      {dashboard ? <Main /> : ""}
      {password ? <ChangePass /> : ""}
      {accepted ? <AcceptedRequests /> : ""}
      {notify ? <Notification /> : ""}
    </Box>
  );
}

export default Body;
