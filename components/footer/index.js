import styles from "../../styles/Footer.module.css"

const Footer = () => (
    <div className = {styles.container}>
        <div className = {styles.footer}>
            <div className = {styles.logo}>
                <span>LHSSF</span>
            </div>
            <div className = {`${styles.column}  ${styles.left}`}>
                <div className = {styles.title}>Menu</div>
                <div className = {styles.item}>Courses</div>
                <div className = {styles.item}>About Us</div>
                <div className = {styles.item}>Contact Us</div>
                <div className = {styles.item}>Pricing</div>
            </div>
            <div className = {styles.column}>
                <div className = {styles.title}>Connect</div>
                <div className = {styles.item}>Linkedin</div>
                <div className = {styles.item}>Facebook</div>
                <div className = {styles.item}>Twitter</div>
                <div className = {styles.item}>Intagram</div>
            </div>
            <div className = {styles.bar}></div>
            <div className = {styles.copyright}>Copyright {new Date().getFullYear()} © <span onClick = {()=> window.location.href = "https://fenleymenelas.netlify.app/"} >Fenley Ménélas</span></div>
        </div>
    </div>
)

export default Footer;