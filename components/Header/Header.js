import React from 'react'
import { Link, Router } from '../../routes'
import Head from 'next/head'


export default class Header extends React.Component{
    render(){
        return(
            <div>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="../../static/css/header.css" />
            </Head>
            <div className="header">
            <Link route='home' params={{ slug: 'home' }}><a><i className="fa fa-home"></i></a></Link>
            <Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker</a></Link>
            <Link route='wishes' params={{ slug: 'wishes' }}><a>Wishes</a></Link>
            <Link route='faq' params={{ slug: 'faq' }}><a>FAQ</a></Link>
            <Link route='about' params={{ slug: 'about' }}><a>About us</a></Link>
            </div>
            </div>
            
        );
    }
}