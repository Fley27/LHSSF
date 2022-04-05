import Nav from "../../../header/nav"
import HeaderBodyCourseIntermediate from "../../../header/body-course-intermediate";
import styles from "../../../../styles/header/Header-courses.module.css"

const HeaderIntermediate = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background} ${styles.bgCourse}`}></div>
        <Nav/>
        <HeaderBodyCourseIntermediate/>
    </div>
)

export default HeaderIntermediate;