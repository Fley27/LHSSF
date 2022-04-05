import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../../../styles/Card-process.module.css"

const CardProcess = ({title, description, icon}) => (
    <div className = {styles.container}>
        <div className = {styles.icon}>
            <span><FontAwesomeIcon icon="fa-light fa-clock" /></span>
        </div>
        <div className = {styles.title}>
            {title}
        </div>
        <div className = {styles.description}>
            {description}
        </div>
    </div>
)

export default CardProcess;

/*
    <i class="fa-solid fa-file-lines"></i>
    <i class="fa-solid fa-loader"></i>
    <i class="fa-solid fa-chart-simple"></i>
*/