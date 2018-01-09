import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
import Head from 'next/head'
import { error } from 'util';

let wishes = [
  { 
    title: 'Surfing in Australia for 2 weeks',
    price: '€2000',
    picture: 'https://burst.shopifycdn.com/photos/ocean-waves-kites-surfing_373x@2x.jpg'

  },
  { 
    title: 'Snowboard equip',
    price: '€800',
    picture: 'https://burst.shopifycdn.com/photos/snow-boarder-on-snowy-mountain_373x@2x.jpg'

  },
  { 
    title: 'This car',
    price: '€800 000',
    picture: 'https://burst.shopifycdn.com/photos/sports-car-parked-in-barcelona_373x@2x.jpg'

  },
  { 
    title: 'The newest MacPro',
    price: '€2500',
    picture: 'https://burst.shopifycdn.com/photos/laptop-on-desk_373x@2x.jpg'

  }
]




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
      constructor () {
        super()
        this.state = {
          formData: { title: '', price: '' },
          formIsOpened: false,
          wishes: wishes
        }

        this.formToggle = this.formToggle.bind(this);
        this.formClose = this.formClose.bind(this);
        this.renderWishes = this.renderWishes.bind(this);
        this.addWish = this.addWish.bind(this);
      }

      renderWishes() {
        let wishesArr = [];
          wishesArr = this.state.wishes.map(function(item){
            return (
              <div className="col-md-4" key={item}>
                <div className="card sb-card">
                  <a className="sb-img">
                    <img className="card-img-top" src={item.picture} alt="My wish"/>
                  </a>
                  <div className="card-body download-links">
                    <ul className="list-inline m-0">
                      <li className="list-inline-item">
                        <span>
                          {item.title}
                        </span>
                      </li>
                      <li className="list-inline-item price">
                        <span>
                          {item.price}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>)
          })
          return wishesArr;
      }

      addWish() {
        let wish = {};
        let form = document.querySelectorAll('#wishForm input');
        form.forEach(function(item) {
          wish[item.name] = item.value;
        });

        let wishesArr = this.state.wishes.push(wish);

        this.setState(wishesArr);
      }

      formToggle() {
        this.setState({
          formIsOpened: !this.state.formIsOpened
        })
      }

      formClose(e) {
        e.stopPropagation();
        this.setState({
          formIsOpened: false
        })
      }

      setForm (prop) {
        return ev => {
          const state = this.state || {}
          const formData = state.formData || {}
          this.setState(Object.assign({}, state, {
            formData: Object.assign({}, formData, {
              [prop]: ev.target.value
            })
          }));
        }
      }

      isFormInvalid () {
        const state = this.state || {}
        const formData = state.formData || {}
        return !formData.title || !formData.price
      }
      
      add () {
        return ev => {
          ev.preventDefault()
          const state = this.state || {}
          const formData = state.formData || {}
          this.setState(Object.assign({}, this.state, {
            formData: { title: '', price: ''}
          }))

          superagent.post('http://localhost:3000/api', formData)
            .then(res => {
              const state = this.state || {}
             const list = this.state.list || this.props.list || []
             this.setState(Object.assign ({}, state, {
                list: [res.body.wish].concat(list)
              }))
            })
            .catch(error => console.error(error.stack))
        }
      }

    render() {
     const list = this.state.list || this.props.list
      const { formData } = this.state
        return(
          <div>
          <div id="body">
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="../../static/css/wishes.css" />
            </Head>
            <Header />
            <div className="content-holder">
                <button className="add-btn" onClick={this.formToggle}>Add a new wish</button>
                {this.state.formIsOpened && (
                  <div className="mdl">
                    <div className="mdl-inner">
                      <div id="container">
                      <button className="close-btn" onClick={(e)=>{this.formClose(e)}}>╳</button>
                        <h1>
                        What do you wish for?
                        </h1>
                        <div id="input-book">
                          <form id="wishForm" onSubmit={this.add()}>
                            <input type="text" name="title" onChange={this.setForm('title')} value={formData.title} placeholder="Title"/>
                            <input
                            type="text"
                            name="price"
                            onChange={this.setForm('price')}
                            value={formData.price}
                            placeholder="Price" />
                            <input
                            type="text"
                            name="picture"
                            onChange={this.setForm('picture')}
                            value={formData.picture}
                            placeholder="picture" />
                            <button className="add-btn sm" onClick={this.addWish} disabled={this.isFormInvalid()}>Add</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <h2>
                  Your list of wishes
                </h2>
                
                <div className="container">
                  <div className="row">
                    {this.renderWishes()}
                  </div>
                </div>
               
                </div>
               
               </div>
               <div className="foot">
               <Footer />
               </div>
               </div>
        )
               
    }

}

