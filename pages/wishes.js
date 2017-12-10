import React from 'react'
import { Link, Router } from '../routes'
import Wishes from '../components/Wishes/Wishes'

export default class WishesModule extends React.Component{
    render(){
        return(
           <Wishes/>
        );
    }
}