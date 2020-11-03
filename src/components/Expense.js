import React from "react";
import { useExpenseContext } from "../context/ExpContext";

const Expense = () => {
  const [state] = useExpenseContext();
  return (
    <div className="expense__card">
      <div className="expense__card__income">
        <h3>Income</h3>
        <p>
          PKR <span style={{ color: "#019031" }}>{state.income}</span>{" "}
        </p>
      </div>
      <hr />
      <div className="expense__card__expense">
        <h3>Expense</h3>
        <p>
          PKR <span style={{ color: "#BA2F16" }}>{state.expense}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Expense;
