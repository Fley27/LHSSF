import Nav from "../../../header/nav"
import HeaderBodyCourseAdvanced from "../../../header/body-course-advanced";
import styles from "../../../../styles/header/Header-courses.module.css"

const HeaderAdvanced = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background}`}></div>
        <Nav/>
        <HeaderBodyCourseAdvanced/>
    </div>
)

export default HeaderAdvanced;