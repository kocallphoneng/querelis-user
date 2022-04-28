import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import client from "../helpers/axiosInstance";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

function Detail() {
  const state = useSelector((state) => state);
  const { reqId, staffId_, ussd } = state.user;
  const { accepted, loading5 } = state.displayState;
  const [request, setRequest] = useState({
    name: "",
    number: "",
    date: "",
    cc: "",
    cat: "",
    complaints: "",
    mcc: "",
    mnc: "",
    lac: "",
    createdT: "",
    details: "",
  });
  const [staffs, setStaffs] = useState([]);
  const dispatch = useDispatch();
  const {
    hideDetail_,
    showHelper_,
    showAdd_,
    setUserId,
    setReqStat,
    showLoading5,
    hideLoading5,
    setStaffId_
  } = bindActionCreators(actionCreators, dispatch);
  const display = () => {
    showLoading5();
    client
      .get(`/support-requests/${reqId}`)
      .then((res) => {
        console.log(res);
        setRequest({
          name: res.data.data.company.name,
          number: res.data.data.phone_number,
          date: res.data.data.date,
          cc: res.data.data.cc_ticket_id,
          cat: res.data.data.category,
          complaints: res.data.data.complaint,
          mcc: res.data.data.mcc,
          mnc: res.data.data.mnc,
          lac: res.data.data.lac,
          createdT: `${res.data.data.created_at.slice(
            0,
            res.data.data.created_at.indexOf("T")
          )} /
      ${res.data.data.created_at.slice(
        res.data.data.created_at.indexOf("T") + 1,
        res.data.data.created_at.indexOf(".")
      )}`,
          details: res.data.data.details,
        });
        setReqStat(res.data.data.status);
        setUserId(res.data.data.assigned_to.id);
        hideLoading5();
      })
      .catch((err) => {
        toast.error("Couldn't load data !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        hideLoading5();
      });
  };
  const getSupportStaffs = () => {
    client
      .get(`/support-staff`)
      .then((res) => {
        console.log(`/support-staff`, res);
        setStaffs(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    display();
    getSupportStaffs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [viewOptions, setViewOptions] = useState(false);
  const [add, setAdd] = useState(true);
  const [reassign, setReassign] = useState(false);
  const [reject, setReject] = useState(false);
  const [complete, setComplete] = useState(false);
  const [staff, setStaff] = useState(false);

  const handleOption = (e, select) => {
    e.preventDefault();
    if (select === "add") {
      setAdd(true);
      setReject(false);
      setComplete(false);
      setStaff(false);
      showAdd_();
    } else if (select === "reject") {
      setAdd(false);
      setReject(true);
      setComplete(false);
      setStaff(true);
    } else if (select === "complete") {
      setAdd(false);
      setReject(false);
      setComplete(true);
      setStaff(false);
      showHelper_("complete");
    }
  };
  const handleReassign = (id) => {
    setReassign(true)
    setStaffId_(id)
    console.log(id)
    showHelper_("reassign");
  }
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
          {accepted ? (
            <MoreVertOutlinedIcon
              onClick={() => setViewOptions(!viewOptions)}
              sx={{ cursor: "pointer", transitionDuration: "500ms" }}
            />
          ) : (
            ""
          )}
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
              transitionDuration: "500ms",
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
                transitionDuration: "500ms",
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
                transitionDuration: "500ms",
              }}
              onClick={(e) => handleOption(e, "reject")}
            >
              Reassign
            </Typography>

            <Typography
              sx={{
                padding: "0.5rem 2.5rem 0.5rem 1rem",
                color: complete ? "#0257E6" : "#C4C4C4",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                background: complete ? "rgba(2, 87, 230, 0.4)" : "transparent",
                transitionDuration: "500ms",
              }}
              onClick={(e) => handleOption(e, "complete")}
            >
              Complete
            </Typography>
          </Box>
        ) : (
          ""
        )}
        {staff && viewOptions ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              right: "-9rem",
              top: "6rem",
              borderRadius: "0.5rem",
              background: "#fff",
              padding: "0.3rem ",
              border: "1px solid #C4C4C4",
              transitionDuration: "500ms",
            }}
          >
            {staffs.length > 0
              ? staffs.map((staff_) => (
                  <Typography
                    key={staff_.id}
                    sx={{
                      padding: "0.5rem 2.5rem 0.5rem 1rem",
                      color: add ? "#0257E6" : "#C4C4C4",
                      borderRadius: "0.5rem",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      background:
                        reassign && staffId_ === staff_.id
                          ? "rgba(2, 87, 230, 0.4)"
                          : "transparent",
                      transitionDuration: "500ms",
                    }}
                    onClick={() => handleReassign(staff_.id)}
                  >
                    {staff_.name}
                  </Typography>
                ))
              : ""}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? (
                <Box sx={{ width: "15px" }}>
                  <ClipLoader />
                </Box>
              ) : (
                request.name
              )}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.number}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.date}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? (
                <Box sx={{ width: "15px" }}>
                  <ClipLoader />
                </Box>
              ) : (
                request.cc
              )}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.cat}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.complaints}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.mcc}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.mnc}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.lac}
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
            <Typography sx={{ width: "250px", fontSize: "0.8rem" }}>
              {loading5 ? <ClipLoader /> : request.createdT}
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
              Description
            </Typography>
            <Box sx={{ width: "250px", fontSize: "0.8rem" , display: "flex", flexWrap: "wrap"}}>
              {loading5 ? (
                <ClipLoader />
              ) : (
                ussd?.log_array?.map((arr) => (
                  <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
                    {`${arr} / ${ " "} `}
                  </Typography>
                ))
              )}
            </Box>
          </Box>
          {request.details !== null ? (
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
                Added Info
              </Typography>
              <Box sx={{ width: "250px", fontSize: "0.8rem" }}>
                {loading5 ? <ClipLoader /> : request.details}
              </Box>
            </Box>
          ) : (
            ""
          )}
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
