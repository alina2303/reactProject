import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
//import som from '../../static/css'

class Tracker extends React.Component{
  static async getInitialProps({req}){
    if (req) {
    const { db } = req
    const list = await db.collection('Tracker').find().toArray()
    return { list }
    }
    const { list } = await superagent.get('../../lib/api')
    .then(res => res.body)
    return { list }
    
  } 

  constructor(props){
    super(props);
  
    this.state = {
      Days: '',
      startHour: '',
      endHour: '',
      Rate: '',
      Balance: '',
      currentBalance: ''
    };

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.balance(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  balance(){
    this.setState({
      currentBalance: this.state.Balance + (this.state.Rate * this.state.Hours) * this.state.Days
    })
  }

  add (e) {
    return ev => {
      ev.preventDefault()
      const state = this.state || {}
      const data = state.data || {}     
      this.setState(Object.assign({}, this.state, {
        Days: '',
        startHour: '',
        endHour: '',
        Rate: '',
        Balance: '',
        currentBalance: ''
        
      }))

      superagent.post('../../lib/api', state)
        .then(res => {
          const state = this.state || {}
          const list = this.state.list || this.props.list || []
          this.setState(Object.assign({}, state, {
            list: [res.body.tracker].concat(list)
          }))
        })
        .catch(error => console.error(error.stack))
    }
  }

render(){
  return(
  <div>
   <Head>
    <title>Tracker</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    {/*<link rel="stylesheet" href="../../static/css/mdb.min.css" /> */}
    </Head>
    <Header />
    <form onSubmit={this.add()}>
    <div className="">
    <label>Days</label>
    <input type="number" onChange={e => this.setState({Days: e.target.value})} />
    <br />
    <label >Start Hour: </label>
    <input type="number" onChange={e => this.setState({startHour: e.target.value})}/>
    <br />
    <label>End Hour: </label>
    <input type="number" onChange={e => this.setState({endHour: e.target.value})} />
    </div>
   
    {/*
    <input type="number" onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    */}
    <br />
    <label>Rate: </label>
    <div className="input-group">
    <span className="input-group-addon">$</span>
    <input type="text" className="form-control" value={this.state.Rate} onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    <span className="input-group-addon">.00</span>
    </div>
    <label>Final balance: </label>
    <div className="input-group">
    <span className="input-group-addon">$</span>
    <input type="text" className="form-control" value={(this.state.Rate * this.state.startHour) * this.state.Days } placeholder="Total"/>
    </div>
    <br />
    <button className="btn btn-primary">Update</button>
    </form>
    <Footer />         
    </div>
  );
}

}
export default Tracker;
