import styles from "../../../styles/plan//Plan.module.css";

const Card = ({name, amount, classes, description, selected, setSelected, index = 1, isMonthly =  false }) => {

    const handleSelected = (item) =>{
        setSelected(item)
    }
    return(
        <div onClick = {()=> handleSelected(index)} className = {`${styles.card}  ${selected === index ? styles.selected : ""}`}>
            <div className = {styles.from}>
                {name}
            </div>
            <div className = {styles.description}>
                {description}
            </div>
            {
                isMonthly ? (
                    <div className = {styles.span}>
                        Pay monthly & cancel anytime.
                    </div>
                ):null
            }
            <div className = {`${styles.from} ${styles.class}`}>
                {classes}
            </div>
            <div className = {styles.bar}></div>
            <div className = {styles.amount}>
                USD$ {amount}
            </div>
            {
                isMonthly ? (
                    <div className = {styles.monthly}>
                        Per month
                    </div>
                ):(
                    <div className = {styles.monthly}>
                        Once for 90 days
                    </div>
                )
            }
            <div className = {styles.btn}>
                Buy now
            </div>
        </div>
    )
}
export default Card