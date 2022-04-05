import Image from "next/image"
import ContactUS from "../../images/contact.png"
import styles from "../../styles/header/Header-body-contact.module.css"


const HeaderBodyContact = () => (
    <div className = {styles.container} >
        <div className = {styles.overlay}></div>
        <div className = {styles.information}>
            <div className = {styles.item}>
                <div className = {styles.square}></div>
                <div className = {styles.headline}>
                    CONTACT US
                </div>
                <div className = {styles.title}>
                    Get in Touch <br/>
                    Today!
                </div>
                <div className = {styles.description}>
                    Normcore proident sed selvage. Post-ironic ugh master cleanse etsy you probably 
                    haven't heard of them mustache mollit readymade.
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
                        src = {ContactUS}
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

export default HeaderBodyContact;