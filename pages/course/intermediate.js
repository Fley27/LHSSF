import React from "react";
import Head from "next/head";
import HeaderIntermediate from "../../components/courses/classes/intermediate/header-intermediate"
import Appointment from "../../components/appointment";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css"

const Intermediate = () => {
    return(
        <div className = {styles.container}>
        <Head>
            <title>LHSSF, Learn how to Speak Spanish Fluently </title>
            <meta name = "description" content = "We teach people how to speak spanish fluently easily - in less than 90 days." />
        </Head>
            <HeaderIntermediate/>
            <Appointment/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Intermediate;