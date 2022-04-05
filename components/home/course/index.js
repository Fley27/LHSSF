import Card from "./card";
import styles from "../../../styles/course/Course.module.css"

const Course = () => (
    <div className = {styles.container}>
        <div className = {styles.star}></div>
        <div className = {styles.text}>
            <div className = {styles.title}>Our Courses</div>
            <div className = {styles.description}>
                This program is designed to help you take advantage of the growing need for digital freelancers. 
                Prepare to meet the demand for qualified professionals that can deliver great work.
            </div>
        </div>
        <div className = {styles.cards}>
            <Card
                grade = "1A"
                title = "Basic Spanish Level"
                description = "We've designeg and built ecommerce experiences that driven sales."
                color = "0"
            />
            <Card
                grade = "1B"
                title = "Intermediate Spanish Level"
                description = "We've designeg and built ecommerce experiences that driven sales."
                color = "1"
            />
            <Card
                grade = "1C"
                title = "Advanced Spanish Level"
                description = "We've designeg and built ecommerce experiences that driven sales."
                color = "2"
            />
            <Card
                grade = "1D"
                title = "Intermediate Spanish Level"
                description = "We've designeg and built ecommerce experiences that driven sales."
                color = "3"
            />
        </div>
    </div>
)

export default Course;