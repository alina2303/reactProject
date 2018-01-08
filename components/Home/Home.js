import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from 'next/head'

export default class Home extends React.Component{

    render(){
        return(
            <div id="body">
             <Head>
             
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
            <style jsx>{`
                  #body { 
                    background-color: #e6e6e6;
                    background: url('../../static/backgrounds/img/money.jpg');
                    background-size:cover;
                    background-position: center; 
                  }
                  #container { 
                    background-color: #fff;
                    margin: 20px;
                  }
                  .content-holder {
                    min-height: 80vh; 
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
                  .holder{
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                    position: absolute;
                    padding-right: 50px;
                    left: 50%;
                    text-align: right;
                    font-size: 17px;
                    color: #f2e6d9;
                  }
                  .holder-part {
                    font-size: 20px;
                    color: #f2e6d9;
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                    padding-right: 50px;
                    position: absolute;
                    left: 50%;
                    top: 410px;
                    text-align: right;
                }

                  .close-btn {
                      position: absolute;
                      top: 10px;
                      right: 10px;
                      font-size: 15px;
                  }
                  .add-btn {
                    background: #3498db;
                    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
                    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
                    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
                    background-image: -o-linear-gradient(top, #3498db, #2980b9);
                    background-image: linear-gradient(to bottom, #3498db, #2980b9);
                    -webkit-border-radius: 11;
                    -moz-border-radius: 11;
                    border-radius: 11px;
                    font-family: Arial;
                    color: #ffffff;
                    font-size: 15px;
                    padding: 10px 20px 10px 20px;
                    text-decoration: none;
                  }
                  
                  .add-btn:hover {
                    background: #3cb0fd;
                    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
                    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
                    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
                    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
                    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
                    text-decoration: none;
                  }
                  input {
                    font-size: 15px;
                    margin-right: 5px;

                  }
                  .add-btn.sm  {
                    padding: 4px 10px 4px 10px;
                    border-radius: 5px;

                  }
            `}</style>
               
            </div>
        );
    }

}