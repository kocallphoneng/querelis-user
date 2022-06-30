import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import client from "../helpers/axiosInstance";
import { ClipLoader } from "react-spinners";

function Summary() {
  const state = useSelector((state) => state);
  const { staffs } = state.user;
  const dispatch = useDispatch();
  const { showSummaryReport, setSummaryDate,  setSummaryReport } =
    bindActionCreators(actionCreators, dispatch);

  const [param, setParam] = useState({
    start: "",
    end: "",
    id: "",
  });
  const [loading, setLoading] = useState(false);

  const formData = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const date = `${param.start} - ${param.end}`;
    setSummaryDate(date);
    formData.append("start_date", param.start);
    formData.append("end_date", param.end);
    formData.append("staff_id", param.id);

    try {
      const res = await client.post("/staff-statistics-for-company", formData);
      console.log(res);
      setSummaryReport({
        comleted: res.data.no_of_completed_request,
        assigned: res.data.no_of_request_assigned,
        uncompleted: res.data.no_of_uncompleted_request,
        status: res.data.staff_status,
      });

      setLoading(false);
      showSummaryReport();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "648px",
        background: "white",
        pb: "3.5rem",
        borderRadius: "1.5rem",
      }}
    >
      <Typography
        sx={{
          color: "#110C0C",
          fontSize: "1.2rem",
          fontWeight: "600",
          width: "100%",
          padding: "2rem",
          pb: "1rem",
          borderBottom: "1px solid gray",
        }}
        variant="h6"
        gutterBottom
        component="div"
      >
        Staff Summary
      </Typography>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ background: "white", padding: "0 2rem 1rem 2rem" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "0 2rem",
            pt: "1rem",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "300",
              fontSize: "1rem",
              width: "30%",
              pt: "0.2rem",
            }}
          >
            Start date
          </Typography>

          <input
            value={param.start}
            onChange={(e) => setParam({ ...param, start: e.target.value })}
            name={"start"}
            type="date"
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid lightgray",
              outline: "none",
              borderRadius: "0.1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "0 2rem",
            pt: "1rem",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "300",
              fontSize: "1rem",
              width: "30%",
            }}
          >
            End date
          </Typography>
          <input
            value={param.end}
            onChange={(e) => setParam({ ...param, end: e.target.value })}
            name={"end"}
            type="date"
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid lightgray",
              outline: "none",
              borderRadius: "0.1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            px: "2rem",
            my: "1rem",
          }}
        >
          <Select
            value={param.name}
            onChange={(e) => setParam({ ...param, id: e.target.value })}
            displayEmpty
            size="small"
            sx={{ width: "100%" }}
          >
            <MenuItem value="">
              <em>Select Staff</em>
            </MenuItem>
            {staffs.map((company) => (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ p: "0 2rem", width: "100%" }}>
          <Button type="submit" sx={{ width: "100%" }} variant="contained">
            {loading ? <ClipLoader /> : "SUBMIT"}
          </Button>
        </Box>
      </form>
    </Box>
    // <CompanySummary />
  );
}

export default Summary;
