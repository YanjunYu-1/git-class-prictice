import styles from './IncomeSummary.module.css';
const IncomeSummary = () => {
    return ( 
        <div className={styles["budget__income"]}>
                <div className={styles["budget__income--text"]}>Income</div>
                <div className={styles.right}>
                    <div className={styles["budget__income--value"]}>+ $580.09</div>
                    <div className={styles["budget__income--percentage"]}>&nbsp;</div>
                </div>
            </div>
     );
}
 
export default IncomeSummary;