// DataContext.js
import React, { createContext, useState } from "react";

export const statusCxt = createContext();

export const StatusContextProvider = ({ children }) => {
  const [status, setStatus] = useState([]);

  return (
    <statusCxt.Provider value={{ status, setStatus }}>
      {children}
    </statusCxt.Provider>
  );
};
