import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class Home extends React.Component{

    render(){
        return(
            <div>
            <Header />
            <p>HOME CONTENT</p>
            <Footer />
            </div>
        );
    }

}