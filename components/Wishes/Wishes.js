import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'


export default class Wishes extends React.Component{
    static async getInitialProps ({ req }) {
        if (req) {
          // If `req` is defined, we're rendering on the server and should use
          // MongoDB directly. You could also use the REST API, but that's slow
          // and inelegant.
          const { db } = req
          // Note that `db` above comes from express middleware
          const list = await db.collection('Wish').find().sort({ createdAt: -1 })
            .toArray()
          return { list }
        }
    
        // Otherwise, we're rendering on the client and need to use the API
        const { list } = await superagent.get('http://localhost:3000/api')
          .then(res => res.body)
        return { list }
      }

    render(){
        return(
            <div>
            <Header />
            <p>WISHES CONTENT</p>
            <Footer />
            </div>
        );
    }

}