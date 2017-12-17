import React from 'react'
//import ss from '../../styles/Footer.scss'
import { stylesheet, classNames } from '../../styles/Footer.scss'


export default class Footer extends React.Component {
    render(){
        return(
            <div className="footer col-sm-12">
                <p>---------</p>
                <p>Footer</p>
                <p>---------</p>
                <style jsx>{`
                .footer{
                    background-color: #588E95;
                    /*position: absolute;
                    bottom: 0;*/
                    width: 100%;
                    text-align: center;
                }
                p{
                    color: white;
                    text-align: center;
                }
                `}</style>
            </div>
        );
    }

}