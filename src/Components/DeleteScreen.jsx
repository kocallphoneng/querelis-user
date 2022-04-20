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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function DeleteScreen() {
  const state = useSelector((state) => state);
  const { staffId } = state.user;
  const { loading } = state.displayState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    hideDeleteScreen,
    hideLoading,
    showLoading3,
    hideLoading3,
    getAllRequests,
    getAllStaffs,
    showLoading,
  } = bindActionCreators(actionCreators, dispatch);

  const restore = () => {
    const token = localStorage.getItem("accesstoken");
    client.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
      const fetchData = async () => {
        const staffRes = await client.get("/support-staff");
        const supReq = await client.get("/support-requests");
        getAllStaffs(staffRes.data.data);
        getAllRequests(supReq.data.data);
        hideLoading3();
      };
      fetchData();
    } catch (err) {
      hideLoading3();
      const message = err.response.data.message;
      if (message === "Unauthenticated" || message === "Unauthorized") {
        navigate("/login");
      } else {
        toast.error("Couldn't load data, please refresh !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    }
  };
  const cancel = () => {
    hideDeleteScreen();
  };
  const proceed = () => {
    showLoading();
    client
      .delete(`/support-staff/${staffId}`)
      .then(() => {
        hideLoading();
        showLoading3();
        restore();
        hideDeleteScreen();
      })
      .catch((err) => {
        toast.error("Failed to delete!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
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
            disabled={loading}
          >
            {loading ? <ClipLoader /> : "Yes"}
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
