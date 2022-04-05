import React from "react";
import Head from "next/head";
import HeaderBusiness from "../../components/courses/classes/business/header-business";
import Expectation from "../../components/courses/classes/basic/expectation";
import Plan from "../../components/courses/plan/index"
import Appointment from "../../components/appointment";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css"

const Business = () => {
    return(
        <div className = {styles.container}>
        <Head>
            <title>LHSSF, Learn how to Speak Spanish Fluently </title>
            <meta name = "description" content = "We teach people how to speak spanish fluently easily - in less than 90 days." />
        </Head>
            <HeaderBusiness/>
            <Expectation/>
            <div className = {styles.title}>Choose the Subscription Plan that Suits You</div>
            <Plan/>
            <Appointment/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Business;