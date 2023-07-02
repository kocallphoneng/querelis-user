import React from "react";

const RequestTable = () => {
  const columns = [
    "Name",
    "Supervisor",
    "Number of staffs",
    "Completed Requests",
    "Pending Requests",
    "",
    "Delete",
  ];
  const rows = [
    {
      name: "Department1",
      staffs: "20",
      completed_requests: "10",
      pending_requests: "10",
    },
    {
      name: "Department1",
      staffs: "20",
      completed_requests: "10",
      pending_requests: "10",
    },
    {
      name: "Department1",
      staffs: "20",
      completed_requests: "10",
      pending_requests: "10",
    },
    {
      name: "Department1",
      staffs: "20",
      completed_requests: "10",
      pending_requests: "10",
    },
    {
      name: "Department1",
      staffs: "20",
      completed_requests: "10",
      pending_requests: "10",
    },
    {
      name: "Department1",
      staffs: "20",
      completed_requests: "10",
      pending_requests: "10",
    },
  ];
  return <div>RequestTable</div>;
};

export default RequestTable;
