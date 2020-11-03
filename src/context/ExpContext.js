import React, { createContext, useContext, useReducer } from "react";

const ExpenseContext = createContext();

export const ExpContext = ({ state, reducer, children }) => {
  return (
    <ExpenseContext.Provider value={useReducer(reducer, state)}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => useContext(ExpenseContext);
