import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) => {
    const saveNewExpenseHandler = (newExpense) => {
        const expense = {
            ...newExpense, 
            id : 13
        }

        props.onAddExpenseToList(expense);
    }

  return (
    <div className="new-expense">
      <ExpenseForm  onSaveNewExpense= {saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
