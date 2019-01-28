import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers,applyMiddleware} from 'redux';

// reducers below

let feedbackReviewItems = 
    { feeling: 3,
     understanding: 1 ,
     support: 0 ,
     comments: '' }
    ;

const feedbackReview = ( state = feedbackReviewItems, action) => {
    if (action.type === 'ADD_FEELING'){
        return {...state, feeling: action.payload }
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload }
    }
    else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload }
    }
    return state
}
// const understandingReview = (state = feedbackReviewItems, action) => {
//     if (action.type === 'ADD_UNDERSTANDING') {
//         return {...state, understanding: action.payload};
//     }
//     return state
// }


const storeInstance = createStore(
    combineReducers({
        feedbackReview,
        

    }), // end combineReducers

    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
