import React from 'react'
import { Link, Router } from '../routes'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'

export default class HomeModule extends React.Component{
    render(){
        return(
            <div>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="../../static/css/custom.css" />
            </Head>
                <Header />
                <div className="container-fluid aboutbody">
                <div className="row">
                <div className="col-sm-12">
                <h1 className="aboutush">A little about us</h1>
                <p className="aboutusp">We are a passionate students at University College of Northern Denmark in Aalborg. During our final project in first semester of Web Development programme we were assigned to develop a web application.
                    Our group consists of two people. Alina who has front end background and Matus who has back end background.
                </p>
                <p className="contact">Contact:</p>
                <p className="contactp">
                <strong>Matus Kollarcik: </strong>
                <br/>
                matus.kollarcik@gmail.com
                <br/>
                <strong>Alina Bohdan:</strong>
                <br/>
                abogdan699@gmail.com
                </p>
                </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}