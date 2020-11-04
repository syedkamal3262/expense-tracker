import React from "react";
import { useExpenseContext } from "../context/ExpContext";

const Balance = () => {
  const [state, dispatch] = useExpenseContext();

  return (
    <div className="balance__card">
      <h5>YOUR BALANCE</h5>
      <h2><strong> PKR</strong> {state.balance}</h2>
    </div>
  );
};

export default Balance;
