import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import client from "../helpers/axiosInstance";

function DeleteScreen() {
  const state = useSelector((state) => state);
  const { staffId } = state.user;
  const dispatch = useDispatch();

  const { hideDeleteScreen } = bindActionCreators(actionCreators, dispatch);

  const cancel = () => {
    hideDeleteScreen();
  };
  const proceed = () => {
    client
      .delete(`/support-staff/${staffId}`)
      .then((res) => {
        console.log(res);
        hideDeleteScreen();
      })
      .catch((err) => console.log(err));
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
          maxWidth: "500px",
          width: "100%",
          borderRadius: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <HighlightOffOutlinedIcon sx={{ fontSize: "20rem", color: "red" }} />
        <Typography>Do you want delete?</Typography>
        <Box
          sx={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            pt: "1rem",
          }}
        >
          <Button
            variant="contained"
            onClick={() => proceed()}
            sx={{ background: "#0257E6", color: "white" }}
          >
            Yes
          </Button>
          <Button
            onClick={() => cancel()}
            variant="outlined"
            sx={{ border: "1px solid #0257E6", color: "#0257E6" }}
          >
            No
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default DeleteScreen;
