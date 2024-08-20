import { createContext, useContext, useEffect, useReducer } from "react";
import AddReducer from './AppReducer';

const initialState = {
  transaction: []
}

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddReducer, initialState,
  () => {
     const localData = localStorage.getItem("transaction");
     return localData ? JSON.parse(localData): initialState;
  });

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions
    })
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DEL_TRANSACTION",
      payload: id,
    })
  };

  return <Context.Provider 
  value={{
    transaction: state.transaction,
    addTransaction,
    deleteTransaction,
  }}>{children}</Context.Provider>;
};
