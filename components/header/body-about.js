import Image from "next/image"
import AboutUS from "../../images/about-us.png"
import styles from "../../styles/header/Header-body-contact.module.css"


const HeaderBodyAbout = () => (
    <div className = {styles.container} >
        <div className = {styles.overlay}></div>
        <div className = {styles.information}>
            <div className = {styles.item}>
                <div className = {styles.square}></div>
                <div className = {styles.headline}>
                    ABOUT US
                </div>
                <div className = {styles.title}>
                    A few reasons <br/>
                    for Choosing Us
                </div>
                <div className = {styles.description}>
                    Growth strategies. Seamlessly visualize quality intellectual capital without superior
                    collaboration and idea-sharing.
                </div>
                <div className = {styles.btns}>
                    <div className = {`${styles.btn} ${styles.btnAbout}`}>
                        Set an Appointment
                    </div>
                </div>
            </div>
            <div className = {styles.item}>
                <div className = {styles.image}>
                    <Image
                        src = {AboutUS}
                        layout = "fill"
                        alt="Online Course"
                        layout = "fill"
                        placeholder = "blur"
                        objectFit = "contain"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default HeaderBodyAbout;