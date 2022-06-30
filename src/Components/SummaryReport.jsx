import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function CompanyRequests() {
  const state = useSelector((state) => state);
  const { summaryDate, summaryReport } = state.user;
  
  const dispatch = useDispatch();
console.log(summaryReport)
  const { hideSummaryReport } = bindActionCreators(actionCreators, dispatch);

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
          maxWidth: "600px",
          width: "100%",
          borderRadius: "1.5rem",
        }}
      >
        <Typography
          sx={{
            p: "1.5rem  2rem 0 3rem",
            fontSize: "1.5rem",
          }}
        >
          STAFF REPORT
        </Typography>
        <Typography
          sx={{
            p: "0.3rem  2rem 1rem 3rem",
            fontSize: "0.7rem",
            borderBottom: "1px solid gray",
          }}
        >
          {summaryDate}
        </Typography>
        <Box sx={{ p: "1rem  3rem" }}>
          <Typography
            sx={{
              pb: "1rem",
              fontSize: "1.5rem",
            }}
          >
            Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pb: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>
              Number of completed requests:
            </Typography>
            <Typography>{summaryReport.comleted}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pb: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>
              Number of uncompleted requests:
            </Typography>
            <Typography>{summaryReport.uncompleted}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pb: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>
              Number of assigned request:
            </Typography>
            <Typography>{summaryReport.assigned}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pb: "1rem",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Staff status:</Typography>
            <Typography>{summaryReport.status}</Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              p: "1rem 0",
              pb: "2rem",
            }}
          >
            <Button
              onClick={() => hideSummaryReport()}
              sx={{ p: "0.5rem, 0.3rem" }}
              variant="contained"
            >
              OK
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default CompanyRequests;
