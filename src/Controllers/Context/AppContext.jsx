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
