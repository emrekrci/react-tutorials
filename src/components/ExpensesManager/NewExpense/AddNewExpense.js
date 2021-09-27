import "./NewExpense.css";

const AddNewExpese = (props) => {

  const showChange = () => {
    props.onChangeShow(true);
  }
  return (
    <button onClick = {showChange} type="submit" className="new-expense__actions">
      Add New Expense
    </button>
  );
};

export default AddNewExpese;
