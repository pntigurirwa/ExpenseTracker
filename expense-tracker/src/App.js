import React from 'react';
import {Header} from './components/header';
import {Balance} from './components/Balance';
import { IncomeExpenses} from './components/IncomeExpenses';
import { TransactionList} from './components/TransactionList';
import './App.css';

function App() {
  return (
    <div >
     <Header/>
     <div classname="container">
       <Balance/>
       <IncomeExpenses/>
       <TransactionList/>
       </div>
    </div>
  );
}

export default App;
