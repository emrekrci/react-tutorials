import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const ExpencesContainer = (props) => {
  return (
    <Card>
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default ExpencesContainer;
