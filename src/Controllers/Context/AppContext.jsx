import React, { useState, createContext, useContext } from "react";

const reactContext = createContext();

const AppContextProvider = (props) => {
  const [companies, setCompanies] = useState([]);
  return (
    <reactContext.Provider value={{ companies, setCompanies }} {...props} />
  );
};

const useAppContext = () => {
  const context = useContext(reactContext);
  return context;
};

export { AppContextProvider, useAppContext };
