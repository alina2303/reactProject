import React from 'react'
import { Link, Router } from '../../routes'


export default class Header extends React.Component{
    render(){
        return(
            <div className="header col-sm-12">
            <Link route='home' params={{ slug: 'home' }}><a>Home  </a></Link>
            <Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker  </a></Link>
            <Link route='wishes' params={{ slug: 'wishes' }}><a>Wishes</a></Link>
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
                
            `}</style>
            </div>
            
        );
    }
}