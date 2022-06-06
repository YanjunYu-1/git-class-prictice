import IncomeItem from '../components/IncomeItem'
const IncomeList = () => {
    return ( 
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">
              <IncomeItem />
              <IncomeItem />
              <IncomeItem />
            </div>
          </div>
     );
}
 
export default IncomeList;