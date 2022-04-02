import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function ActivationScreen() {
  const state = useSelector((state) => state);
  const { staffId } = state.user;

  const dispatch = useDispatch();

  const { hideActivationScreen } = bindActionCreators(actionCreators, dispatch);

  const cancel = () => {
    hideActivationScreen()
  }
  const proceed = () => {
    hideActivationScreen()
  }

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "99999",
        background: "#110c0c75",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        left: "0",
      }}
    >
      <Paper
        sx={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <HelpOutlineOutlinedIcon sx={{ fontSize: "20rem", color: "#0257E6" }} />
        <Typography>Do you want activate?</Typography>
        <Box
          sx={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            pt: "1rem"
          }}
        >
          <Button onClick={()=> proceed()} sx={{ background: "#0257E6", color: "white" }}>Yes</Button>
          <Button
            onClick={() => cancel()}
            variant="outline"
            sx={{ border: "1px solid #0257E6", color: "#0257E6" }}
          >
            No
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ActivationScreen;
