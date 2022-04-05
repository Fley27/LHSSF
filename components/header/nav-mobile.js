import styles from "../../styles/Nav-mobile.module.css";


const NavMobile = ({hidden}) => {
    return(
        <div className = {`${styles.container} ${!hidden ? styles.visible : ``}`}>
            <div className = {styles.menu}>
                <>
                    <div className = {styles.navItem}>
                        <button onClick = {()=>window.location.href = "/"} className = {styles.navItemButton}>Home</button>
                    </div>
                    <div className = {styles.navItem}>
                        <button onClick = {()=> window.location.href = "/about-us"} className = { styles.navItemButton}>About</button>
                    </div>
                    <div className = {styles.navItem}>
                        <button  className = { styles.navItemButton}>Courses <i className="fas fa-sort-down"></i></button>
                        <div className = {styles.dropdownMobile}>
                            <div onClick = {() => window.location.href  = "/course/basic"} className = {styles.dropdownItem}>Basic Spanish Level</div>
                            <div onClick = {() => window.location.href  = "/course/intermediate"}             className = {styles.dropdownItem}>Pre-Intermediate Spanish Level</div>
                            <div onClick = {() => window.location.href  = "/course/advanced"}                  className = {styles.dropdownItem}>Intermediate Spanish Level</div>
                            <div onClick = {() => window.location.href  = "/course/business"}  className = {styles.dropdownItem}>Advanced Spanish Level</div>
                        </div>
                    </div>
                    <div className = {styles.navItem}>
                        <button onClick = {()=> window.location.href = "/contact-us"} className = { styles.navItemButton}>Contact</button>
                    </div>
                </>
            </div>
        </div>
    )
}



export default NavMobile;
