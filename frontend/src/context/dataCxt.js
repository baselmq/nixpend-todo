// DataContext.js
import React, { createContext } from "react";
import { useAxios } from "../hooks/useAxios";

export const DataCxt = createContext();

export const DataContextProvider = ({ children }) => {
  const url = "http://localhost:8000/api/v1/todo";
  const { data, loading, error } = useAxios(url);

  return (
    <DataCxt.Provider value={{ data, loading, error }}>
      {children}
    </DataCxt.Provider>
  );
};
