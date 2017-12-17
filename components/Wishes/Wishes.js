import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
import Head from 'next/head'


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
              <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
                <style>{`
              
                .image-holder {
                    overflow: hidden;
                    position: relative;
                    
                  }
                  
                  .image-holder img {
                    width: 100%;
                  }
                  .header{
                   textDecoration:none;
                    
                }
               
            `}</style>
              </Head>
                <Header />
                <div className="container">
                  <div className="row">

                    <div className="col-sm-4">
                      <div className="image-holder">
                  
                      
                    <div className="card sb-card">
                          <img className="card-img-top" src="http://sobadsogood.com/uploads/stories/2014/05/02/surfing-cat-and-dogs.jpg" alt="Super trip"/>
                          <div className="card-body download-links">
                              <ul className="list-inline m-0">
                                <li className="list-inline-item">
                                  <i className="fa fa-eye"></i> Surfing trip to Australia for 2 weeks. Price: €1000
                                </li>
                                <li className="list-inline-item">
                                  <a href="" className="btn btn-secondary" onclick="ga('send','event','Download','Download New Age')">
                                  <i className="fa fa-download"></i> Add
                                  </a>
                                </li>
                             </ul>
                            </div>
                        </div> 
                  
                  </div>
                  </div>
                  
                  

                  <div className="col-sm-4">
                    <div className="image-holder">
                
                        
                    <div className="card sb-card">
                          <img className="card-img-top" src="http://sobadsogood.com/uploads/stories/2014/05/02/surfing-cat-and-dogs.jpg" alt="Super trip"/>
                          <div className="card-body download-links">
                              <ul className="list-inline m-0">
                                <li className="list-inline-item">
                                  <i className="fa fa-eye"></i> Surfing trip to Australia for 2 weeks. Price: €1000
                                </li>
                                <li className="list-inline-item">
                                  <a href="" className="btn btn-secondary" onclick="ga('send','event','Download','Download New Age')">
                                  <i className="fa fa-download"></i> Add
                                  </a>
                                </li>
                             </ul>
                            </div>
                        </div> 
                            
                    </div>
                  </div>


                  <div className="col-sm-4">
                    <div className="image-holder">
                
                        
                    <div className="card sb-card">
                          <img className="card-img-top" src="http://sobadsogood.com/uploads/stories/2014/05/02/surfing-cat-and-dogs.jpg" alt="Super trip"/>
                          <div className="card-body download-links">
                              <ul className="list-inline m-0">
                                <li className="list-inline-item">
                                  <i className="fa fa-eye"></i> Surfing trip to Australia for 2 weeks. Price: €1000
                                </li>
                                <li className="list-inline-item">
                                  <a href="" className="btn btn-secondary" onclick="ga('send','event','Download','Download New Age')">
                                  <i className="fa fa-download"></i> Add
                                  </a>
                                </li>
                             </ul>
                            </div>
                        </div> 
                            
                    </div>
                  </div>
                  
            
            
            
            
                 </div>
             
            </div>
              <Footer />
            </div>
        );
    }

}