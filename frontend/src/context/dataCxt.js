import React, { createContext, useState } from "react";

export const DataCxt = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <DataCxt.Provider
      value={{ data, setData, loading, setLoading, error, setError }}
    >
      {children}
    </DataCxt.Provider>
  );
};
