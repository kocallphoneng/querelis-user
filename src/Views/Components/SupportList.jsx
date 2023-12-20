import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import DeleteIcon from "@mui/icons-material/Delete";
import empty from "../images/empty.svg";
import ClipLoader from "../Components/Spinners/ClipSpinner";
import "react-toastify/dist/ReactToastify.css";

function SupportList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const rowsPerPage = 5;
  const [list, setList] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [allowedPages, setAllowedPages] = useState(2);
  const [total, setTotal] = useState(5);
  const [page, setPage] = useState(rowIndex + 1);
  const { setStaffId, setActive, showActivationScreen, showDeleteScreen,  } =
    bindActionCreators(actionCreators, dispatch);

  const { staffs, staffId } = state.user;
  const { supLoading, delLoading, activeLoading } = state.displayState;
 
  useEffect(() => {
    setList(staffs);
    handlePageNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffs]);
  const createData = (
    id,
    name,
    email,
    completedR,
    pendingR,
    status,
    active,
    del
  ) => {
    return { id, name, email, completedR, pendingR, status, active, del };
  };
  const columns = [
    { id: 0, name: "Name" },
    { id: 1, name: "Email" },
    { id: 2, name: "Completed Requests" },
    { id: 3, name: "Pending Requests" },
    { id: 4, name: "Status" },
    { id: 5, name: "" },
    { id: 6, name: "" },
  ];
  const rows = list.map((staff) =>
    createData(
      staff.id,
      staff.name,
      staff.email,
      0,
      0,
      "offline",
      staff.is_active,
      true
    )
  );
  const handlePageNumber = () => {
    const remainder = rows.length % 5;
    if (remainder === 0) {
      setAllowedPages(parseInt(rows.length / 5));
    } else {
      setAllowedPages(parseInt(rows.length / 5) + 1);
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
  const handleActivation = (e, id, active) => {
    e.preventDefault();
    setStaffId(id);
    setActive(active);
    showActivationScreen();
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    setStaffId(id);
    showDeleteScreen();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#110C0C",
          height: "3.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          pt: "1rem",
        }}
        variant="h6"
        component="div"
      >
        Supports
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
                maxWidth: "14.29%",
                width: "100%",
                fontSize: "0.7rem",
                fontWeight: "600",
                textTransform: "capitalize",
                pr: "1rem",
              }}
              key={col.id}
            >
              {col.name}{" "}
            </Typography>
          ))}
        </Paper>
        {supLoading ? (
          <Box
            sx={{
              width: "100%",
              height: "90px",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <ClipLoader />
          </Box>
        ) : (
          <>
            {staffs.length === 0 ? (
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
                {rows.slice(rowIndex * rowsPerPage, total).map((staff) => (
                  <Paper
                    key={staff.id}
                    elevation={0}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 1rem",
                      alignItems: "flex-start",
                      marginTop: "0.5rem",
                    }}
                  >
                    <Typography
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "0.5rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {staff.name}
                    </Typography>
                    <Typography
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "1rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {staff.email}
                    </Typography>
                    <Typography
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "0.5rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {staff.completedR}
                    </Typography>
                    <Typography
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "0.5rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {staff.pendingR}
                    </Typography>
                    <Typography
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "0.5rem",
                        color: staff.status === "online" ? "green" : "red",
                      }}
                    >
                      {staff.status}
                    </Typography>
                    <Box
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "0.5rem",
                      }}
                    >
                      <button
                        style={{
                          padding: "0.3rem 1rem",
                          background: staff.active === 0 ? "green" : "red",
                          color: "white",
                          textAlign: "center",
                          fontSize: "0.7rem",
                          fontWeight: "600",
                          pr: "0.5rem",
                          width: "100%",
                          cursor: "pointer",
                          border: "none",
                          borderRadius: "0.3rem",
                        }}
                        disabled={activeLoading}
                        onClick={(e) =>
                          handleActivation(e, staff.id, staff.active)
                        }
                      >
                        {activeLoading && staffId === staff.id ? (
                          <ClipLoader />
                        ) : (
                          <>{staff.active === 0 ? "Activate" : "Deactivate"}</>
                        )}
                      </button>
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "14.29%",
                        width: "100%",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        textTransform: "capitalize",
                        pr: "0.5rem",
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          sx={{ background: "transparent", color: "#110C0C" }}
                          onClick={(e) => handleDelete(e, staff.id)}
                          disabled={delLoading}
                        >
                          {delLoading ? (
                            <ClipLoader />
                          ) : (
                            <DeleteIcon color="#110C0C" />
                          )}
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            )}
          </>
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

export default SupportList;
