import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import client from "../Constants/helpers/axiosInstance";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function HelperScreen() {
  const state = useSelector((state) => state);
  const { helperOption_ } = state.displayState;
  const { reqId, userId, staffId_ } = state.user;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hideHelper_, getAllRequests } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const restore = async () => {
    try {
      const fetchData = async () => {
        const req = await client.get("/support-requests");
        getAllRequests(req.data.data);
      };
      fetchData();
    } catch (err) {
      const message = err.response.data.message;
      if (message === "Unauthenticated." || message === "Unauthorized") {
        navigate("/login");
      }
    }
  };
  const cancel = () => {
    hideHelper_();
  };
  const proceed = () => {
    setLoading(true);
    if (helperOption_ === "reassign") {
      client
        .patch(`/support-requests/${reqId}/reassign`, {
          staff_id: staffId_,
        })
        .then((res) => {
          restore();
          setLoading(false);
          hideHelper_();
        })
        .catch(() => {
          setLoading(false);
          toast.error("Failed to reject request !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          setLoading(false);
          hideHelper_();
        });
    } else if (helperOption_ === "complete") {
      client
        .patch(`/support-requests/${reqId}`, {
          status: "resolved",
          assigned_to: userId,
        })
        .then(() => {
          restore();
          setLoading(false);
          hideHelper_();
        })
        .catch(() => {
          setLoading(false);
          toast.error("Failed to complete request !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          setLoading(false);
          hideHelper_();
        });
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
          maxWidth: "400px",
          width: "100%",
          borderRadius: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <HelpOutlineOutlinedIcon
          sx={{ fontSize: "20rem", color: "#0257E6", textAlign: "center" }}
        />
        <Typography sx={{ textAlign: "center" }}>
          Are you sure you want to {helperOption_} this request?
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
            {loading ? <ClipLoader /> : "Yes"}
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
