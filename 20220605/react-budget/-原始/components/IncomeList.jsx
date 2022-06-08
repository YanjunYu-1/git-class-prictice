import styles from './IncomList.module.css';
import IncomeItem from '../components/IncomeItem'

const IncomeList = () => {
    return ( 
        <div className={styles.income}>
            <h2 className={styles["income__title"]}>Income</h2>
            <div className={styles["income__list"]}>
              <IncomeItem />
              <IncomeItem />
              <IncomeItem />
            </div>
          </div>
     );
}
 
export default IncomeList;