import Nav from "../../../header/nav"
import HeaderBodyCourseBusiness from "../../../header/header-course-business";
import styles from "../../../../styles/header/Header-courses.module.css"

const HeaderBusiness = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background} ${styles.bgCourse}`}></div>
        <Nav/>
        <HeaderBodyCourseBusiness/>
    </div>
)

export default HeaderBusiness;