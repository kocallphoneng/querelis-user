/* eslint-disable default-case */
const initialState = {
  dashboard: true,
  staff: false,
  accepted: false,
  audit: false,
  password: false,
  summary: false,
  notify: false,
  welcome: true,
  newCompany: false,
  regedCompanies: false,
  editedCompany: false,
  viewActivationScreen: false,
  viewDeleteScreen: false,
  viewCreateForm: false,
  viewEditForm: false,
  viewCompanySuccess: false,
  viewEditSuccess: false,
  viewPasswordSuccess: false,
  viewSummary: false,
  viewDetails_: false,
  viewHelperScreen_: false,
  helperOption_: "",
  viewAddScreen_: false,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DASHBOARD":
      return (state = {
        ...state,
        accepted: false,
        dashboard: true,
        staff: false,
        audit: false,
        password: false,
        summary: false,
        notify: false,
        welcome: true,
        newCompany: false,
        regedCompanies: false,
        editedCompany: false,
        navBtn: false,
      });
    case "STAFF":
      return (state = {
        ...state,
        accepted: false,
        dashboard: false,
        staff: true,
        audit: false,
        password: false,
        summary: false,
        notify: false,
        welcome: false,
        // newCompany: true,
        regedCompanies: false,
        editedCompany: false,
      });
    case "REGEDCOMPANY":
      return (state = {
        ...state,
        dashboard: false,
        company: true,
        audit: false,
        password: false,
        summary: false,
        welcome: false,
        newCompany: false,
        regedCompanies: true,
        editedCompany: false,
        navBtn: false,
        accepted: false,
      });
    case "EDITCOMPANY":
      return (state = {
        ...state,
        dashboard: false,
        staff: true,
        audit: false,
        password: false,
        summary: false,
        welcome: false,
        newCompany: false,
        regedCompanies: false,
        editedCompany: true,
        navBtn: true,
        accepted: false,
      });

    case "AUDIT":
      return (state = {
        ...state,
        dashboard: false,
        staff: false,
        audit: true,
        password: false,
        summary: false,
        notify: false,
        welcome: false,
        newCompany: false,
        regedCompanies: false,
        editedCompany: false,
        navBtn: false,
        accepted: false,
      });
    case "SUMMARY":
      return (state = {
        ...state,
        accepted: false,
        dashboard: false,
        staff: false,
        audit: false,
        password: false,
        summary: true,
        welcome: false,
        newCompany: false,
        regedCompanies: false,
        editedCompany: false,
        navBtn: false,
      });
    case "PASSWORD":
      return (state = {
        ...state,
        dashboard: false,
        staff: false,
        audit: false,
        password: true,
        summary: false,
        notify: false,
        welcome: false,
        newCompany: false,
        regedCompanies: false,
        editedCompany: false,
        navBtn: false,
        accepted: false,
      });
    case "SHOWNOTIFICATION":
      return (state = {
        ...state,
        dashboard: false,
        staff: false,
        audit: false,
        password: false,
        summary: false,
        notify: true,
        welcome: false,
        newCompany: false,
        regedCompanies: false,
        editedCompany: false,
        navBtn: false,
        accepted: false,
      });
    case "ACCEPTED":
      return (state = {
        ...state,
        dashboard: false,
        staff: false,
        audit: false,
        password: false,
        summary: false,
        notify: false,
        welcome: false,
        newCompany: false,
        regedCompanies: false,
        editedCompany: false,
        navBtn: false,
        accepted: true,
      });
    case "SHOWACTIVATIONSCREEN":
      return (state = { ...state, viewActivationScreen: true });
    case "HIDEACTIVATIONSCREEN":
      return (state = { ...state, viewActivationScreen: false });
    case "SHOWDELETESCREEN":
      return (state = { ...state, viewDeleteScreen: true });
    case "HIDEDELETESCREEN":
      return (state = { ...state, viewDeleteScreen: false });
    case "SHOWCREATEFORM":
      return (state = { ...state, viewCreateForm: true });
    case "HIDECREATEFORM":
      return (state = { ...state, viewCreateForm: false });
    case "SHOWEDITFORM":
      return (state = { ...state, viewEditForm: true });
    case "HIDEEDITFORM":
      return (state = { ...state, viewEditForm: false });
    case "SHOWCOMPANYSUCCESS":
      return (state = { ...state, viewCreateSuccess: true });
    case "HIDECOMPANYSUCCESS":
      return (state = { ...state, viewCreateSuccess: false });
    case "SHOWEDITSUCCESS":
      return (state = { ...state, viewEditSuccess: true });
    case "HIDEEDITSUCCESS":
      return (state = { ...state, viewEditSuccess: false });
    case "SHOWPASSWORDSUCCESS":
      return (state = { ...state, viewPasswordSuccess: true });
    case "HIDEPASSWORDSUCCESS":
      return (state = { ...state, viewPasswordSuccess: false });
    case "SHOWSUMMARYREPORT":
      return (state = { ...state, viewSummary: true });
    case "HIDESUMMARYREPORT":
      return (state = { ...state, viewSummary: false });
    case "SHOWDETAILSCREEN":
      return (state = { ...state, viewDetails_: true });
    case "HIDEDETAILSCREEN":
      return (state = { ...state, viewDetails_: false });
    case "SHOWHELPERSCREEN":
      return (state = {
        ...state,
        viewHelperScreen_: true,
        helperOption_: action.payload,
      });
    case "HIDEHELPERSCREEN":
      return (state = { ...state, viewHelperScreen_: false });
    case "SHOWADDSCREEN":
      return (state = { ...state, viewAddScreen_: true });
    case "HIDEADDSCREEN":
      return (state = { ...state, viewAddScreen_: false });

    default:
      return state;
  }
};

export default stateReducer;
