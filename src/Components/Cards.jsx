import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import client from '../helpers/axiosInstance';
import { useSelector } from 'react-redux';

function Cards() {
  const [details, setDetails] = useState({
    totalReq: 0,
    companies: 0,
    staffs: 0,
    unansweredReq: 0
  })
  const state = useSelector(state => state)
  const {auth} = state.user
  const support = () => {
    client.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${auth.access_token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    client
      .get("/admin-statistics")
      .then((res) =>
        setDetails({
          totalReq: res.data.no_of_companies,
          companies: res.data.no_of_request_in_the_month,
          staffs: res.data.no_of_support_staff,
          unansweredReq: res.data.no_of_unanswered_request,
        })
      )
      .catch((err) => console.log(err));
  }
  useEffect(() => {

    support()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: "210px",
          width: "100%",
          mr: "0.5rem",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.04)",
          background: "#FFFFFF",
          borderRadius: "10px",
          padding: "0 0.7rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: "#110C0C",
              lineHeight: "1.7rem",
              height: "3.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
            variant="h6"
            component="div"
          >
            No of Request In The Month
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              lineHeight: "56px",
              color: "#0257E6",
              pt: "0.5rem",
            }}
            variant="h1"
            component="div"
          >
            {details.companies}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: "210px",
          width: "100%",
          mr: "0.5rem",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.04)",
          background: "#FFFFFF",
          borderRadius: "10px",
          padding: "0 0.7rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: "#110C0C",
              lineHeight: "1.7rem",
              height: "3.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
            variant="h6"
            component="div"
          >
            No of Companies
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              lineHeight: "56px",
              color: "#0257E6",
              pt: "0.5rem",
            }}
            variant="h1"
            component="div"
          >
            {details.totalReq}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: "210px",
          width: "100%",
          mr: "0.5rem",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.04)",
          background: "#FFFFFF",
          borderRadius: "10px",
          padding: "0 0.7rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: "#110C0C",
              lineHeight: "1.7rem",
              height: "3.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
            variant="h6"
            component="div"
          >
            No of Support Staff
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              lineHeight: "56px",
              color: "#0257E6",
              pt: "0.5rem",
            }}
            variant="h1"
            component="div"
          >
            {details.staffs}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: "210px",
          width: "100%",
          mr: "0.5rem",
          boxShadow: "0px 4px 7px 3px rgba(0, 0, 0, 0.04)",
          background: "#FFFFFF",
          borderRadius: "10px",
          padding: "0 0.7rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: "#110C0C",
              lineHeight: "1.7rem",
              height: "3.5rem",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
            variant="h6"
            component="div"
          >
            No of Unanswered Request
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              lineHeight: "56px",
              color: "#0257E6",
              pt: "0.5rem",
            }}
            variant="h1"
            component="div"
          >
            {details.unansweredReq}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Cards