import React from 'react'
import 'react-dates/initialize';
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as superagent from 'superagent'
import { SingleDatePicker } from 'react-dates'  
import Moment from 'moment'
import TimeInput from 'react-time-input'
import { isInclusivelyBeforeDay } from 'react-dates';
//import som from '../../static/css'

class Tracker extends React.Component{
  /* 
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
*/
  constructor(props){
    super(props);

    this.onStartTimeChangeHandler = this.onStartTimeChangeHandler.bind(this)
    this.onEndTimeChangeHandler = this.onEndTimeChangeHandler.bind(this)
    this.handleRateChange = this.handleRateChange.bind(this)

    this.state = {
      startDate: null,
      endDate:  Moment(),
      startHour: 0,
      endHour: 0,
      Rate: 0,
      currentBalance: 0
    };

  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.balance(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  balance(){
    this.startingBalance();
    var startBalance = this.state.currentBalance;
    var value1 = 0;
    if(startBalance == 0 || startBalance == null){
      value1 = parseFloat(this.state.currentBalance);
    }
    var cb = value1 + this.earnPerSecond()
    this.setState({ currentBalance: cb});

  }

  earnPerSecond(){ 
    var earnSecond = this.state.Rate / 3600; 
    return earnSecond;
  }

  startingBalance(){
    var result = 0;
    var now = Moment().format("YYYY-MM-DD HH:mm:ss")
    var daydiff = Moment(now).diff(Moment(this.state.startDate).format("YYYY-MM-DD HH:mm:ss"), 'days');
    var hoursdiff = Moment(this.state.endHour, 'HH:mm:ss').diff(Moment(this.state.startHour, "HH:mm:ss"), 'hours', true);
    var daydifftoday = Moment().diff(Moment(this.state.startHour, "HH:mm:ss"), 'seconds', true);    

    var beforeShift = Moment().diff(Moment(this.state.startHour, "HH:mm:ss"), 'seconds', true);
    var afterShift = Moment().diff(Moment(this.state.endHour, "HH:mm:ss"), 'seconds', true);

    if(afterShift <= 0 && beforeShift >= 0 && daydiff != 0){
      var result = daydiff * (hoursdiff * this.state.Rate) + (daydifftoday * this.earnPerSecond())
    }
    else if(afterShift <= 0 && beforeShift >= 0 && daydiff == 0){
      var result = daydifftoday * this.earnPerSecond()
    }
    else if(afterShift >= 0){
      var result = (daydiff +1) * hoursdiff * this.state.Rate
    }
    else if(beforeShift <= 0){
      var result = daydiff * hoursdiff * this.state.Rate
    }

    this.setState({earnings: result});
  }

  onStartTimeChangeHandler(val){
    if(val != undefined){
      this.setState({ startHour: val + ':00'});
      //this.startingBalance();
    }
    else{
      this.setState({ startHour: 0});
    }
  }

  onEndTimeChangeHandler(val){
    if(val != undefined){
      this.setState({ endHour: val + ':00'});
      //this.startingBalance();
    }
    else{
      this.setState({ endHour: 0});
    }
  }

  handleRateChange(event){
    this.setState({Rate: event.target.value});   
  }

  add () {
    return ev => {
      ev.preventDefault()
      const state = this.state || {}
      /*
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
        .catch(error => console.error(error.stack))
            */

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
    <Header />
    <div className="container-fluid">
    <div className="row">
    </div>
    <div className="row">
    <div className="col-sm-6">
    <form onSubmit={this.add()} className="border">
    <div className="calendar">
    <label>Date: </label>
    <br />
    {/*<DateRangePicker
    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    />*/}
    <SingleDatePicker
  date={this.state.startDate} // momentPropTypes.momentObj or null
  onDateChange={startDate => this.setState({ startDate })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  //isOutsideRange={() => false}
  isOutsideRange={day => !isInclusivelyBeforeDay(day, Moment())}
  placeholder= { "Date" }
/>
  </div>
    <br />
    <label>Start hour: </label> 
    <br />
    <TimeInput
   			ref="TimeInputWrapper"
   			className='form-control time'
   			onTimeChange={this.onStartTimeChangeHandler}
   		/>
    <br />

    <label>End hour: </label> 
    <br />
    <TimeInput
   			ref="TimeInputWrapper"
   			className='form-control time'
   			onTimeChange={this.onEndTimeChangeHandler}
   		/>
   
    {/*
    <input type="number" onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    */}
    <br />
    <label>Rate: </label>
    <div className="input-group">
    <span className="input-group-addon">€</span>
    <input type="text" className="form-control" onChange={this.handleRateChange} placeholder="Rate" />
    </div>
    <br />
    <label>Current balance: </label>
    <div className="input-group">
    <span className="input-group-addon">€</span>
    <input type="text" readOnly className="form-control" value={parseFloat(Math.round(this.state.earnings * 1000) / 1000).toFixed(4)} />
    </div>
    <br />
    </form>
    </div>
    <div className="col-sm-6 ">
    <div className="border">
    <p className="wishes">Top Wishes </p>

    </div>
    </div>
    </div>
    <div className="row">
    </div>
    </div>
    <Footer />         
    </div>
  );
}

}
export default Tracker;