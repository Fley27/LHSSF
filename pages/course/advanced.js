import React from "react";
import Head from "next/head";
import HeaderAdvanced from "../../components//courses/classes/advanced/header-advanced"
import Expectation from "../../components/courses/classes/basic/expectation";
import Plan from "../../components/courses/plan/index"
import Appointment from "../../components/appointment";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css"

const Advanced = () => {
    return(
        <div className = {styles.container}>
        <Head>
            <title>LHSSF, Learn how to Speak Spanish Fluently </title>
            <meta name = "description" content = "We teach people how to speak spanish fluently easily - in less than 90 days." />
        </Head>
            <HeaderAdvanced/>
            <Expectation/>
            <div className = {styles.title}>Choose the Subscription Plan that Suits You</div>
            <Plan/>
            <Appointment/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Advanced;