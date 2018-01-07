import React from 'react'
import { Link, Router } from '../../routes'


export default class Header extends React.Component{
    render(){
        return(
            <div className="header col-sm-12">
            <br />
            <Link route='home' params={{ slug: 'home' }}><a>Home | </a></Link>
            <Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker | </a></Link>
            <Link route='wishes' params={{ slug: 'wishes' }}><a>Wishes</a></Link>
            <style jsx>{`
                .header{
                    background-color: #588E95;
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