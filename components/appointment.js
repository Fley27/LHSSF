import styles from "../styles/Appointment.module.css"

const Appointment = () => (
    <div className = {styles.container}>
        <div className = {styles.appointment}>
            <div className = {styles.title}>Let's Meet</div>
            <div className = {styles.btn}>
                Click here
            </div>
        </div>
    </div>
)

export default Appointment