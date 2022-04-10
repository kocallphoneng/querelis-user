import React from 'react'
import Box from "@mui/material/Box";
import Cards from './Cards';
import SupportList from "./SupportList"
import RequestList from './RequestList';

function Main() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        p: "0",
        m: "0",
        transitionDuration: "4000ms",
      }}
    >
      <Cards />
      <SupportList />
      <RequestList />
    </Box>
  );
}

export default Main