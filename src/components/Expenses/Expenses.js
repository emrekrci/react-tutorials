import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter"
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState('2021');

  const yearChangeHandler = (targetValue) => {
    console.log(targetValue);
    setYear(targetValue);
    console.log(targetValue);
  }

  return (
    <Card>
      <ExpenseFilter filteredYear = {year} onYearChange = {yearChangeHandler}/>
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
