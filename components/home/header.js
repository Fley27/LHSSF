import Nav from "../header/nav"
import HeaderBody from "../header/body"
import styles from "../../styles/header/Header.module.css"

const Header = () => (
    <div className = {styles.container}>
        <div className = {styles.background}></div>
        <Nav/>
        <HeaderBody/>z
    </div>
)

export default Header