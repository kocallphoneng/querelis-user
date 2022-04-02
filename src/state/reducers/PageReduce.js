const initialState = {
    newComapny: true,
    regedCompany: false,
    newRegCompany: false
}

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DASHBOARD":
      return (state = {
        dashboard: true,
        company: false,
        audit: false,
        password: false,
        summary: false,
        notify: false,
      });
    case "COMPANY":
      return (state = {
        ...state,
        dashboard: false,
        company: true,
        audit: false,
        password: false,
        summary: false,
      });
    
    default:
      return state;
  }
};

export default pageReducer;
