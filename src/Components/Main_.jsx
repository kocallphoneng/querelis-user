import React from "react";
import Box from "@mui/material/Box";
import Cards from "./Cards_";
import RequestList from "./RequestList_";

function Main() {
  return (
    <Box sx={{ width: "100%", p: "0", m: "0", transitionDuration: "4000ms" }}>
      <Cards />
      <RequestList />
    </Box>
  );
}

export default Main;
