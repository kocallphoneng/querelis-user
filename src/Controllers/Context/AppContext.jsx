import React, { useState, createContext, useContext } from "react";

const reactContext = createContext();

const AppContextProvider = (props) => {
  const [modal, setModal] = useState({
    open: false,
    name: "",
  });
  const [showDepartment, setShowDepartment] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);
  const [targetDepartment, setTargetDepartment] = useState({});
  return (
    <reactContext.Provider
      value={{
        modal,
        setModal,
        showDepartment,
        setShowDepartment,
        targetDepartment,
        setTargetDepartment,
        showDataInfo,
        setShowDataInfo,
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
