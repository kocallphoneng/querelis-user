import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { useSelector } from "react-redux";
import empty from "../images/void.svg";
import { data } from "./testData";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
// import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";

function AllRequestList() {
  const state = useSelector((state) => state);
  const rowsPerPage = 10;
  const [list, setList] = useState([
    {
      id: 0,
      name: "",
      tel: "",
      date: "",
      cc: "",
      cat: "",
      reoslvedT: "",
      mcc: "",
      mnc: "",
      lac: "",
      ci: "",
      status: "",
    },
  ]);
  const [rowIndex, setRowIndex] = useState(0);
  const [allowedPages, setAllowedPages] = useState(2);
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(rowIndex + 1);

  const { requests } = state.user;

  useEffect(() => {
    setList(data);
    console.log("from requests", requests);
    handlePageNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createData = (
    id,
    name,
    tel,
    date,
    cc,
    cat,
    reoslvedT,
    mcc,
    mnc,
    lac,
    ci,
    status
  ) => {
    return {
      id,
      name,
      tel,
      date,
      cc,
      cat,
      reoslvedT,
      mcc,
      mnc,
      lac,
      ci,
      status,
    };
  };

  const columns = [
    { id: "name", label: "Name" },
    { id: "tel", label: "Mobile Number" },
    { id: "date", label: "Date" },
    { id: "cc", label: "CC Tickect ID" },
    { id: "cat", label: "Category" },
    { id: "complaint", label: "Resolved Time" },
    { id: "mcc", label: "MCC" },
    { id: "mnc", label: "MNC" },
    { id: "lac", label: "LAC" },
    { id: "ci", label: "CI" },
    { id: "status", label: "Status" },
  ];

  // const rows = list.map((req) =>
  //   createData(
  //     req.id,
  //     req.company.name,
  //     req.phone_number,
  //     `${req.created_at.slice(0, req.created_at.indexOf("T"))}\n
  //       ${req.created_at.slice(
  //         req.created_at.indexOf("T") + 1,
  //         req.created_at.indexOf(".")
  //       )}`,
  //     req.cc_ticket_id,
  //     req.category,
  //     req.resolved_time,
  //     req.mcc,
  //     req.mnc,
  //     req.lac,
  //     req.ci,
  //     req.status
  //   )
  // );

  const rows = list.map((req) =>
    createData(
      req.id,
      req.name,
      req.tel,
      req.date.day,
      req.cc,
      req.cat,
      req.reoslvedT,
      req.mcc,
      req.mnc,
      req.lac,
      req.ci,
      req.status
    )
  );
  const handlePageNumber = () => {
    const remainder = list.length % 10;
    if (remainder === 0) {
      setAllowedPages(parseInt(list.length / 10));
    } else {
      setAllowedPages(parseInt(list.length / 10) + 1);
    }
  };

  const handleAddPage = (e) => {
    e.preventDefault();
    if (page < allowedPages) {
      setRowIndex(rowIndex + 1);
      setPage(page + 1);
      setTotal(total + rowsPerPage);
    }
  };
  const handleReducePage = (e) => {
    e.preventDefault();
    if (page > 1) {
      setRowIndex(rowIndex - 1);
      setPage(page - 1);
      setTotal(total - rowsPerPage);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#110C0C",
          fontSize: "1rem",
          fontWeight: "600",
          paddingBottom: "0.5rem"
        }}
      >
        Requests
      </Typography>

      <Box>
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.7rem 1rem",
            alignItems: "start",
          }}
          elevation={0}
        >
          {columns.map((col) => (
            <Typography
              sx={{
                width: "calc(100% / 11)",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
              key={col.id}
            >
              {col.label}{" "}
            </Typography>
          ))}
        </Paper>
        {list.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              margin: "2rem 0 4rem 0",
            }}
          >
            <img
              src={empty}
              style={{
                width: "150px",
                padding: "0",
                margin: "0",
              }}
              alt="...."
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: "900",
                color: "lightgray",
              }}
            >
              No request made yet!!
            </Typography>
          </Box>
        ) : (
          <Box sx={{ pb: "2rem", minHeight: "100px" }}>
            {rows.slice(rowIndex * rowsPerPage, total).map((request) => (
              <Paper
                key={request.id}
                elevation={0}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.5rem 1rem",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.name}
                </Typography>

                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.tel}
                </Typography>
                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.date}
                </Typography>

                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.cc}
                </Typography>

                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.cat}
                </Typography>

                <Box
                  sx={{
                    width: "calc(100% / 11)",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HourglassTopOutlinedIcon />
                </Box>
                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.mcc}
                </Typography>

                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.mnc}
                </Typography>
                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.lac}
                </Typography>
                <Typography
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    pr: "0.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {request.ci}
                </Typography>

                <Box
                  sx={{
                    width: "calc(100% / 11)",
                    fontSize: "0.7rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "0.3rem",
                        borderRadius: "50%",
                        mr: "1rem",
                        background:
                          request.status === "pending" ? "red" : "green",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                      }}
                    >
                      {request.status}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        )}
        {rows.length > 5 ? (
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pb: "2rem",
              }}
            >
              <SkipPreviousOutlinedIcon
                className="icon"
                onClick={(e) => handleReducePage(e)}
                style={{
                  color: "#0257E6",
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  p: " 0.2rem 0.7rem",
                  background: page !== 1 ? "#0257E6" : "#C4C4C4",
                  color: "#fff",
                  borderRadius: "0.3rem",
                  m: "0 1rem",
                  fontSize: "0.8rem",
                }}
              >
                {page}
              </Typography>
              <Typography>of</Typography>
              <Typography
                sx={{
                  p: " 0.2rem 0.7rem",
                  background: page !== allowedPages ? "#0257E6" : "#C4C4C4",
                  color: "#fff",
                  borderRadius: "0.3rem",
                  m: "0 1rem",
                  fontSize: "0.8rem",
                }}
              >
                {allowedPages}
              </Typography>
              <SkipNextOutlinedIcon
                className="icon"
                onClick={(e) => handleAddPage(e)}
                style={{
                  color: "#0257E6",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default AllRequestList;
