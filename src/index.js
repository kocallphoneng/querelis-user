import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./Controllers/Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
        <Toaster />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
