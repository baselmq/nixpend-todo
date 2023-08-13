import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataContextProvider } from "./context/dataCxt";

const root = ReactDOM.createRoot(document.getElementById("root"));

// .*** --------------------dark Mode--------------------- ***
const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme === "dark") {
  document.querySelector("body").classList.add("dark-mode");
}

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>
);
