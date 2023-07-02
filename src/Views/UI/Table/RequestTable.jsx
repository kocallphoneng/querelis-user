import React from "react";
import { requestData } from "../../../Constants/testData";

const RequestTable = () => {
  const columns = [
    "Name",
    "Mobile number",
    "Date",
    "CC Ticket ID",
    "Category",
    "Resolve Time",
    "MCC",
    "MNC",
    "LAC",
    "CI",
    "Status",
  ];
  const rows = requestData;
  return <div>RequestTable</div>;
};

export default RequestTable;
