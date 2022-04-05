import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, fabClasses } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function Detail() {
  const state = useSelector((state) => state);
  //   const { companies, companyId } = state.user;
  const [company, setCompany] = useState({
    name: "testerman",
    number: "0019202",
    date: "DD/MM/YYYY",
    cc: "Badman cc",
    cat: "Badman Badman",
    complaints: "mx nkxkkxk kxkxkkxkne ",
    mcc: "749029i49994994",
    mnc: "4999499949949",
    lac: "399939993993939",
    createdT: "00:00:00",
  });
  const dispatch = useDispatch();
  const { hideDetail_, showHelper_, showAdd_ } = bindActionCreators(
    actionCreators,
    dispatch
  );

  //   const display = () => {
  //     companies.forEach((company) => {
  //       if (company.id === companyId) {
  //         setCompany(company);
  //       }
  //     });
  //   };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   useEffect(() => display(), []);
  const [viewOptions, setViewOptions] = useState(false);
  const [add, setAdd] = useState(true);
  const [reject, setReject] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleOption = (e, select) => {
    e.preventDefault();
    if (select === "add") {
      setAdd(true);
      setReject(false);
      setComplete(false);
      showAdd_();
    } else if (select === "reject") {
      setAdd(false);
      setReject(true);
      setComplete(false);
      showHelper_("reject");
    } else if (select === "complete") {
      setAdd(false);
      setReject(false);
      setComplete(true);
      showHelper_("complete");
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
          maxWidth: "491px",
          width: "100%",
          borderRadius: "1.5rem",
          fontSize: "0.7rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid #C4C4C4",
            p: "1rem 1.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Details
          </Typography>
          <MoreVertOutlinedIcon
            onClick={() => setViewOptions(!viewOptions)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        {viewOptions ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              right: "1.5rem",
              top: "3.2rem",
              borderRadius: "0.5rem",
              background: "#fff",
              padding: "0.3rem ",
              border: "1px solid #C4C4C4",
            }}
          >
            <Typography
              sx={{
                padding: "0.5rem 2.5rem 0.5rem 1rem",
                color: add ? "#0257E6" : "#C4C4C4",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                background: add ? "rgba(2, 87, 230, 0.4)" : "transparent",
              }}
              onClick={(e) => handleOption(e, "add")}
            >
              Add Information
            </Typography>
            <Typography
              sx={{
                padding: "0.5rem 2.5rem 0.5rem 1rem",
                color: reject ? "#0257E6" : "#C4C4C4",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                background: reject ? "rgba(2, 87, 230, 0.4)" : "transparent",
              }}
              onClick={(e) => handleOption(e, "reject")}
            >
              Reject
            </Typography>
            <Typography
              sx={{
                padding: "0.5rem 2.5rem 0.5rem 1rem",
                color: complete ? "#0257E6" : "#C4C4C4",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                background: complete ? "rgba(2, 87, 230, 0.4)" : "transparent",
              }}
              onClick={(e) => handleOption(e, "complete")}
            >
              Complete
            </Typography>
          </Box>
        ) : (
          ""
        )}
        <Box sx={{ p: "1rem  1.5rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              Name
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              phone number
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.number}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              Date
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.date}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              CC Ticket ID
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.cc}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              Category
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.cat}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              Complaint
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.complaints}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              MCC
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.mcc}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              MNC
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.mnc}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              LAC
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.lac}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              pb: "0.8rem",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
              Created Time
            </Typography>
            <Typography sx={{ width: "130px", fontSize: "0.8rem" }}>
              {company.createdT}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              pb: "1rem",
            }}
          >
            <Button
              onClick={() => hideDetail_()}
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

export default Detail;
