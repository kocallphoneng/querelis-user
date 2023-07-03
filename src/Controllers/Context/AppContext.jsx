import React, { useState, createContext, useContext } from "react";

const reactContext = createContext();

const AppContextProvider = (props) => {
  const [modal, setModal] = useState({
    open: false,
    name: "",
  });
  return <reactContext.Provider value={{ modal, setModal }} {...props} />;
};

const useAppContext = () => {
  const context = useContext(reactContext);
  return context;
};

export { AppContextProvider, useAppContext };
