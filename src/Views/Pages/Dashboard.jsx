import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
import client from "../Constants/helpers/axiosInstance";
import ActivationScreen from "../Components/ActivationScreen";
import Success from "../Components/Success";
import EditCompany from "../Components/EditCompany";
import CompanyRequests from "../Components/SummaryReport";
import DeleteScreen from "../Components/DeleteScreen";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  // const { auth } = state.user;
  const {
    getAllStaffs,
    setIsLoading,
    getAllRequests,
    setNotLoading,
    hideLoading1,
    showLoading1,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (!localStorage.accesstoken || localStorage.user !== "company") {
      navigate("/login");
    }
    setIsLoading();
    showLoading1();

    try {
      const fetchData = async () => {
        const staffRes = await client.get("/support-staff");
        const supReq = await client.get("/support-requests");
        getAllStaffs(staffRes.data.data);
        getAllRequests(supReq.data.data);
        setNotLoading();
        hideLoading1();
      };
      fetchData();
    } catch (err) {
      const message = err.response.data.message;
      console.log(message);
      if (message === "Unauthenticated" || message === "Unauthorized") {
        // navigate("/login");
        console.log(message);
      } else {
        toast.error("Oops!!, something went wrong", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
      setNotLoading();
      hideLoading1();
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
