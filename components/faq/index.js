import React, {useState} from "react";
import Image from "next/image";
import Dots from "../../images/dots.png"
import Box from "./item.js"
import styles from "../../styles/Faq.module.css";


const Faq = () => {
    const [selected, setSelected] = useState(0);
    return(
        <div className = {styles.container}>
            <div className = {styles.faqs}>
                <div className = {styles.bg}>
                    <Image
                        src = {Dots}
                        placeholder = "blur"
                        alt = "Half Circle Dots"
                    />
                </div>
                <div className = {styles.text}>
                    <div className = {styles.title}>
                        <div className = {styles.triangle}></div>
                        <span>Frequently Asked Questions</span>
                    </div>
                    <div className = {styles.description}>
                        If you have any further questions, please contact us.
                    </div>
                </div>
                <div className = {styles.item}>
                    <Box 
                        title = "Will I get a lifetime updates?"
                        description = "Meaning is that which is intended or understood. The audience draws significance, relevance or profundity out of a story when it understands the deeper implications, reasonings and causes behind it."
                        selected = {selected}
                        setSelected = {setSelected}
                        index = {0}
                    />
                    <Box 
                        title = "Will I get a lifetime updates?"
                        description = "Meaning is that which is intended or understood. The audience draws significance, relevance or profundity out of a story when it understands the deeper implications, reasonings and causes behind it."
                        selected = {selected}
                        setSelected = {setSelected}
                        index = {1}
                    />
                    <Box 
                        title = "Will I get a lifetime updates?"
                        description = "Meaning is that which is intended or understood. The audience draws significance, relevance or profundity out of a story when it understands the deeper implications, reasonings and causes behind it."
                        selected = {selected}
                        setSelected = {setSelected}
                        index = {2}
                    />
                </div>
                <div className = {styles.item}>
                    <Box 
                        title = "Will I get a lifetime updates?"
                        description = "Meaning is that which is intended or understood. The audience draws significance, relevance or profundity out of a story when it understands the deeper implications, reasonings and causes behind it."
                        selected = {selected}
                        setSelected = {setSelected}
                        index = {3}
                    />
                    <Box 
                        title = "Will I get a lifetime updates?"
                        description = "Meaning is that which is intended or understood. The audience draws significance, relevance or profundity out of a story when it understands the deeper implications, reasonings and causes behind it."
                        selected = {selected}
                        setSelected = {setSelected}
                        index = {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Faq;