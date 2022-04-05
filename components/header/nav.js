import React, {useState} from "react";
import NavMobile from "./nav-mobile";
import styles from "../../styles/Nav.module.css"

const Nav = () =>{ 
    const [hidden, setHidden] = useState(true)

    const handleHidden = () => {
        setHidden(!hidden)
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.logo}>
                <span>LHSSF</span>
                <div onClick = {() => handleHidden()} className = {`${!hidden ? styles.close : styles.icon}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className = {styles.nav}>
                <div onClick = {()=> window.location.href = "/"} className = {styles.item}>
                    <span>Home</span>
                </div>
                <div className = {styles.item}>
                    <span>Courses <i className="fas fa-sort-down"></i></span>
                    <div className = {styles.dropdown}>
                        <div onClick = {() => window.location.href  = "/course/basic"} className = {`${styles.dropdown_item}`}>Basic Spanish Level</div>
                        <div onClick = {() => window.location.href  = "/course/intermediate"}             className = {`${styles.dropdown_item}`}>Pre-Intermediate Spanish Level</div>
                        <div onClick = {() => window.location.href  = "/course/advanced"}                  className = {`${styles.dropdown_item}`}>Intermediate Spanish Level</div>
                        <div onClick = {() => window.location.href  = "/course/business"}  className = {`${styles.dropdown_item}`}>Advanced Spanish Level</div>
                    </div>
                </div>
                <div onClick = {()=> window.location.href = "/about-us"} className = {styles.item}>
                    <span>About Us</span>
                </div>
                <div onClick = {()=> window.location.href = "/contact-us"} className = {styles.item}>
                    <span>Contact Us</span>
                </div>
            </div>
            <NavMobile
                hidden = {hidden}
            />
        </div>
    )
}
export default Nav;