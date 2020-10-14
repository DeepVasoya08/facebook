import React, { createContext, useContext, useReducer } from "react";

// preperding data layout
export const StateContext = createContext();

// higher order, wrap app inside this
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull value from data laout
export const useStateValue = () => useContext(StateContext);
