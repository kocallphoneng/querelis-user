import React, { useState, createContext, useContext } from "react";

const reactContext = createContext();

const AuthContextProvider = (props) => {
  const [isFirstTimer, setIsFirstTimer] = useState(false);
  const [firstTimerEmail, setFirstTimerEmail] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <reactContext.Provider
      value={{
        isFirstTimer,
        firstTimerEmail,
        otp,
        setIsFirstTimer,
        setFirstTimerEmail,
        setOtp,
      }}
      {...props}
    />
  );
};

const useAuthContext = () => {
  const context = useContext(reactContext);
  return context;
};

export { AuthContextProvider, useAuthContext };
