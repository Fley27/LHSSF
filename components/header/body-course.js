import Image from "next/image"
import OnlineCourse from "../../images/online-course.png"
import styles from "../../styles/header/Header-body-contact.module.css"


const HeaderBodyCourse = () => (
    <div className = {styles.container} >
        <div className = {styles.overlay}></div>
        <div className = {styles.information}>
            <div className = {styles.item}>
                <div className = {styles.square}></div>
                <div className = {styles.headline}>
                    ADVANCED COURSE
                </div>
                <div className = {styles.title}>
                    Developed <br/>
                    and Built for You
                </div>
                <div className = {styles.description}>
                    Growth strategies. Seamlessly visualize quality intellectual capital without superior
                    collaboration and idea-sharing.
                </div>
                <div className = {styles.btns}>
                    <div className = {`${styles.btn}  ${styles.getStarted}`}>
                        Apply Today
                    </div>
                    <div className = {`${styles.btn}  ${styles.btnContact}`}>
                        Set an Appointment
                    </div>
                </div>
            </div>
            <div className = {styles.item}>
                <div className = {styles.image}>
                    <Image
                        src = {OnlineCourse}
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

export default HeaderBodyCourse;