import React from 'react'
import { Link, Router } from '../../routes'
import Head from 'next/head'


export default class Header extends React.Component{
    render(){
        return(
            <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <div className="header">
            <Link route='home' params={{ slug: 'home' }}><a><i className="fa fa-home"></i></a></Link>
            <Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker</a></Link>
            <Link route='wishes' params={{ slug: 'wishes' }}><a>Wishes</a></Link>
            <Link route='faq' params={{ slug: 'faq' }}><a>FAQ</a></Link>
            <style >{`
                .header{
                    background-color: #588E95;
                    text-align: left;
                    padding: 20px 0px 20px 0px;
                    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
                }
                a {
                    color: white;
                }
                .header a {
                    font-size: 15px;
                    text-decoration: none;
                    padding: 20px;

                }
                .header a:hover {
                   background-color: #006666;
                   color: #000;

                }
                .fa.fa-home {
                  font-size: 23px;
 
                 }
                
            `}</style>
            </div>
            </div>
            
        );
    }
}