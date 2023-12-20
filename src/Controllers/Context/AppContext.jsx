import React, { useState, createContext, useContext } from "react";

const reactContext = createContext();

const AppContextProvider = (props) => {
  const [modal, setModal] = useState({
    open: false,
    name: "",
  });
  const [showDepartment, setShowDepartment] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);
  const [toggleContentLayout, setToggleContentLayout] = useState(false);
  const [targetElement, setTargetElement] = useState({});
  const [targetStaff, setTargetStaff] = useState({});
  const [targetTicket, setTargetTicket] = useState({});

  const [stat, setStat] = useState({});
  const [summary, setSummary] = useState({});
  const [departments, setDepartments] = useState({ data: [] });
  const [staffs, setStaffs] = useState({ data: [] });
  const [category, setCategory] = useState([]);
  const [tickets, setTickets] = useState({});
  const [ticketSummary, setTicketSummary] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
  });
  const [notifications, setNotifications] = useState({});

  const openContentModal = () => {
    setShowDataInfo(true);
    setTimeout(() => {
      setToggleContentLayout(true);
    }, 20);
  };

  const closeContentModal = () => {
    setToggleContentLayout(false);
    setTimeout(() => {
      setShowDataInfo(false);
    }, 20);
  };

  return (
    <reactContext.Provider
      value={{
        modal,
        toggleContentLayout,
        showDepartment,
        targetElement,
        showDataInfo,
        setModal,
        setShowDepartment,
        setTargetElement,
        setShowDataInfo,
        openContentModal,
        closeContentModal,
        targetStaff,
        setTargetStaff,
        stat,
        setStat,
        departments,
        setDepartments,
        staffs,
        setStaffs,
        tickets,
        setTickets,
        notifications,
        setNotifications,
        summary,
        setSummary,
        category,
        setCategory,
        ticketSummary,
        setTicketSummary,
        targetTicket,
        setTargetTicket,
      }}
      {...props}
    />
  );
};

const useAppContext = () => {
  const context = useContext(reactContext);
  return context;
};

export { AppContextProvider, useAppContext };
