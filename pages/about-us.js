import React from "react";
import Head from "next/head";
import HeaderAbout from "../components/about/header";
import Goal from "../components/about/goal";
import Plan from "../components//courses/plan/index"
import Appointment from "../components/appointment";
import Community from "../components/about/community";
import Faq from "../components/faq";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css"

const AboutUs = () => {
    return(
        <div className = {styles.container}>
        <Head>
            <title>LHSSF, Learn how to Speak Spanish Fluently </title>
            <meta name = "description" content = "We teach people how to speak spanish fluently easily - in less than 90 days." />
        </Head>
            <HeaderAbout/>
            <Goal/>
            <div className = {styles.title}>Best Value for Money</div>
            <Plan/>
            <Community/>
            <Appointment/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default AboutUs;