import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import client from "../Constants/helpers/axiosInstance";

function AddInfo() {
  const state = useSelector((state) => state);
  const { reqId, userId, reqStatus } = state.user;
  const dispatch = useDispatch();
  const { hideAdd_ } = bindActionCreators(actionCreators, dispatch);
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);
    if (text.length < 3) {
      setErr(true);
    } else {
      setErr(false);
    }
  };
  console.log("stat", reqStatus);
  const handleSubmit = () => {
    if (text.length < 3) {
      setErr(true);
    } else {
      setErr(false);
      console.log("stat", reqStatus);
      client
        .patch(`/support-requests/${reqId}`, {
          status: reqStatus,
          assigned_to: userId,
          details: text,
        })
        .then((res) => {
          console.log(res);
          hideAdd_();
        })
        .catch((err) => console.log(err));
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
          value={text}
          onChange={handleChange}
          rows={3}
        />
        {err ? (
          <Typography sx={{ fontWeight: "300", p: "0.5rem 0", color: "red" }}>
            *Required and should be a minimum of 3 letters
          </Typography>
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "1rem ",
          }}
        >
          <Box>
            <Button onClick={() => handleSubmit()} variant="contained">
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
