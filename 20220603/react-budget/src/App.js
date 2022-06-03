import "./App.css";
import Header from "./component/Header";
import IncomeNum from "./component/IncomeNum";
import ExpensesNum from "./component/ExpensesNum";
import Body from "./component/Body";
import BodyIncome from "./component/BodyIncome";
import BodyExpenses from "./component/BodyExpenses";

function App() {
  return (
    <>
      <Header>
          <IncomeNum />
          <ExpensesNum />
      </Header>

      <Body>
          <BodyIncome />
          <BodyExpenses />
      </Body>
      
    </>
  );
}

export default App;
