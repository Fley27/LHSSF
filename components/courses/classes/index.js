import styles from "../../../styles/course/Class.module.css";
import Card from "./card";

const Classes = () => (
    <div className = {styles.container}>
        <div className = {styles.titleClass}>Choose a Program that Suits You.</div>
        <Card   
            grade = "A"
            title = "Basic Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/basic"
        />
        <Card   
            grade = "B"
            title = "Intermediate Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/intermediate"
        />
        <Card   
            grade = "C"
            title = "Advanced Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/advanced"
        />
        <Card   
            grade = "D"
            title = "Business Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/business"
        />
    </div>
)

export default Classes;