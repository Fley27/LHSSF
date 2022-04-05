import Nav from "../header/nav"
import HeaderBodyContact from "../header/body-contact"
import styles from "../../styles/header/Header-courses.module.css"

const HeaderContact = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background} ${styles.bgCOurse}`}></div>
        <Nav/>
        <HeaderBodyContact/>
    </div>
)

export default HeaderContact