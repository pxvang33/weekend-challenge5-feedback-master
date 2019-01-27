import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeelingFeedback from './../FeelingFeedback/FeelingFeedback.js';
import UnderstandingFeedback from './../UnderstandingFeedback/UnderstandingFeedback.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <div>
          <ul>
            <li>
              <Link to="/understandingfeedback"> Understanding </Link>
            </li>
          </ul>
        </div>
        <br/>
          <Route exact path="/" component={FeelingFeedback} />
          <Route exact path="/understandingfeedback" component={UnderstandingFeedback} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;