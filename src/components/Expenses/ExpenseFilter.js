import ExpenseForm from '../NewExpense/ExpenseForm'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onYearChange(event.target.value);
    }

    return (
        <div className = 'expenses-filter'>
            <div className="expenses-filter__cotrol">
                <label>Filter By Year</label>
                <select onChange={yearChangeHandler} defaultValue={props.filteredYear}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;