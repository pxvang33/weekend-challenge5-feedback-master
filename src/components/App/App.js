import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import FeelingFeedback from './../FeelingFeedback/FeelingFeedback.js';
import UnderstandingFeedback from './../UnderstandingFeedback/UnderstandingFeedback.js';
import SupportFeedback from './../SupportFeedback/SupportFeedback.js';
import CommentsFeedback from './../CommentsFeedback/CommentsFeedback.js';
import Review from './../ReviewPage/ReviewPage.js';
import Thankyou from './../ReviewPage/ThankyouPage.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <header className="App-header">
          <h1 className="App-title">Feedback survey</h1>
          <h2><i>We want to hear from you!</i></h2>
        </header>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
          </ul>
        </div>
        <br/>
          <Route exact path="/" component={FeelingFeedback} />
          <Route exact path="/understandingfeedback" component={UnderstandingFeedback} />
          <Route exact path="/supportfeedback" component={SupportFeedback} />
          <Route exact path="/commentsfeedback" component={CommentsFeedback} />
          <Route exact path="/review" component={Review} />
            <Route exact path="/thankyou" component={Thankyou} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
