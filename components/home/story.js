import Image from "next/image";
import GirlStory from "../../images/storyyy.png"
import styles from "../../styles/Story.module.css"
 
const Story = () => (
    <div className = {styles.container}>
        <div className = {`${styles.curvedarrow}`}></div>
        <div className = {styles.story}>
            <div className = {styles.triangle}></div>
            <div className = {styles.image}>
                <Image  
                    src = {GirlStory}
                    layout = "fill"
                    alt="female student"
                    layout = "fill"
                    placeholder = "blur"
                    objectFit = "cover"
                    objectPosition = "30% 20%"
                />
            </div>
            <div className = {styles.text}>
                <div className = {styles.title}>Our Story</div>
                <div className = {styles.description}>
                    It’s no mean feat to make your audience feel they have learned something through your story.
                    <br/>
                    <br/>
                    Meaning is that which is intended or understood. 
                    The audience draws significance, relevance or profundity out of a story 
                    when it understands the deeper implications, reasonings and causes behind it. 
                </div>
            </div>
        </div>
    </div>
)

export default Story;