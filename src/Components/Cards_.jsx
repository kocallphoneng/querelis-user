import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import client from "../helpers/axiosInstance";
// import { useSelector } from "react-redux";
import ClipLoader from "../Components/Spinners/ClipSpinner";
import "react-toastify/dist/ReactToastify.css";

function Cards() {
  const [details, setDetails] = useState({
    totalReq: 0,
    answered: 0,
    unansweredReq: 0,
  });
  // const state = useSelector((state) => state);
  // const { auth } = state.user;
  const [loading, setLoading] = useState(false);

  const support = () => {
    setLoading(true);
    
    client
      .get("/support-staff-statistics")
      .then((res) => {
        setDetails({
          totalReq: res.data.no_of_request_in_the_month,
          answered: res.data.no_of_requests_answered_by_staff,
          unansweredReq: res.data.no_of_unanswered_request,
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    support();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
            marginRight: "2rem",
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
            {loading ? <ClipLoader /> : details.totalReq}
          </Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
            marginRight: "2rem",
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
            {loading ? <ClipLoader /> : details.answered}
          </Typography>
        </Paper>
        {/* <Paper
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
        </Paper> */}
        <Paper
          sx={{
            borderRadius: "0.5rem",
            maxWidth: "250px",
            height: "143px",
            width: "100%",
            padding: "1.5rem",
            marginRight: "2rem",
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
            {loading ? <ClipLoader /> : details.unansweredReq}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default Cards;
