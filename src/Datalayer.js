import React, { createContext, useContext, useReducer } from "react";
const DataLayerContext = createContext();
export const Datalayer = ({ initialstate, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </DataLayerContext.Provider>
);
export const useDataLayerValue = () => useContext(DataLayerContext);
