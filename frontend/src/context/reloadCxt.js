// DataContext.js
import React, { createContext, useState } from "react";

export const reloadCxt = createContext();

export const ReloadContextProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  return (
    <reloadCxt.Provider value={{ reload, setReload }}>
      {children}
    </reloadCxt.Provider>
  );
};
