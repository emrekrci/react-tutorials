import { useState } from "react";
import AddNewExpese from "./AddNewExpense";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [show, setShow] = useState(false);

  const changeShowHandler = (newShow) => {
    setShow(newShow);
  };

  const saveNewExpenseHandler = (newExpense) => {
    const expense = {
      ...newExpense,
      id: 13,
    };
    props.onAddExpenseToList(expense);
  };

  return (
    <div className="new-expense">
      {show === false ? (
        <AddNewExpese onChangeShow={changeShowHandler} />
      ) : (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onChangeShow={changeShowHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
