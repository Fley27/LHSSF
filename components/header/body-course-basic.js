import Image from "next/image"
import Basic from "../../images/basic-.png"
import styles from "../../styles/header/Header-body-contact.module.css"


const HeaderBodyCourseBasic = () => (
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
                    1A
                </div>
                <div className = {styles.title}>
                    Basic <br/>
                    Spanish Level.
                </div>
                <div className = {styles.description}>
                    Growth strategies. Seamlessly visualize quality intellectual capital without superior
                    collaboration and idea-sharing.
                </div>
                <div className = {styles.btns}>
                    <div className = {`${styles.btn}  ${styles.getStarted}`}>
                        Evaluate your Skills
                    </div>
                </div>
            </div>
            <div className = {styles.item}>
                <div className = {styles.image}>
                    <Image
                        src = {Basic}
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

export default HeaderBodyCourseBasic;