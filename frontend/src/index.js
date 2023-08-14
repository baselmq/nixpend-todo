import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StatusContextProvider } from "./context/statusCxt";
import { ReloadContextProvider } from "./context/reloadCxt";
import { DataContextProvider } from "./context/dataCxt";
import HiddenLayer from "./context/HiddenLayer";

const root = ReactDOM.createRoot(document.getElementById("root"));

// .*** --------------------dark Mode--------------------- ***
const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme === "dark") {
  document.querySelector("body").classList.add("dark-mode");
}

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <ReloadContextProvider>
        <StatusContextProvider>
          <BrowserRouter>
            <HiddenLayer />
            <App />
          </BrowserRouter>
        </StatusContextProvider>
      </ReloadContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
