import React, {useState} from "react";
import Card from "./card"
import styles from "../../../styles/Pricing.module.css"

const Pricing = () => {
    const [selected, setSelected] = useState(1);
    return(
        <div className = {styles.container}>
            <div className = {styles.bgl}></div>
            <div className = {styles.bgr}></div>
            <div className = {styles.cards}>
                <Card
                    amount = "190"
                    classes = "Week Schedule"
                    description = "Turpis massa tincidunt dui ut ornare lectus sit amet est. Nulla facilisi morbi tempus iaculis urna id volutpat lacus."
                    selected = {selected}
                    setSelected = {setSelected}
                    index = {0}
                />
                <Card
                    amount = "210"
                    classes = "Weekend Schedule"
                    description = "Turpis massa tincidunt dui ut ornare lectus sit amet est. Nulla facilisi morbi tempus iaculis urna id volutpat lacus."
                    selected = {selected}
                    setSelected = {setSelected}
                    index = {1}
                />
                <Card
                    amount = "550"
                    classes = "Private Classes"
                    description = "Turpis massa tincidunt dui ut ornare lectus sit amet est. Nulla facilisi morbi tempus iaculis urna id volutpat lacus."
                    selected = {selected}
                    setSelected = {setSelected}
                    index = {2}
                />
            </div>
        </div>
    )
}
export default Pricing;