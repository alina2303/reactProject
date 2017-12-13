import React from 'react'
//import ss from '../../styles/Footer.scss'
import { stylesheet, classNames } from '../../styles/Footer.scss'


export default class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <p>---------</p>
                <p>Footer</p>
                <p>---------</p>
                <style jsx>{`
                .footer{
                    background-color: #0A1829;
                }
                p{
                    color: pink;
                    text-align: center;
                }
                `}</style>
            </div>
        );
    }

}