import ExpencesContainer from "./components/Expenses/ExpencesContainer.js";
import './components/Expenses/ExpencesContainer.css'

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurence",
      amount: 294.232,
      date: new Date(2021, 5, 21),
    },
    {
      id: 2,
      title: "Gorecery Excepces",
      amount: 54.21,
      date: new Date(2021, 5, 23),
    },
    {
      id: 3,
      title: "Book  Expences",
      amount: 31.31,
      date: new Date(2021, 5, 26),
    },
    {
      id: 4,
      title: "Bla Bla Expences",
      amount: 21.21,
      date: new Date(2021, 11, 21),
    },
  ];

  return (
    <div className="expenses">
      <ExpencesContainer expenses = {expenses}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
