import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, fabClasses, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function AddInfo() {
    const dispatch = useDispatch();
    const { hideAdd_, showHelper_, showAdd_ } = bindActionCreators(
      actionCreators,
      dispatch
    );
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
          maxWidth: "685px",
          width: "100%",
          borderRadius: "1.5rem",
          fontSize: "0.7rem",
          position: "relative",
          padding: "1.2rem 1.8rem",
        }}
      >
        <Typography sx={{ fontWeight: "600", pb: "1rem" }}>
          Add Information
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Type here..."
          id="outlined-multiline-static"
          label=""
          multiline
          rows={3}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "1rem ",
          }}
        >
          <Box>
            <Button onClick={() => hideAdd_()} variant="contained">
              Add
            </Button>
            <Button
              onClick={() => hideAdd_()}
              variant="outlined"
              sx={{ marginLeft: "1rem" }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default AddInfo;
