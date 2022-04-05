import styles from "../../../styles/Pricing.module.css";

const Card = ({amount, classes, description, selected, setSelected, index = 1 }) => {

    const handleSelected = (item) =>{
        setSelected(item)
    }
    return(
        <div onClick = {()=> handleSelected(index)} className = {`${styles.card}  ${selected === index ? styles.selected : ""}`}>
            <div className = {styles.from}>
                From
            </div>
            <div className = {styles.amount}>
                $ {amount}
            </div>
            <div className = {styles.from}>
                {classes}
            </div>
            <div className = {styles.bar}></div>
            <div className = {styles.description}>
                {description}
            </div>
        </div>
    )
}
export default Card