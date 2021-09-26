import Expences from "./components/Expenses/Expenses.js";
import './components/Expenses/Expenses.css'
import NewExpense from "./components/NewExpense/NewExpense.js";
import {useState} from "react";

function CreateGuid() {  
  function _p8(s) {  
     var p = (Math.random().toString(16)+"000000000").substr(2,8);  
     return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
  }  
  return _p8() + _p8(true) + _p8(true) + _p8();  
} 

const INITIAL_EXPENSES =  [
  {
    id: CreateGuid(),
    title: "Car Insurence",
    amount: 294.232,
    date: new Date(2021, 5, 21),
  },
  {
    id: CreateGuid(),
    title: "Gorecery Excepces",
    amount: 54.21,
    date: new Date(2020, 5, 23),
  },
  {
    id: CreateGuid(),
    title: "Book  Expences",
    amount: 31.31,
    date: new Date(2019, 5, 26),
  },
  {
    id: CreateGuid(),
    title: "Bla Bla Expences",
    amount: 21.21,
    date: new Date(2019, 11, 21),
  },
];

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  
  const addExpenseToListHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="expenses">
      <NewExpense onAddExpenseToList = {addExpenseToListHandler}/>
      <Expences expenses = {expenses}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
