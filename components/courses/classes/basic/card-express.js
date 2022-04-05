import Image from "next/image";
import styles from "../../../../styles/course/class/Card-expectation.module.css";

const CardExpectation = ({image, title, description, item1, item2, item3, normal = false}) => (
    <div className = {`${styles.container}  ${!normal ? styles.reverse : ""}`}>
        <div className = {styles.item}>
            <div className = {styles.title}>
                {title}
            </div>
            <div className = {styles.description}>
                {description}
                <div className = {styles.reasons}>
                    <div className = {styles.itemReason}>
                        <span className = {styles.bar}></span>
                        {item1}
                    </div>
                    <div className = {styles.itemReason}>
                        <span className = {styles.bar}></span>
                        {item2}
                    </div>
                    <div className = {styles.itemReason}>
                        <span className = {styles.bar}></span>
                        {item3}
                    </div>
                </div>
            </div>
        </div>
        <div className = {styles.item}>
            <div className = {styles.image}>
                <Image
                    src = {image}
                    layout = "fill"
                    alt="Woman with a laptop"
                    layout = "fill"
                    placeholder = "blur"
                    objectFit = "contain"
                />
            </div>
        </div>
    </div>
)

export default CardExpectation;