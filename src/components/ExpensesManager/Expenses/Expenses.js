import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import Expenseslist from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const yearChangeHandler = (targetValue) => {
    setYear(targetValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseFilter filteredYear={year} onYearChange={yearChangeHandler} />
        <Expenseslist expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
