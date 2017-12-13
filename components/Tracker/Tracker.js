import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
//import som from '../../static/css'

class Tracker extends React.Component{
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
    <input type="text" className="form-control" onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    <span className="input-group-addon">.00</span>
    </div>
    <label>Final balance: </label>
    <div className="input-group">
    <span className="input-group-addon">$</span>
    <input type="text" className="form-control" value={(this.state.Rate * this.state.startHour) * this.state.Days } placeholder="Total"/>
    </div>
    <br />
    <Footer />
    </div>
  );
}

}
export default Tracker;
