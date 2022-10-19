import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    incomeTransaction: JSON.parse(localStorage.getItem('incomeTransaction')) ||[],
    expenseTransaction: JSON.parse(localStorage.getItem('expenseTransaction')) || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("incomeTransaction", JSON.stringify(state.incomeTransaction))
        localStorage.setItem("expenseTransaction", JSON.stringify(state.expenseTransaction))
    })

    const addIncome = (incomeTransaction) => {
        dispatch({
            type: "ADD_INCOME",
            payload: incomeTransaction
        });
    };

    const addExpense = (expenseTransaction) => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenseTransaction
        });
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransaction,
            expenseTransactions: state.expenseTransaction,
            addIncome,
            addExpense,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}