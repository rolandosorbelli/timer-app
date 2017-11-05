import React, { Component } from 'react';

class Timer extends Component {

	componentDidMount(){
		this.timer = setInterval(this.ticker, 1000)
	}

	ticker(){
		this.setState({clock: new Date() - this.props.start})
	}


	constructor(props){
		super(props);
	
		this.state = {
			clock:0
		}
	}
  render() {
    return (
      <div>
      	<p>You have been on this site since: </p> <br />
      	<span>{this.state.clock}</span>
      	<p>seconds</p>
      </div>
    );
  }
}

export default Timer;