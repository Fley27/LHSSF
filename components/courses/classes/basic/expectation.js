import CardExpectation from "./card-express";
import woman from "../../../../images/pretty-woman.png"
import order from "../../../../images/payment.png"
import styles from "../../../../styles/course/class/Expectation.module.css";
 
const Expectation = () => (
    <div className = {styles.container}>
        <div className = {styles.title}>
            For Work - For Study - For Tavel - For Life.
        </div>
        <div className = {styles.description}>
            A 100% online and interactive adult course
            <div className = {styles.reasons}>
                <div className = {styles.item}>
                    <span className = {styles.bar}></span>
                    Live online classes available 24/7.
                </div>
                <div className = {styles.item}>
                    <span className = {styles.bar}></span>
                    Practise with online activities and materials.
                </div>
                <div className = {styles.item}>
                    <span className = {styles.bar}></span>
                    Enhance your learning experience.
                </div>
                <div className = {styles.btn}>
                    Choose Your Plan
                </div>
            </div>
        </div>
        <CardExpectation
            title = "Target your goals with an English online course designed around your needs."
            description = "Study in your own time and at your own pace. Create the perfect course you need to achieve your goals."
            item1 = "Choose your lesson themes."
            item2 = "Set your study goals."
            item3 = "Create your lesson schedule."
            image = {woman}
        />
        <CardExpectation
            title = "Plans and pricing to suit your budget and lifestyle."
            description = "Choose from a range of subscription plans and start learning today."
            item1 = "Flexible monthly payment plans."
            item2 = "Cancel anytime."
            item3 = "Get a 15% off by referring another person."
            image = {order}
            normal = {true}
        />
    </div>
)

export default Expectation;