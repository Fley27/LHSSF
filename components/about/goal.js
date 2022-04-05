import styles from "../../styles/course/Course.module.css"

const Goal = () => (
    <div className = {styles.container}>
        <div className = {styles.star}></div>
        <div className = {styles.text}>
            <div className = {styles.title}>Our Goal</div>
            <div className = {styles.description}>
                This program is designed to help you take advantage of the growing need for digital freelancers. 
                Prepare to meet the demand for qualified professionals that can deliver great work.
            </div>
        </div>
    </div>
)

export default Goal;