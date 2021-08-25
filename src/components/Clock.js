

import React from 'react';

class Clock extends React.Component {
  // Add your methods in here.
  constructor(props){
    super(props);
    this.state = { date: new Date() };
  }
  render(){
    return(
    <div>{this.state.date.toLocaleTimeString()}.</div>
    );
  }
}

export default Clock
