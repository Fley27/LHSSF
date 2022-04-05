import styles from "../../styles/Faq.module.css"

const Box =({selected, setSelected, index, title, description}) =>{ 
    const handleSelected = (item) => {
        setSelected(item)
    }
    return(
        <div onClick = {()=> handleSelected(index)} className = {`${styles.box}  ${selected === index ? styles.selected : ""}`}>
            <div className = {styles.header}>
                <div className = {styles.boxTitle}>
                    {title}
                </div>
                <div className = {styles.icon}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className = {styles.descriptionBox}>
                {description}
            </div>
        </div>
    )
}
export default Box;