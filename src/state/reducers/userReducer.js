const initialState = {
  auth: {},
  staffs: [],
  auditTrail: [],
  firstEmail: "",
  firstTimeUser: false,
  isLoggedIn: false,
  loading: false,
  token: "",
  err: "",
  staffId: 0,
  summaryDate: "",
  userEmail: "",
  otp: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return (state = { ...state, auth: action.payload });
    case "GETSTAFFS":
      return (state = { ...state, staffs: action.payload });
    case "GET_AUDIT_TRAIL":
      return (state = { ...state, auditTrail: action.payload });
    case "FIRST_LOGIN":
      return (state = { ...state, firstLogin: true });
    case "CHANGE_FIRST_LOGIN":
      return (state = { ...state, firstLogin: false });
    case "FIRST_EMAIL":
      return (state = { ...state, firstEmail: action.payload });
    case "FIRSTTIMER":
      return (state = { ...state, firstTimeUser: true });
    case "ISLOGGEDIN":
      return (state = { ...state, isLoggedIn: true });
    case "ISLOGGEDOUT":
      return (state = { ...state, isLoggedIn: false });
    case "LOADING":
      return (state = { ...state, loading: true });
    case "SETLOADING":
      return (state = { ...state, loading: false });
    case "SETERROR":
      return (state = { ...state, err: action.payload });
    case "CLEARERROR":
      return (state = { ...state, err: "" });
    case "SETSTAFFID":
      return (state = { ...state, staffId: action.payload });
    case "SETSUMMARYDATE":
      return (state = { ...state, summaryDate: action.payload });
    case "SETUSEREMAIL":
      return (state = { ...state, userEmail: action.payload });
    case "SETUSEROTP":
      return (state = { ...state, otp: action.payload });

    default:
      return state;
  }
};

export default userReducer;
