import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Success({ reg, Icon, type }) {
  const dispatch = useDispatch();

  const { hideCreateSuccess, hideEditSuccess, hidePasswordSuccess } =
    bindActionCreators(actionCreators, dispatch);
  const handleClick = () => {
    if (type === "create") {
      hideCreateSuccess();
    } else if (type === "edit") {
      hideEditSuccess();
    } else {
      hidePasswordSuccess();
    }
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
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {Icon === "CheckOutlinedIcon" ? (
          <CheckCircleOutlineIcon
            sx={{
              fontSize: "15rem",
              color: "#0257E6",
            }}
          />
        ) : (
          ""
        )}
        {Icon === "CloudDoneIcon" ? (
          <CloudDoneIcon
            sx={{
              fontSize: "15rem",
              color: "#0257E6",
            }}
          />
        ) : (
          ""
        )}
        <Typography sx={{ pt: "1rem" }}>{reg}</Typography>
        <Button
          variant="contained"
          sx={{ mt: "1rem" }}
          onClick={() => handleClick()}
        >
          OK
        </Button>
      </Paper>
    </Box>
  );
}

export default Success;
