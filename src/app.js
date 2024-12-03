import React from "react";
import "./app.css";
import Header from "./components/header";
import Balance from "./components/balance"
import IncomeExpense from "./components/incomeExpense";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";
import { GlobalProvider } from "./components/context/globalContext";

function App() {
  return (
    <GlobalProvider>
        <div className = "container"> 
          <Header/>
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>
    )
  };

  export default App
