import Image from "next/image"
import OnlineCourse from "../../images/business.png"
import styles from "../../styles/header/Header-body-contact.module.css"


const HeaderBodyCourseBusiness = () => (
    <div className = {styles.container} >
        <div className = {styles.overlay}></div>
        <div className = {styles.backgroundLeft}>
            <div className = {`${styles.triangle} ${styles.down}`}></div>
            <div className = {`${styles.curvedarrow}`}></div>
            <div className = {`${styles.heart}`}></div>
        </div>
        <div className = {styles.information}>
            <div className = {styles.item}>
                <div className = {styles.square}></div>
                <div className = {styles.headline}>
                    1D
                </div>
                <div className = {styles.title}>
                    Business <br/>
                    Spanish Level.
                </div>
                <div className = {styles.description}>
                    Growth strategies. Seamlessly visualize quality intellectual capital without superior
                    collaboration and idea-sharing.
                </div>
                <div className = {styles.btns}>
                    <div className = {`${styles.btn}  ${styles.getStarted}`}>
                        Take a Test
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

export default HeaderBodyCourseBusiness;