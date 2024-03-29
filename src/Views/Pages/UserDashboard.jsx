import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar_";
import Body from "../Components/Body_";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
// import client from "../Constants/helpers/axiosInstance";
// import ActivationScreen from "../Components/ActivationScreen";
// import Success from "../Components/Success";
// import EditCompany from "../Components/EditCompany";
// import CompanyRequests from "../Components/SummaryReport";
// import DeleteScreen from "../Components/DeleteScreen";
// import Details from "../Components/Details_";
// import HelperScreen from "../Components/HelperOptionScreen";
// import AddInfo from "../Components/AddInfo";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);


  const { getAllRequests, hideLoading2, showLoading2 } = bindActionCreators(
    actionCreators,
    dispatch
  );
  useEffect(() => {
    const token = localStorage.getItem("accesstoken");
    showLoading2();

    if (!token) {
      navigate("/login");
    } else {
      client
        .get("/support-requests")
        .then((res) => {
          getAllRequests(res.data.data);
          hideLoading2();
        })
        .catch((err) => {
          if (err.response.data.message === "Unauthenticated.") {
            navigate("/login");
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "289px",
          height: "100%",
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "calc(100vw - 289px)",
          height: "100%",
          transitionDuration: "2000ms",
        }}
      >
        <Navbar />
        <Body />
      </Box>
      {/* {viewActivationScreen ? <ActivationScreen /> : ""}
      {viewDeleteScreen ? <DeleteScreen /> : ""}
      {viewCreateSuccess ? (
        <Success
          reg={"REGISTERED"}
          Icon={"CheckOutlinedIcon"}
          type={"create"}
        />
      ) : (
        ""
      )}
      {viewEditSuccess ? (
        <Success reg={"SAVED"} Icon={"CheckOutlinedIcon"} type={"edit"} />
      ) : (
        ""
      )}
      {viewPasswordSuccess ? (
        <Success reg={"SAVED"} Icon={"CloudDoneIcon"} type={"password"} />
      ) : (
        ""
      )}
      {viewEditForm ? <EditCompany /> : ""}
      {viewSummary ? <CompanyRequests /> : ""}
      {viewDetails_ ? <Details /> : ""}
      {viewHelperScreen_ ? <HelperScreen /> : ""}
      {viewAddScreen_ ? <AddInfo /> : ""} */}
    </Box>
  );
}

export default Dashboard;
