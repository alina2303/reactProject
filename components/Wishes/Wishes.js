import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'


export default class Wishes extends React.Component{
    static async getInitialProps ({ req }) {
      }

    render(){
        return(
            <div>
            <Header />
            <p>WISHES</p>
            <Footer />
            </div>
        );
    }

}