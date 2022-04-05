import styles from "../../../styles/course/Card-course.module.css"

const CardCourse = ({title, description, grade, color}) => (
    <div className = {`${styles.container}`}>
        <div className = {`${styles.class} ${color == 0 ? styles.yellow : color == 1 ? styles.green : color == 2 ? styles.pink : color == 3 ? styles.purple : ""}`}>
            {grade}
        </div>
        <div className = {styles.title}>
            {title}
        </div>
        <div className = {styles.description}>
            {description}
        </div>
    </div>
)

export default CardCourse;