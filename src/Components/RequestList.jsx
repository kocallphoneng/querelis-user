import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { useSelector } from "react-redux";

function RequestList() {
  const state = useSelector((state) => state);
  const rowsPerPage = 10;
  const [list, setList] = useState([
    {
      id: 0,
      name: "",
      tel: 0,
      date: "",
      cc: 0,
      cat: "",
      complaint: "",
      mcc: 0,
      mnc: 0,
      status: 0,
      support: 0,
    },
  ]);
  const [rowIndex, setRowIndex] = useState(0);
  const [allowedPages, setAllowedPages] = useState(2);
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(rowIndex + 1);

  const { auditTrail } = state.user;

  useEffect(() => {
    setList(auditTrail);
    console.log("from audit", auditTrail);
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
    complaint,
    mcc,
    mnc,
    status,
    support
  ) => {
    return {
      id,
      name,
      tel,
      date,
      cc,
      cat,
      complaint,
      mcc,
      mnc,
      status,
      support,
    };
  };
  console.log("list", list);
  // complaint, mcc, mnc, status, support;
  const columns = [
    { id: "name", label: "Name" },
    { id: "tel", label: "Mobile Number" },
    { id: "date", label: "Date" },
    { id: "cc", label: "CC Tickect ID" },
    { id: "cat", label: "Category" },
    { id: "complaint", label: "Complaints" },
    { id: "mcc", label: "MCC" },
    { id: "mnc", label: "MNC" },
    { id: "status", label: "Status" },
    { id: "support", label: "Support Staff" },
  ];
  const rows = [
    {
      id: 0,
      name: "testrett",
      number: 399333,
      date: "39e003",
      cc: 3939,
      cat: "dvjnidvinin",
      complaint: "kdddddddvvvvvvvvvvvvneffeiiefijijefijefefifijiefin",
      mcc: 0,
      mnc: 75,
      status: "pending",
      support: 20,
    },
    {
      id: 1,
      name: "testrett",
      number: 399333,
      date: "39e003",
      cc: 3939,
      cat: "dvjnidvinin",
      complaint: "kdddddddvvvvvvvvvvvvneffeiiefijijefijefefifijiefin",
      mcc: 0,
      mnc: 75,
      status: "completed",
      support: 20,
    },
    {
      id: 2,
      name: "testrett",
      number: 399333,
      date: "39e003",
      cc: 3939,
      cat: "dvjnidvinin",
      complaint: "kdddddddvvvvvvvvvvvvneffeiiefijijefijefefifijiefin",
      mcc: 0,
      mnc: 75,
      status: "pending",
      support: 20,
    },
    {
      id: 3,
      number: 399333,
      name: "testrett",
      date: "39e003",
      cc: 3939,
      cat: "dvjnidvinin",
      complaint: "kdddddddvvvvvvvvvvvvneffeiiefijijefijefefifijiefin",
      mcc: 0,
      mnc: 75,
      status: "completed",
      support: 20,
    },
  ];
  //   const rows = auditTrail.map((company) =>
  //     createData(
  //       company.id,
  //       company.company.name,
  //       company.phone_number,
  //       `${company.created_at.slice(0, company.created_at.indexOf("T"))}\n
  //       ${company.created_at.slice(
  //         company.created_at.indexOf("T") + 1,
  //         company.created_at.indexOf(".")
  //       )}`,
  //       company.cc_ticket_id,
  //       company.category,
  //       company.complaint,
  //       company.mcc,
  //       company.mnc,
  //       company.lac,
  //       company.ci,
  //       company.status
  //     )
  //   );

  const handlePageNumber = () => {
    const remainder = auditTrail.length % 5;
    if (remainder === 0) {
      setAllowedPages(parseInt(auditTrail.length / 10));
    } else {
      console.log(auditTrail.length / 5 + 1);
      setAllowedPages(parseInt(auditTrail.length / 10) + 1);
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
  console.log(total);
  console.log("total", total);
  console.log("rowIndex", rowIndex);

  const handleReducePage = (e) => {
    e.preventDefault();
    if (page > 1) {
      setRowIndex(rowIndex - 1);
      setPage(page - 1);
      setTotal(total - rowsPerPage);
    }
  };

  return (
    <Box sx={{ width: "100%", mt: "4rem" }}>
      <Typography
        sx={{
          color: "#110C0C",
          height: "3.5rem",
          fontSize: "1rem",
          fontWeight: "600",
        }}
        variant="h6"
        component="div"
      >
        Requests
      </Typography>
      <Box>
        <Paper
          sx={{
            width: "100",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "0.7rem 1rem",
            alignItems: "start",
          }}
          elevation={0}
        >
          {columns.map((col) => (
            <Typography
              sx={{
                width: "10.1%",
                fontSize: "0.75rem",
                fontWeight: "700",
                textTransform: "capitalize",
                pr: "0.5rem",
              }}
              key={col.id}
            >
              {col.label}{" "}
            </Typography>
          ))}
        </Paper>
        <Box sx={{ pb: "2rem", minHeight: "200px" }}>
          {rows.slice(rowIndex * rowsPerPage, total).map((request) => (
            <Paper
              key={request.id}
              elevation={0}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                padding: "0.5rem 1rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  width: "10.1%",
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
                  width: "10.1%",
                  fontSize: "0.7rem",
                  pr: "0.5rem",
                }}
              >
                {request.number}
              </Typography>
              <Typography
                sx={{
                  width: "10.1%",
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
                  width: "10.1%",
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
                  width: "10.1%",
                  fontSize: "0.7rem",
                  pr: "0.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {request.cat}
              </Typography>

              <Typography
                sx={{
                  width: "10.1%",
                  fontSize: "0.7rem",
                  pr: "0.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {request.complaint}
              </Typography>

              <Typography
                sx={{
                  width: "10.1%",
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
                  width: "10.1%",
                  fontSize: "0.7rem",
                  pr: "0.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {request.mnc}
              </Typography>

              <Box
                sx={{
                  width: "10.1%",
                  fontSize: "0.7rem",
                  pr: "0.5rem",
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
                      width: "10.1%",
                      fontSize: "0.7rem",
                      pr: "0.5rem",
                    }}
                  >
                    {request.status}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  width: "10.1%",
                  fontSize: "0.7rem",
                  pr: "0.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {request.support}
              </Typography>
            </Paper>
          ))}
        </Box>
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

export default RequestList;
