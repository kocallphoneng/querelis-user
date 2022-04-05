import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function HelperScreen() {
  const state = useSelector((state) => state);
  const { staffId, helperOption } = state.user;

  const dispatch = useDispatch();

  const { hideHelper_ } = bindActionCreators(actionCreators, dispatch);

  const cancel = () => {
    hideHelper_();
  };
  const proceed = () => {
    hideHelper_();
  };

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
          maxWidth: "400px",
          width: "100%",
          borderRadius: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <HelpOutlineOutlinedIcon sx={{ fontSize: "20rem", color: "#0257E6" }} />
        <Typography>
          Are you sure you want to {helperOption} this request?
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
            pt: "1rem",
          }}
        >
          <Button
            onClick={() => proceed()}
            sx={{ background: "#0257E6", color: "white" }}
            variant="contained"
          >
            Yes
          </Button>
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

export default HelperScreen;
