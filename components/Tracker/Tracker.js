import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
    <Header />
    <label>Days: </label>
    <input type="number" onChange={e => this.setState({Days: e.target.value})} placeholder="Days" />
    <label>Start Hour: </label>
    <input type="number"  onChange={e => this.setState({startHour: e.target.value})} placeholder="Hours" />
    <label>End Hour: </label>
    <input type="number" value={this.state.endHour} onChange={this.handleEndHourChange} placeholder="Hours" />
    <label>Rate: </label>
    <input type="number" onChange={e => this.setState({Rate: e.target.value})} placeholder="Rate" />
    <label>Final balance: </label>
    <input type="number" value={(this.state.Rate * this.state.startHour) * this.state.Days } placeholder="Total" />
    <br />
    <Footer />
    </div>
  );
}

}
export default Tracker;
