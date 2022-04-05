import React, {useState} from "react";
import Card from "./card"
import styles from "../../../styles/plan//Plan.module.css";

const Plan = () => {
    const [selected, setSelected] = useState(1);
    return(
        <div className = {styles.container}>
            <div className = {styles.bgl}></div>
            <div className = {styles.bgr}></div>
            <div className = {styles.cards}>
                <Card
                    name = "SILVER"
                    amount = "150"
                    classes = "3 CLASSES PER WEEK"
                    description = "Includes group and private classes, access to online materials and activities, access to teacher-led grammar webinars and British Council certificate of achievement."
                    selected = {selected}
                    setSelected = {setSelected}
                    index = {0}
                />
                <Card
                    name = "GOLD"
                    amount = "250"
                    classes = "5 CLASSES PER WEEK"
                    description = "Includes group and private classes, access to online materials and activities, access to teacher-led grammar webinars and British Council certificate of achievement."
                    selected = {selected}
                    setSelected = {setSelected}
                    index = {1}
                />
                <Card
                    name = "PLATINUM"
                    amount = "220"
                    classes = "4 CLASSES PER WEEK"
                    description = "Includes private classes, access to online materials and activities, access to teacher-led grammar webinars."
                    selected = {selected}
                    setSelected = {setSelected}
                    index = {2}
                    isMonthly = {true}
                />
            </div>
        </div>
    )
}
export default Plan;