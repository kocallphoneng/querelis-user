import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import client from "../helpers/axiosInstance";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function Audit() {
  const state = useSelector((state) => state);
  const rowsPerPage = 10;
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([
    {
      id: 0,
      company: {},
      tel: "",
      date: "",
      cc: "",
      tikT: "",
      reolvedT: true,
      createT: "",
      status: "",
      assign: false,
      details: "",
    },
  ]);
  const [rowIndex, setRowIndex] = useState(0);
  const [allowedPages, setAllowedPages] = useState(2);
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(rowIndex + 1);

  const { requests } = state.user;
  const { reqLoading } = state.displayState;
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { showDetail_, setReqId, getAllRequests } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    setList(requests);
    handlePageNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requests]);

  const createData = (
    id,
    company,
    tel,
    date,
    cc,
    tikT,
    reolvedT,
    createT,
    status,
    assign,
    details
  ) => {
    const newT = createT.split("T")[1];
    const newT_ = newT.split(".")[0];
    const newD = `${date.slice(0, date.indexOf("T"))}\n
      ${date.slice(date.indexOf("T") + 1, date.indexOf("."))}`;
    return {
      id,
      company,
      tel,
      newD,
      cc,
      tikT,
      reolvedT,
      newT_,
      status,
      assign,
      details,
    };
  };
  const columns = [
    { id: "name", label: "Name" },
    { id: "tel", label: "Mobile Number" },
    { id: "date", label: "Date" },
    { id: "cc", label: "CC Tickect ID" },
    { id: "cat", label: "Ticket Time" },
    { id: "reolveT", label: "Created Time" },
    { id: "mcc", label: "Resolved Time" },
    { id: "mnc", label: "Status" },
    { id: "lac", label: "Assign" },
    { id: "ci", label: "Details" },
  ];
  const rows = requests.map((req) =>
    createData(
      req.id,
      req.company,
      req.phone_number,
      req.created_at,
      req.cc_ticket_id,
      "details.tikT",
      true,
      req.created_at,
      req.status,
      req.assigned_to,
      "view"
    )
  );
  const restore = async () => {
    try {
      const fetchData = async () => {
        const req = await client.get("/support-requests");
        console.log("/support-requests", req);
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
  const setView = (id) => {
    setReqId(id);
    showDetail_();
  };
  const handlePageNumber = () => {
    const remainder = rows.length % 10;
    if (remainder === 0) {
      setAllowedPages(parseInt(rows.length / 10));
    } else {
      console.log(rows / 10 + 1);
      setAllowedPages(parseInt(rows.length / 10) + 1);
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

  const handleAccept = (id) => {
    setLoading(true)
    client
      .patch(`/support-requests/${id}/assign`)
      .then(() => {
        restore()
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#110C0C",
          height: "3.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          paddingTop: "1rem",
        }}
      >
        Genenral Request
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
                width: "9%",
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
        {reqLoading ? (
          <Box sx={{width: "95%", display: "flex", justifyContent: "center", paddingTop: "1rem"}}>
            <ClipLoader />
            </Box>
        ) : (
          <Box sx={{ pb: "2rem", minHeight: "400px" }}>
            {rows.slice(rowIndex * rowsPerPage, total).map((req) => (
              <Paper
                key={req.id}
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
                    width: "9%",
                    fontSize: "0.7rem",
                    pr: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.company.name}
                </Typography>
                <Typography
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    pr: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.tel}
                </Typography>
                <Typography
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    pr: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.newD}
                </Typography>

                <Typography
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    pr: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.cc}
                </Typography>
                <Typography
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    pr: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.tikT}
                </Typography>

                <Typography
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    pr: "1rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.newT_}
                </Typography>
                <Box
                  sx={{
                    width: "9%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HourglassTopOutlinedIcon />
                </Box>

                <Box
                  sx={{
                    width: "9%",
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
                    {req.status === "pending" ? (
                      <Box
                        sx={{
                          padding: "0.3rem",
                          borderRadius: "50%",
                          mr: "1rem",
                          background: "yellow",
                        }}
                      ></Box>
                    ) : (
                      ""
                    )}
                    {req.status === "resolved" ? (
                      <Box
                        sx={{
                          padding: "0.3rem",
                          borderRadius: "50%",
                          mr: "1rem",
                          background: "green",
                        }}
                      ></Box>
                    ) : (
                      ""
                    )}
                    {req.status === "unresolved" ? (
                      <Box
                        sx={{
                          padding: "0.3rem",
                          borderRadius: "50%",
                          mr: "1rem",
                          background: "#F42C2C",
                        }}
                      ></Box>
                    ) : (
                      ""
                    )}

                    <Typography
                      sx={{
                        width: "10.1%",
                        fontSize: "0.7rem",
                        pr: "0.5rem",
                      }}
                    >
                      {req.status}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {/* background: ? "#F42C2C" : "#C4C4C4", */}
                  {!req.assign ? (
                    <button
                      style={{
                        border: "none",
                        padding: "0.5rem 0.9rem",
                        background: "green",
                        color: "#fff",
                        borderRadius: "0.2rem",
                        cursor: "pointer",
                        fontSize: "0.7rem",
                      }}
                      onClick={() => handleAccept(req.id)}
                    >
                      {loading? <ClipLoader /> :"Accept"}
                    </button>
                  ) : (
                    <Button
                      sx={{
                        color: "#fff",
                        fontSize: "0.7rem",
                        textTransform: "capitalize",
                        background: "#C4C4C4",
                        }}
                        
                      disabled
                    >
                      accept
                    </Button>
                  )}
                </Box>
                <Box
                  sx={{
                    width: "9%",
                    fontSize: "0.7rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Button
                    sx={{
                      fontSize: "0.7rem",
                      textTransform: "capitalize",
                    }}
                    onClick={() => setView(req.id)}
                  >
                    View
                  </Button>
                </Box>
              </Paper>
            ))}
          </Box>
        )}
        {requests.length < 11 ? (
          ""
        ) : (
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
        )}
      </Box>
    </Box>
  );
}

export default Audit;
