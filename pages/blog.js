import React from 'react'
import { Link, Router } from '../routes'
import Blog from '../components/Blog/Blog'

export default class BlogModule extends React.Component{
    render(){
        return(
           <Blog/>
        );
    }
}