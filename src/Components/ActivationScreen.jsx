import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import client from "../helpers/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ClipLoader from "./Spinners/ClipSpinner";

function ActivationScreen() {
  const state = useSelector((state) => state);
  const { staffId, active } = state.user;
  const { loading } = state.displayState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    hideActivationScreen,
    showLoading,
    hideLoading,
    showLoading4,
    hideLoading4,
    getAllRequests,
    getAllStaffs,
  } = bindActionCreators(actionCreators, dispatch);
  const restore = () => {

    if (!localStorage.token || localStorage.user !== "company") {
      navigate("/login");
    }
    showLoading4()
    const token = localStorage.getItem("token");
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
        hideLoading4();
      };
      fetchData();
    } catch (err) {
      hideLoading4();
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
    hideActivationScreen();
  };

  const proceed = () => {
    showLoading();
    if (active === 0) {
      client
        .patch(`/support-staff/${staffId}/activate`)
        .then((res) => {
          hideLoading();
          restore();
          hideActivationScreen();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to activate !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          hideLoading();
        });
    } else if (active === 1) {
      client
        .patch(`/support-staff/${staffId}/deactivate`)
        .then(() => {
          hideLoading();
          restore();
          hideActivationScreen();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to deactivate !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
          });
          hideLoading();
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
        <Typography>{`Do you want ${
          active === 1 ? "deactivate" : "activate"
        }?`}</Typography>
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
