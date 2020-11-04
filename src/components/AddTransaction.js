import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { useExpenseContext } from "../context/ExpContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddTransaction() {
  const classes = useStyles();
  const [gettransaction, setTransaction] = useState({ amount: "", text: "" });
  const [state, dispatch] = useExpenseContext();

  const onchangeHandler = (e) => {
    setTransaction({
      ...gettransaction,
      [e.target.name]: e.target.value,
    });
  };
  const onsubmitHandler = (e) => {
    e.preventDefault();
    const Trantype = gettransaction.amount.search('-')>-1?"Add Expense":"Add Income"
    dispatch({
      type: Trantype,
      payload: gettransaction,
    });
    console.log(state);
  };
  return (
    <div className="addtransaction__card">
      <h3>Add New Transaction</h3>
      <br />
      <form className={classes.root} onSubmit={onsubmitHandler}>
        <label> Text</label> <br />
        <Input
          placeholder="Text Related to transaction"
          onChange={onchangeHandler}
          name="text"
        />
        <br />
        <label> Amount</label> <br />
        <Input
          type="Number"
          name="amount"
          placeholder=" - Expense / + Income "
          inputProps={{ "aria-label": "description" }}
          onChange={onchangeHandler}
        />
        <br />
        <Button
          variant="contained"
          style={{ width: "100%" }}
          type="submit"
          disabled={
            gettransaction.amount.trim() === "" ||
            gettransaction.text.trim() === ""
          }
        >
          Add
        </Button>
      </form>
    </div>
  );
}
