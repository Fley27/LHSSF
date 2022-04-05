import styles from "../../styles/Nav.module.css"

const Nav = () => (
    <div className = {styles.container}>
        <div className = {styles.logo}>
            LHSSF
        </div>
        <div className = {styles.nav}>
            <div onClick = {()=> window.location.href = "/"} className = {styles.item}>Home</div>
            <div onClick = {()=> window.location.href = "/courses"} className = {styles.item}>Courses</div>
            <div onClick = {()=> window.location.href = "/about-us"} className = {styles.item}>About Us</div>
            <div onClick = {()=> window.location.href = "/contact-us"} className = {styles.item}>Contact Us</div>
        </div>
    </div>
)

export default Nav;