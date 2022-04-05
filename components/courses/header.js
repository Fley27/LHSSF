import Nav from "../header/nav"
import HeaderBodyCourse from "../header/body-course"
import styles from "../../styles/header/Header-courses.module.css"

const HeaderCourses = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background} ${styles.bgCourse}`}></div>
        <Nav/>
        <HeaderBodyCourse/>
    </div>
)

export default HeaderCourses