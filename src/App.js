import React, { Component } from 'react';
import './App.css';

import Timer from './Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timer App built in React</h1>
        </header>
        <Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;
