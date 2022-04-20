import { toast } from "react-toastify";

toast.configure();

export const login = (userData) => {
  return (dispatch) => {
    dispatch({
      type: "USER",
      payload: userData,
    });
    dispatch({ type: "ISLOGGEDIN" });
  };
};
export const firstTimeEmail = (email) => {
  return (dispatch) => {
    dispatch({ type: "FIRST_EMAIL", payload: email });
    dispatch({ type: "FIRSTTIMER" });
  };
};

export const getAllStaffs = (data) => {
  return (dispatch) => {
    dispatch({ type: "GETSTAFFS", payload: data });
  };
};

export const getAllRequests = (data) => {
  return (dispatch) => {
    dispatch({ type: "GETREQUESTS", payload: data });
  };
};
export const getAcceptedRequests = (data) => {
  return (dispatch) => {
    dispatch({ type: "GETACCEPTEDREQUESTS", payload: data });
  };
};

export const getAuditTrail = (data) => {
  return (dispatch) => {
    dispatch({ type: "GET_AUDIT_TRAIL", payload: data });
  };
};

export const setIsLoading = () => {
  return (dispatch) => dispatch({ type: "LOADING" });
};
export const setNotLoading = () => {
  return (dispatch) => dispatch({ type: "SETLOADING" });
};

export const setSuccess = () => {
  return (dispatch) => dispatch("FAILED");
};

export const logout = () => {
  return (dispatch) => dispatch({ type: "ISLOGGEDOUT" });
};
export const setDashboard = () => {
  return (dispatch) => dispatch({ type: "DASHBOARD" });
};
export const setStaff = () => {
  return (dispatch) => dispatch({ type: "STAFF" });
};

export const setAudit = () => {
  return (dispatch) => dispatch({ type: "AUDIT" });
};

export const setPassword = () => {
  return (dispatch) => dispatch({ type: "PASSWORD" });
};

export const setAccepted = () => {
  return (dispatch) => dispatch({ type: "ACCEPTED" });
};

export const setSummary = () => {
  return (dispatch) => dispatch({ type: "SUMMARY" });
};
export const showNotification = () => {
  return (dispatch) => dispatch({ type: "SHOWNOTIFICATION" });
};
export const viewRegedComapnies = () => {
  return (dispatch) => dispatch({ type: "REGEDCOMPANY" });
};
export const viewEditCompany = () => {
  return (dispatch) => dispatch({ type: "EDITCOMPANY" });
};

export const setStaffId = (id) => {
  return (dispatch) => dispatch({ type: "SETSTAFFID", payload: id });
};
export const setReqId = (id) => {
  return (dispatch) => dispatch({ type: "SETREQID", payload: id });
};
export const setActive = (is_active) => {
  return (dispatch) => dispatch({ type: "SETACTIVE", payload: is_active });
};
export const showActivationScreen = () => {
  return (dispatch) => dispatch({ type: "SHOWACTIVATIONSCREEN" });
};
export const hideActivationScreen = () => {
  return (dispatch) => dispatch({ type: "HIDEACTIVATIONSCREEN" });
};
export const showDeleteScreen = () => {
  return (dispatch) => dispatch({ type: "SHOWDELETESCREEN" });
};
export const hideDeleteScreen = () => {
  return (dispatch) => dispatch({ type: "HIDEDELETESCREEN" });
};
export const showCreateSuccess = () => {
  return (dispatch) => dispatch({ type: "SHOWCOMPANYSUCCESS" });
};
export const hideCreateSuccess = () => {
  return (dispatch) => dispatch({ type: "HIDECOMPANYSUCCESS" });
};
export const showEditForm = () => {
  return (dispatch) => dispatch({ type: "SHOWEDITFORM" });
};
export const hideEditForm = () => {
  return (dispatch) => dispatch({ type: "HIDEEDITFORM" });
};
export const showEditSuccess = () => {
  return (dispatch) => dispatch({ type: "SHOWEDITSUCCESS" });
};
export const hideEditSuccess = () => {
  return (dispatch) => dispatch({ type: "HIDEEDITSUCCESS" });
};
export const showPasswordSuccess = () => {
  return (dispatch) => dispatch({ type: "SHOWPASSWORDSUCCESS" });
};
export const hidePasswordSuccess = () => {
  return (dispatch) => dispatch({ type: "HIDEPASSWORDSUCCESS" });
};
export const showSummaryReport = () => {
  return (dispatch) => dispatch({ type: "SHOWSUMMARYREPORT" });
};
export const hideSummaryReport = () => {
  return (dispatch) => dispatch({ type: "HIDESUMMARYREPORT" });
};
export const setSummaryDate = (date) => {
  return (dispatch) => dispatch({ type: "SETSUMMARYDATE", payload: date });
};
export const setUserEmail = (email) => {
  return (dispatch) => dispatch({ type: "SETUSEREMAIL", payload: email });
};
export const setUserOtp = (otp) => {
  return (dispatch) => dispatch({ type: "SETUSEROTP", payload: otp });
};
export const showDetail_ = () => {
  return (dispatch) => dispatch({ type: "SHOWDETAILSCREEN" });
};
export const hideDetail_ = () => {
  return (dispatch) => dispatch({ type: "HIDEDETAILSCREEN" });
};
export const showHelper_ = (option) => {
  return (dispatch) => dispatch({ type: "SHOWHELPERSCREEN", payload: option });
};
export const hideHelper_ = () => {
  return (dispatch) => dispatch({ type: "HIDEHELPERSCREEN" });
};
export const showAdd_ = (option) => {
  return (dispatch) => dispatch({ type: "SHOWADDSCREEN" });
};
export const hideAdd_ = () => {
  return (dispatch) => dispatch({ type: "HIDEADDSCREEN" });
};
export const showLoading1 = () => {
  return (dispatch) => dispatch({ type: "LOADINGSUP" });
};
export const hideLoading1 = () => {
  return (dispatch) => dispatch({ type: "NOTLOADINGSUP" });
};
export const showLoading2 = () => {
  return (dispatch) => dispatch({ type: "LOADINGREQ" });
};
export const hideLoading2 = () => {
  return (dispatch) => dispatch({ type: "NOTLOADINGREQ" });
};
export const showLoading3 = () => {
  return (dispatch) => dispatch({ type: "LOADINGDEL" });
};
export const hideLoading3 = () => {
  return (dispatch) => dispatch({ type: "NOTLOADINGDEL" });
};
export const showLoading = () => {
  return (dispatch) => dispatch({ type: "LOADING_" });
};
export const hideLoading = () => {
  return (dispatch) => dispatch({ type: "NOTLOADING_" });
};
export const showLoading4 = () => {
  return (dispatch) => dispatch({ type: "ACTIVELOADING" });
};
export const hideLoading4 = () => {
  return (dispatch) => dispatch({ type: "NOTACTIVELOADING" });
};
export const showLoading5 = () => {
  return (dispatch) => dispatch({ type: "LOADING5" });
};
export const hideLoading5 = () => {
  return (dispatch) => dispatch({ type: "NOTLOADING5" });
};
export const setUserId = (id) => {
  return (dispatch) => dispatch({ type: "SETUSERID", payload: id  });
};
export const setReqStat = (stat) => {
  return (dispatch) => dispatch({ type: "SETREQSTAT", payload: stat });
};
