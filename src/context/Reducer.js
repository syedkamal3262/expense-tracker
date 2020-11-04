export const initialState = {
  transaction: [{ amount: 100, text: "temp income data" }],
  income: 0,
  expense: 0,
  balance: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "Add Income": {
      return {
         ...state, 
        transaction: [...state.transaction, action.payload] , 
        income: state.income + Number(action.payload.amount) ,
        balance: state.balance+Number(action.payload.amount)
       };
    }
    case "Add Expense": {
      return {
        ...state, 
       transaction: [...state.transaction, action.payload] , 
       expense: state.expense + Number(action.payload.amount) ,
       balance: state.balance + Number(action.payload.amount)
      };
    }
    default: {
      return { state };
    }
  }
};
