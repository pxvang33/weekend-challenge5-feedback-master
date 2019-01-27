import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FeelingFeedback from './../FeelingFeedback/FeelingFeedback.js';
import UnderstandingFeedback from './../UnderstandingFeedback/UnderstandingFeedback.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
