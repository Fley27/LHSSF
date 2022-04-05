import Nav from "../header/nav"
import HeaderBodyAbout from "../header/body-about"
import styles from "../../styles/header/Header-courses.module.css"

const HeaderAbout = () => (
    <div className = {styles.container}>
        <div className = {`${styles.background} ${styles.bgAbout}`}></div>
        <Nav/>
        <HeaderBodyAbout/>
    </div>
)

export default HeaderAbout