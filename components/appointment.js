import styles from "../styles/Appointment.module.css"

const Appointment = () => (
    <div className = {styles.container}>
        <div className = {styles.appointment}>
            <div className = {styles.title}>Let's Talk Together</div>
            <div className = {styles.btn}>
                Set an Appointment
            </div>
        </div>
    </div>
)

export default Appointment