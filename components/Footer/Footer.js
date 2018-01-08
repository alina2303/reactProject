import React from 'react'
//import ss from '../../styles/Footer.scss'
import { stylesheet, classNames } from '../../styles/Footer.scss'


export default class Footer extends React.Component {
    render(){
        return(
            <div className="footer col-sm-12">
                <p>Copyright © 2017 A&#38;M</p>
                <style jsx>{`
                .footer{
                    background-color: #588E95;
                    width: 100%;
                    text-align: center;
                    padding: 10px 0px 10px 0px;
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                    font-size: 13px;
                }
                p{
                    color: #fff;
                    text-align: center;
                }
                `}</style>
            </div>
        );
    }

}