import React, { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import companyService from "../Services/compnay.service";

const useData = () => {
  const {
    get_summary,
    get_monthly_data,
    get_dashboard_category,
    get_staffs,
    get_departments,
    get_tickets,
    get_vendors,
  } = new companyService();

  const {
    setStat,
    setSummary,
    setCategory,
    setDepartments,
    setTicketSummary,
    setStaffs,
    setTickets,
    setNotifications,
  } = useAppContext();

  const getCompanyData = async () => {
    const summary = await get_summary();
    const stat = await get_monthly_data();
    const category = await get_dashboard_category();
    const staffs = await get_staffs();
    // const departments = await get_departments();
    const vendors = await get_vendors();
    // console.log(vendors);
    const tickets = await get_tickets();
    // console.log(departments.data);
    if (stat.message === "success") setStat(summary.data.data.monthly);
    if (summary.message === "success") setSummary(summary.data.data.summary);
    if (category.message === "success") setCategory(category.data.data.summary);
    // if (departments.message === "success")
    //   setDepartments(vendors.data.data.departments);
    console.log(vendors)
    if (vendors.message === "success") setDepartments(vendors.data.data.unit);
    if (staffs.message === "success") setStaffs(staffs.data.data.users);
    if (tickets.message === "success") {
      setTickets(tickets.data.data.tickets);
      setTicketSummary(tickets.data.data.summary);
    }
  };

  useEffect(() => {
    getCompanyData();
  }, []);
  return {};
};

export default useData;
