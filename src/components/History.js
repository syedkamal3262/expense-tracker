import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useExpenseContext } from "../context/ExpContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "auto",
    backgroundColor: "#eaf0f",
    position: "relative",
    overflow: "auto",
    maxHeight: 150,
  },
  listSection: {
    backgroundColor: "#eaf0f1",
  },
  ul: {
    backgroundColor: "#eaf0f1",
    padding: 0,
  },
}));

export default function History() {
  const classes = useStyles();
  const [state, dispatch] = useExpenseContext();
  console.log(state.transaction);
  return (
    <div className="history__card">
      <h3>History</h3>
      <List className={classes.root} subheader={<li />}>
        {state.transaction.map((sec) => (
          <ListItem
            style={{
              backgroundColor: "#eaf0f1",
              marginBottom: "4px",
              display: "flex",
              padding: "3px",
              justifyContent: "space-between",
            }}
            key={Math.random(1000 * 10)}
          >
            <ListItemText>
              <p>{sec.text}</p>
            </ListItemText>
            <ListItemText>
              <p>
                PKR <span style={{ color: "#019031" }}>{sec.amount}</span>
              </p>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
