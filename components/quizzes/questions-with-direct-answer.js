import React, {useState, useRef, useEffect} from "react"
import autosize from "autosize";
import styles from "../../styles/Question-with-multiple-choice.module.css"

export const QuestionWithDirectAnswer = () =>{
    const [select, setSelect] = useState(null);

    const textarea = useRef("");

    useEffect(() => {
        textarea.current.focus();
        autosize(textarea.current);
    })

    return(
        <div className = {styles.container}>
            <div className = {styles.question}>What everything that you can heard.</div>
            <div><iframe width="300" height="60" src="https://vocaroo.com/embed/1l8y8WMfbHYy?autoplay=0" frameborder="0" allow="autoplay"></iframe></div>
            <div className = {styles.answers}>
                <textarea rows = {1} ref = {textarea} name = "answer"  className = {`${styles.answer} ${styles.textarea}`}/>
            </div>
        </div>
    )
}

