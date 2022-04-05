import React from "react";
import Head from "next/head";
import Header from "../components/home/header";
import Classes from "../components/courses/classes/index"
import Story from "../components/home/story";
import Plan from "../components//courses/plan/index"
import Faq from "../components/faq";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css"

const Home = () => {
    return(
        <div className = {styles.container}>
        <Head>
            <title>LHSSF, Learn how to Speak Spanish Fluently </title>
            <meta name = "description" content = "We teach people how to speak spanish fluently easily - in less than 90 days." />
        </Head>
            <Header/>
            <Classes/>
            <Plan/>
            <Story/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Home;