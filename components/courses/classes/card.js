import styles from "../../../styles//course/Class.module.css";

const Card = ({grade, title, description, link}) => (
    <div className = {styles.card}>
        <div className = {styles.header}>
            {grade}
        </div>
        <div className = {styles.label}>1{grade}</div>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.description}>{description}</div>
        <div onClick = {() => window.location.href = `/${link}`} className = {styles.link}>
            View More
        </div>
    </div>
)

export default Card;