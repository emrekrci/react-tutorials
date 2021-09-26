import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     title : '',
  //     amount : '',
  //     date : ''
  // })

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    //You can might lose your state snapshoots.
    // setUserInput({
    //     ...userInput,
    //     title : event.target.value
    // });

    //react will guaranteed the snapshot will be protected.
    // setUserInput((prevState) => {
    //     return {...prevState, title : event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     amount : event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     date : event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveNewExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");

    changeShow();
  };

  const changeShow = () => {
    props.onChangeShow(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={title}
            type="text"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div>
        <button onClick = {changeShow} type="button" className="new-expense__actions">
          Cancel
        </button>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
