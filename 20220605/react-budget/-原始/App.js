import "./App.css";
import BudgetSummary from './components/BudgetSummary'
import AddForm from './components/AddForm'
import IncomeList from './components/IncomeList'
import ExpensesList from './components/ExpensesList'

function App() {
  return (
    <body>
      <div className="top">
        <BudgetSummary />
      </div>

      <div className="bottom">
        <AddForm />

        <div className="container">
          <IncomeList />

          <ExpensesList />
        </div>
      </div>
    </body>
  );
}

export default App;
