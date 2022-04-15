import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuestionWithMultipleChoice } from "../../components/quizzes/question-with-multitple-choice";
import { QuestionWithDirectAnswer } from "../../components/quizzes/questions-with-direct-answer";
import { CompleteWithMultipleChoice } from "../../components/quizzes/complete-with-multiple-choice";
import styles from "../../styles/Quiz.module.css"

const Quiz = () => {
    return(
        <div className = {styles.container}>
            <div className = {styles.overlay}></div>
            <div className = {styles.progressBar}>
                <div style = { { width : `${3/9 * 100}%`}} className = {styles.insideBar}></div>
            </div>
            <div className = {styles.pages}>
                <div className = {styles.btn}>
                    <FontAwesomeIcon icon="fa-light fa-arrow-left-long" />
                    PREVIOUS
                </div>
                <div className = {styles.btn}>
                    NEXT
                </div>
            </div>
            <div className = {styles.quiz}>
                <div className = {styles.currentQuestion}>
                    Question 2/6
                </div>
                <QuestionWithDirectAnswer/>
                <div className = {styles.nextQuestion}>
                    Next Question
                </div>
            </div>
        </div>
    )
}

export default Quiz;