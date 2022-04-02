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
import client from "../helpers/axiosInstance";
import DeleteIcon from "@mui/icons-material/Delete";

function SupportList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const rowsPerPage = 5;
  const [list, setList] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [allowedPages, setAllowedPages] = useState(2);
  const [total, setTotal] = useState(5);
  const [page, setPage] = useState(rowIndex + 1);

  const { setStaffId, showActivationScreen, showDeleteScreen, getAllStaffs } =
    bindActionCreators(actionCreators, dispatch);
  const setStaffs = () => {
    try {
      const fetchData = async () => {
        const staffRes = await client.get("/support-staff");
        getAllStaffs(staffRes.data.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const { staffs } = state.user;

  useEffect(() => {
    setStaffs();
    setList(staffs);
    handlePageNumber();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffs]);
  console.log("list", list);
  const createData = (
    id,
    name,
    email,
    completedR,
    PendingR,
    status,
    active,
    del
  ) => {
    return { id, name, email, completedR, PendingR, status, active, del };
  };
  console.log(list);

  const columns = [
    { id: 0, name: "Name" },
    { id: 1, name: "Email" },
    { id: 2, name: "Completed Requests" },
    { id: 3, name: "Pending Requests" },
    { id: 4, name: "Status" },
    { id: 5, name: "" },
    { id: 6, name: "" },
  ];
  const rows = [
    {
      id: 0,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 0,
      del: true,
    },
    {
      id: 1,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 1,
      del: true,
    },
    {
      id: 2,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 0,
      del: true,
    },
    {
      id: 3,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 1,
      del: true,
    },
    {
      id: 4,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 0,
      del: true,
    },
    {
      id: 5,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 0,
      del: true,
    },
    {
      id: 5,
      name: "tester",
      email: "tester@mail.com",
      completedR: 20,
      pendingR: 30,
      status: "online",
      active: 0,
      del: true,
    },
  ];
  // const rows = list.map((company) =>
  //   createData(
  //     "company.id",
  //     "company.name",
  //     "company.phone_number",
  //     "company.support_staff.length",
  //     0,
  //     0,
  //     "view"
  //   )
  // );

  const handlePageNumber = () => {
    const remainder = rows.length % 5;
    console.log("remainder", remainder);
    if (remainder === 0) {
      setAllowedPages(parseInt(rows.length / 5));
    } else {
      console.log(rows.length / 5);
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
  // const handleView = (e, id) => {
  //   e.preventDefault();
  //   setCompanyId(id);
  //   showCompanyInfo();
  // };

  const handleActivation = (e, id) => {
    e.preventDefault();
    setStaffId(id);
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
                fontSize: "0.9rem",
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
        <Box sx={{ pb: "2rem", minHeight: "220px" }}>
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
                  pr: "0.5rem",
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
                    background: staff.active === 1 ? "green" : "red",
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
                  onClick={(e) => handleActivation(e, staff.id)}
                >
                  {staff.active === 1 ? "Activate" : "Deactivate"}
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
                  >
                    <DeleteIcon color="#110C0C" />
                  </Button>
                </Box>
              </Box>
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

export default SupportList;
