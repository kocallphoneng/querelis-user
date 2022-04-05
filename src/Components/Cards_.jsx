import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import client from "../helpers/axiosInstance";
import { useSelector } from "react-redux";

function Cards() {
  const [details, setDetails] = useState({
    totalReq: 0,
    companies: 0,
    staffs: 0,
    unansweredReq: 0,
  });
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
      .get("/admin-statistics")
      .then((res) =>
        setDetails({
          totalReq: res.data.no_of_companies,
          companies: res.data.no_of_request_in_the_month,
          staffs: res.data.no_of_support_staff,
          unansweredReq: res.data.no_of_unanswered_request,
        })
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    support();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            Total Request
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            50
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            Total Request Answererd By Staff
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            50
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "196px",
            height: "112px",
            width: "100%",
            padding: "1.5rem",
            background: "#F42C2C",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          elevation={0}
        >
          <Typography sx={{ color: "#fff" }}>Offline</Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
          }}
          elevation={0}
        >
          <Typography
            sx={{ fontWeight: "600", lineHeight: "25px", height: "40px" }}
          >
            Total unanswered Request
          </Typography>
          <Typography
            sx={{ fontWeight: "900", color: "#0257E6", fontSize: "45px" }}
          >
            50
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default Cards;
