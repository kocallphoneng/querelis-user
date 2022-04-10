import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import client from "../helpers/axiosInstance";
import { useSelector } from "react-redux";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";

function Cards() {
  const [details, setDetails] = useState({
    totalReq: 0,
    answered: 0,
    active: 0,
    unanswered: 0,
    allowed: 0,
  });
  const [scroll, setScroll] = useState(false);
  const state = useSelector((state) => state);
  const { auth } = state.user;
  const support = () => {
    client.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${auth.access_token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    client
      .get("/company-statistics")
      .then((res) => {
        setDetails({
          totalReq: res.data.no_of_request_in_the_month,
          allowed: res.data.no_allowed_support_staff,
          answered: res.data.no_of_requests_answered,
          active: res.data.no_of_active_support_staff,
          unansweredReq: res.data.no_of_unanswered_request,
        });
      })
      .catch((err) => console.log(err));
  };
  console.log(scroll);
  useEffect(() => {
    support();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {scroll ? (
        <Box
          sx={{
            background: "#0257E6",
            position: "absolute",
            borderRadius: "50%",
            padding: "0.5rem",
            left: "0",
            zIndex: "111",
            cursor: "pointer",
          }}
        >
          <SkipPreviousOutlinedIcon
            sx={{ fontSize: "2rem", color: "#fff" }}
            onClick={() => setScroll(false)}
          />
        </Box>
      ) : (
        ""
      )}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transform: scroll ? "translateX(-25%)" : "translateX(1%)",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {/* <Box sx={{ width: "300px" }}></Box> */}
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            minWidth: "230px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            No of Requests In The Month
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            {details.totalReq}
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            marginLeft: "1.5rem",
            minWidth: "230px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            No of Answered Requests
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            {details.answered}
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            marginLeft: "1.5rem",
            minWidth: "230px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            No of Active Support Staff
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            {details.active}
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            marginLeft: "1.5rem",
            minWidth: "230px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            No of Allowed Support Staff
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            {details.allowed}
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            marginLeft: "1.5rem",
            minWidth: "230px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            No of Unanswered Request
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            {details.unansweredReq}
          </Typography>
        </Paper>
      </Box>
      {!scroll ? (
        <Box
          sx={{
            background: "#0257E6",
            position: "absolute",
            borderRadius: "50%",
            padding: "0.5rem",
            right: "1rem",
            cursor: "pointer",
          }}
        >
          <SkipNextOutlinedIcon
            sx={{ fontSize: "2rem", color: "#fff" }}
            onClick={() => setScroll(true)}
          />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Cards;
