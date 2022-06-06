import ExpensesItem from '../components/ExpensesItem'
const ExpensesList = () => {
    return ( 
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">
              <ExpensesItem />
              <ExpensesItem />
              <ExpensesItem />
            </div>
          </div>
     );
}
 
export default ExpensesList;