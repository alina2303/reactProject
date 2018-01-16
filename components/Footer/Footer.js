import React from 'react'
import Head from 'next/head'

//import ss from '../../styles/Footer.scss'
import { stylesheet, classNames } from '../../styles/Footer.scss'


export default class Footer extends React.Component {
    render(){
        return(
<div>
<Head>
{/*<link rel="stylesheet" href="../../static/css/mdb.min.css" />*/}
<link rel="stylesheet" href="../../static/css/footer.css" />
</Head>
<footer className="page-footer center-on-small-only">
    <div className="container text-center">
        <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 ">
                <h6 className="title"><strong>UCN Group 12</strong></h6>
                <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto hrstyle" />
                <p className="app">This is the web appliaction made by group 12 as the final project of Web Development programme.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h6 className="title font-bold"><strong>Products</strong></h6>
                <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto hrstyle" />
                <p><a href="http://localhost:3000/tracker?slug=tracker">Tracker</a></p>
                <p><a href="http://localhost:3000/wishes?slug=wishes">Wishes</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                <h6 className="title font-bold"><strong>Useful links</strong></h6>
                <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto hrstyle"  />
                <p><a href="#!">FAQ</a></p>
                <p><a href="http://localhost:3000/about?slug=about">About us</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto">
                <h6 className="title font-bold"><strong>Contact</strong></h6>
                <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto hrstyle"  />
                <p><i className="fa fa-home mr-3"></i> Sofiendalsvej 60, 9000 Aalborg</p>
                <p><i className="fa fa-envelope mr-3"></i> tracker@tracker.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 45 60 51 01 86</p>
                <p><i className="fa fa-print mr-3"></i> + 45 53 53 64 77</p>
            </div>

        </div>
    </div>

    <div className="footer-copyright">
        <div className="copy">
            © 2017 Copyright: <strong> Alina & Matus</strong>
        </div>
    </div>
    
</footer>
</div>
        );
    }

}