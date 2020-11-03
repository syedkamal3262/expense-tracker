export const initialState = {
  transaction: [{ amount: 100, text: "temp income data" }],
  income: 0,
  expense: 0,
  balance: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "Add Income": {
      return { ...state, transaction: [...state.transaction, action.payload] };
    }
    case "Add Expense": {
      return { ...state, transaction: action.payload };
    }
    default: {
      return { state };
    }
  }
};
