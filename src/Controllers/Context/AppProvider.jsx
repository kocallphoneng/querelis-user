import React from "react";
import { AuthContextProvider } from "./AuthContext";
import { AppContextProvider } from "./AppContext";

const AppProviders = ({ children }) => {
  return (
    <AuthContextProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </AuthContextProvider>
  );
};

export default AppProviders;
