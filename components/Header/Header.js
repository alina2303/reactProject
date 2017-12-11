import React from 'react'
import { Link, Router } from '../../routes'


export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
            <Link route='home' params={{ slug: 'home' }}><a>Home | </a></Link>
            <Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker | </a></Link>
            <Link route='wishes' params={{ slug: 'wishes' }}><a>Wishes</a></Link>
            <p>---------</p>
            <style jsx>{`
                .header{
                    background-color: #0A1829;
                    text-align: center;
                }
                a, p{
                    color: white;
                }
            `}</style>
            </div>
            
        );
    }
}