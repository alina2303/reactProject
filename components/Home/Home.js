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
            <style>{`
                  #container { 
                    background-color: #fff;
                    margin: 20px;
                  }
                  .content-holder {
                    min-height: 95vh;
                    background-color: #e6e6e6;
                    background: url('../../static/backgrounds/img/money.jpg');
                    background-size:cover;
                    background-position: center;
                    background-attachment: fixed;   
                  }
                  .content-holder {
                    padding: 30px;
                  }
                  .holder i {
                    font-size: 30px;
                    font-style: normal;
                  }

                  .holder-part i {
                    font-size: 30px;
                    font-style: normal;
                  }
                  .holder h3{
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                    position: absolute;
                    padding-right: 50px;
                    left: 50%;
                    text-align: right;
                    font-size: 20px;
                    color: #f2e6d9;
                    top: 100px;
                  }
                  .holder-part h4 {
                    font-size: 20px;
                    color: #f2e6d9;
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                    padding-right: 50px;
                    position: absolute;
                    left: 50%;
                    top: 370px;
                    text-align: right;
                    
                }
                h3, h4 {
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                    position: absolute;
                    padding-right: 50px;
                    left: 50%;
                    text-align: right;
                }

                  
                  
                  
            `}</style>
               
            </div>
        );
    }

}