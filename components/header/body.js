import Image from "next/image"
import femaleStudent from "../../images/female_ccexpress.png"
import styles from "../../styles/Body-header.module.css"


const HeaderBody = () => (
    <div className = {styles.container} >
        <div className = {styles.backgroundLeft}>
            <div className = {`${styles.triangle} ${styles.down}`}></div>
            <div className = {`${styles.curvedarrow}`}></div>
            <div className = {`${styles.heart}`}></div>
        </div>
        <div className = {styles.overlay}></div>
        <div className = {styles.information}>
            <div className = {styles.item}>
                <div className = {styles.title}>
                    Academy 
                    of Your Business
                </div>
                <div className = {styles.description}>
                    By default, Next.js will automatically inline font CSS at build time, 
                    eliminating an extra round trip to fetch font declarations. This results in improvements to
                </div>
                <div className = {styles.btns}>
                    <div className = {`${styles.btn}  ${styles.getStarted}`}>
                        Evaluate your Skills
                    </div>
                </div>
            </div>
            <div className = {styles.item}>
                <div className = {`${styles.box} ${styles.blackBox}`}> 
                    <div className = {styles.boxTitle}>6k</div>
                    <div className = {styles.text}>Clients</div>
                </div>
                <div className = {styles.image}>
                    <Image
                        src = {femaleStudent}
                        layout = "fill"
                        alt="female student"
                        layout = "fill"
                        placeholder = "blur"
                        objectFit = "cover"
                        objectPosition = "10% 50%"
                    />
                </div>
                <div className =  {`${styles.box} ${styles.lightBox}`}>
                    <div className = {styles.diamond}></div>
                    <div className = {styles.boxTitle}>450M</div>
                    <div className = {styles.text}>Native Speakers</div>
                </div>
            </div>
        </div>
    </div>
)

export default HeaderBody;