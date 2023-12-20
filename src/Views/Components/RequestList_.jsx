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
import client from "../Constants/helpers/axiosInstance";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { toast } from "react-toastify";

function Audit() {
  const state = useSelector((state) => state);
  const [id, setId] = useState(0);
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
  const [loading, setLoading] = useState(false);
  console.log(requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showDetail_, setReqId, getAllRequests, setUssd } = bindActionCreators(
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
    createdT,
    resolvedT,
    status,
    assign
  ) => {
    // const newT = createT.split("T")[1];
    // const newT_ = newT.split(".")[0];
    // const newD = `${date.slice(0, date.indexOf("T"))}\n
    //   ${date.slice(date.indexOf("T") + 1, date.indexOf("."))}`;
    // const dateString = createT;

    return {
      id,
      company,
      tel,
      date,
      cc,
      createdT,
      resolvedT,
      status,
      assign,
    };
  };
  const columns = [
    { id: "name", label: "Name" },
    { id: "tel", label: "Mobile Number" },
    { id: "date", label: "Date" },
    { id: "cc", label: "CC Ticket ID" },
    { id: "cat", label: "Ticket Time" },
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
      req.date,
      req.cc_ticket_id,
      req.created_at,
      req.resolved_time,
      req.status,
      req.assigned_to
    )
  );

  const restore = async () => {
    try {
      const fetchData = async () => {
        const req = await client.get("/support-requests");
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
    setId(id);
    setLoading(true);
    client
      .patch(`/support-requests/${id}/assign`)
      .then(() => {
        restore();
        toast.success("Request Accepted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          delay: 500,
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          delay: 500,
        });
      });
  };
  const today = new Date();
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
          <Box
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
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
                    textAlign: "center",
                  }}
                >
                  {req.date}
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
                  {req.status !== "pending" ? (
                    <>
                      <Moment diff={req.createdT} unit="hours">
                        {req.resolvedT}
                      </Moment>{" "}
                      hours
                    </>
                  ) : (
                    <>
                      <Moment diff={req.createdT} unit="hours">
                        {today}
                      </Moment>{" "}
                      hours
                    </>
                  )}
                </Typography>

                <Box
                  sx={{
                    width: "9%",
                    display: "flex",
                    fontSize: "0.8rem",
                  }}
                >
                  {req.status !== "resolved" && !req.resolvedT ? (
                    <HourglassTopOutlinedIcon />
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Moment diff={req.createdT} unit="hours">
                        {req.resolvedT}
                      </Moment>
                      {"  "}
                      <p style={{ paddingLeft: "0.5rem" }}>hours</p>
                    </Box>
                  )}
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
                      {loading && id === req.id ? <ClipLoader /> : "Accept"}
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
                    onClick={() => {
                      setView(req.id);
                      setUssd(req.ussd);
                    }}
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
