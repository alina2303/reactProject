import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from 'next/head'

export default class Home extends React.Component{
   

    render(){
        return(
            <div id="body">
             <Head>
             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
             <link rel="stylesheet" href="../../static/css/home.css" />
            </Head>
            <Header />
                <div className="content-holder">
                    <div className="holder">
                        <h3>
                            What is <i>your</i> biggest <i>desire</i>? Have you been dreaming about something for a long time? Is your dream <i>requires saving</i>? You are really bad at accumulating? Anyway, no matter what is your wish, it concerns money. 
                        </h3>
                    </div>
                    <div className="holder-part">
                        <h4>
                        <i>Here</i> you can easily control your income and see when <i>you</i> can <i>get what you want</i>.  
                        </h4>
                    </div>
                </div>
            <Footer />    
            </div>
        );
    }

}