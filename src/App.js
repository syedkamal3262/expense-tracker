import "./App.css";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import { ExpContext } from "./context/ExpContext";
import { reducer, initialState } from "./context/Reducer";
function App() {
  return (
    <div className="app">
      <ExpContext state={initialState} reducer={reducer}>
        <div className="app__content">
          <h1>Expense Tracker</h1>
          <Balance />
          <Expense />
          <History />
          <AddTransaction />
        </div>
      </ExpContext>
    </div>
  );
}

export default App;
