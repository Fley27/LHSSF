import CardProcess from "./card";
import styles from "../../../styles/Our-process.module.css"

const OurProcess = () => (
    <div className = {styles.container}>
        <div className = {styles.star}></div>
        <div className = {styles.text}>
            <div className = {styles.title}>The process we follow</div>
            <div className = {styles.description}>
                This program is designed to help you take advantage of the growing need for digital freelancers. 
                Prepare to meet the demand for qualified professionals that can deliver great work.
            </div>
        </div>
        <div className = {styles.cards}>
            <CardProcess
                title = "Setting Appointement"
                description = "What you want your business to be."
            />
            <CardProcess
                title = "Planning"
                description = "What you want your business to be."
            />
            <CardProcess
                title = "Develop"
                description = "What you want your business to be."
            />
            <CardProcess
                title = "Business Structure"
                description = "What you want your business to be."
            />
        </div>
    </div>
)

export default OurProcess;