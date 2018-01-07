import React from 'react'
import 'react-dates/initialize';
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
import {DateRangePicker} from 'react-dates' 

//import som from '../../static/css'

class Tracker extends React.Component{
  static async getInitialProps({req}){
    if (req) {
    const { db } = req
    const list = await db.collection('Tracker').find().toArray()
    return { list }
    }
    const { list } = await superagent.get('/trackervalues')
    .then(res => res.body)
    return { list }
    
  } 

  constructor(props){
    super(props);
  
    this.state = {
      startDate: '',
      endDate: '',
      startHour: '',
      endHour: '',
      Rate: '',
      currentBalance: ''
    };

  }

  componentDidMount() {
    {/*
      this.setState({
        currentBalance: (this.state.Rate * this.state.startHour) * this.state.Days
      })

    this.timerID = setInterval(
      () => this.balance(),
      1000
    );
    */}
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  balance(){
    
  }

  add () {
    return ev => {
      ev.preventDefault()
      const state = this.state || {}
      //const data = state.data || {}     
      this.setState(Object.assign({}, this.state, {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        startHour: this.state.startHour,
        endHour: this.state.endHour,
        Rate: this.state.Rate,
        currentBalance: ''
      }))

      superagent.post('/tracker', state)
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
    <link rel="stylesheet" href="../../static/css/custom.css" />
    <link rel="stylesheet" href="../../static/css/calendar.css" />
    {/*<link rel="stylesheet" href="../../static/css/mdb.min.css" /> */}
    </Head>
    <div className="container-fluid">
    <div className="row">
    <Header />
    </div>
    <div className="row">
    <div className="col-sm-6">
    <form onSubmit={this.add()} className="border">
    
    <DateRangePicker
    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
  />
    <br />
    <br />
    <label>From: </label>
    <input type="number" onChange={e => this.setState({startDay: e.target.value})} />
    <label>To: </label>
    <input type="number" onChange={e => this.setState({endDay: e.target.value})} />
    <br />
    <label >Start Hour: </label>
    <input type="number" onChange={e => this.setState({startHour: e.target.value})}/>
    <label>End Hour: </label>
    <input type="number" onChange={e => this.setState({endHour: e.target.value})} />
   
    {/*
    <input type="number" onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    */}
    <br />
    <label>Rate: </label>
    <div className="input-group">
    <span className="input-group-addon">$</span>
    <input type="text" className="form-control" onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    </div>
    <label>Current balance: </label>
    <div className="input-group">
    <span className="input-group-addon">$</span>
    <input type="text" readOnly className="form-control" value={(this.state.Rate * (this.state.endHour - this.state.startHour)) * (this.state.endDay - this.state.startDay + 1)} placeholder="Total"/>
    </div>
    <br />
    <button className="btn btn-primary">Update</button>
    </form>
    </div>
    <div className="col-sm-6 ">
    <div className="border">
    <p className="wishes">Top Wishes </p>
    </div>
    </div>
    </div>
    <div className="row">
    <Footer />
    </div>
    </div>         
    </div>
  );
}

}
export default Tracker;
