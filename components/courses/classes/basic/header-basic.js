import Nav from "../../../header/nav"
import HeaderBodyCourseBasic from "../../../header/body-course-basic";
import styles from "../../../../styles/header/Header-courses.module.css"

const HeaderBasic = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background} ${styles.bgAbout}`}></div>
        <Nav/>
        <HeaderBodyCourseBasic/>
    </div>
)

export default HeaderBasic;