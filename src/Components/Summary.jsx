import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Formik, Form,  ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Summary() {
  const state = useSelector((state) => state);
  const { staff } = state.user;
  const dispatch = useDispatch();
  const { showSummaryReport, setSummaryDate, setCompanyId } =
    bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (values) => {
    const end = values.end.toString();
    const start = values.start.toString();
    const name = values.name;
    let startMonth = start.slice(4, 8);
    let startDay = start.slice(8, 11);
    let startYear = start.slice(11, 15);
    let endMonth = end.slice(4, 8);
    let endDay = end.slice(8, 11);
    let endYear = end.slice(11, 15);

    const date = `${startDay}-${startMonth}-${startYear} - ${endDay}-${endMonth}-${endYear}`;
    setSummaryDate(date);
    setCompanyId(name);
    showSummaryReport();
  };

  const formValidation = yup.object().shape({
    start: yup.string().required("*Required"),
    end: yup.string().required("*Required"),
    name: yup.string().required("*Required"),
  });

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
      <Formik
        initialValues={{
          start: null,
          end: null,
          name: 0,
        }}
        validationSchema={formValidation}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <Form style={{ background: "white", padding: "0 2rem 1rem 2rem" }}>
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
                gutterBottom
                component="div"
              >
                Start date
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="DD/MM/YYYY"
                  inputFormat="dd/MM/yyyy"
                  value={props.values.start}
                  onChange={(e) => props.setFieldValue("start", e)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      style={{
                        width: "70%",
                      }}
                      name="start"
                      size="small"
                    />
                  )}
                />
                <ErrorMessage name="start" />
              </LocalizationProvider>
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
                gutterBottom
                component="div"
              >
                End date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="DD/MM/YYYY"
                  inputFormat="dd/MM/yyyy"
                  value={props.values.end}
                  onChange={(e) => props.setFieldValue("end", e)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="end"
                      style={{
                        width: "70%",
                      }}
                      size="small"
                    />
                  )}
                />
                <ErrorMessage name="end" />
              </LocalizationProvider>
            </Box>
            <FormControl sx={{ width: "100%", padding: "1rem 2rem" }}>
              <Select
                value={props.values.name}
                onChange={(e) => props.setFieldValue("name", e.target.value)}
                displayEmpty
                size="small"
              >
                <MenuItem value="">
                  <em>Select Staff</em>
                </MenuItem>
                {/* {staff.map((company) => (
                  <MenuItem key={company.id} value={company.id}>
                    {company.name}
                  </MenuItem>
                ))} */}
              </Select>
              <ErrorMessage name="name" />
            </FormControl>
            <Box sx={{ p: "0 2rem", width: "100%" }}>
              <Button type="submit" sx={{ width: "100%" }} variant="contained">
                SUBMIT
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
    // <CompanySummary />
  );
}

export default Summary;
