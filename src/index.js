import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// reducers below
// setting initial state to 0 and empty strings to display beginning progress and reset state
let feedbackReviewItems =
{
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
};
// created feedback reducuer which updates state and its properties depending on action type
const feedbackReview = (state = feedbackReviewItems, action) => {
    if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: action.payload }
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload }
    }
    else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload }
    }
    else if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload }
    }
    else if (action.type === 'RESET') {
        return feedbackReviewItems
        // return {
        //     ...state, feeling: 0,
        //     understanding: 0,
        //     support: 0,
        //     comments: ''
        // }
    }
    return state;
}
const storeInstance = createStore(
    combineReducers({
        feedbackReview,
    }), // end combineReducers
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
