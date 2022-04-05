import React, {useState} from "react";
import styles from "../../styles/contact/Form.module.css"

const ContactForm = (props) => {
    const [state, setState] =  useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }
    
    return(
        <>
            <div className = {styles.container}>
                <div className = {styles.contactForm}>
                    <div className = {styles.item}>
                        <div className = {styles.infoContainer}>
                            <div className = {styles.addressLabel}>Address</div>
                            <div className = {styles.address}>Street Villas Noa 51,<br/>Santiago De Los Caballeros 51000</div>
                            <div className = {styles.addressLabel}>Email Address</div>
                            <div className = {styles.address}><a href = "mailto:lhssf@gmail.com">fenleymenelas@gmail.com</a></div>
                            <div className = {styles.addressLabel}>Phone Number</div>
                            <div className = {styles.address}>+1 (809) 614-3463</div>
                        </div>
                        <form className = {styles.form}>
                            <div className = {styles.rowContact}>
                                <div className  = {styles.colContact}>
                                    <input onChange = {handleChange} value = {state.name} type = "text" placeholder =  "Name" name = "name"/>
                                </div>
                                <div className  = {styles.colContact}>
                                    <input onChange = {handleChange}  value = {state.email}  type = "text" placeholder =  "Email" name = "email"/>
                                </div>
                            </div>
                            <div className  = {styles.rowContact}>
                                <input onChange = {handleChange}  value = {state.subject} type = "text" placeholder =  "Subject" name = "subject"/>
                            </div>
                            <div className  = {styles.rowContact}>
                                <textarea onChange = {handleChange}  value = {state.message} type = "text" placeholder =  "Message" name = "message"/>
                            </div>
                            <button type = "submit" className = {styles.formButton}>
                                Send message!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContactForm;