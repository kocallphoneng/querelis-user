import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
import client from "../helpers/axiosInstance";
import ActivationScreen from "../Components/ActivationScreen";
import Success from "../Components/Success";
import EditCompany from "../Components/EditCompany";
import CompanyRequests from "../Components/CompanyRequests";
import DeleteScreen from "../Components/DeleteScreen"

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const {
    viewActivationScreen,
    viewDeleteScreen,
    viewCreateSuccess,
    viewEditSuccess,
    viewEditForm,
    viewPasswordSuccess,
    viewSummary,
  } = state.displayState;
  const { auth } = state.user;
  const { getAllStaffs, setIsLoading, setNotLoading, getAuditTrail } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setIsLoading();
    if (!localStorage.token) {
      navigate("/login");
    }
    console.log("test auth", auth.access_token);

    client.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${auth.access_token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    try {
      const fetchData = async () => {
        const staffRes = await client.get("/support-staff");
        console.log("/support-staff",staffRes);
        getAllStaffs(staffRes.data.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
      const message = err.response.data.message;
      if (message === "Unauthenticated.") {
        navigate("/login");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const auditRes = await client.get("/audit-trail");
  //       console.log(auditRes);
  //       getAuditTrail(auditRes.data.data);
  //       setNotLoading();
  //     };
  //     fetchData();
  //   } catch (err) {
  //     console.log(err);
  //     const message = err.response.data.message;
  //     if (message === "Unauthenticated.") {
  //       navigate("/login");
  //     }
  //   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
      {viewActivationScreen ? <ActivationScreen /> : ""}
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
    </Box>
  );
}

export default Dashboard;
