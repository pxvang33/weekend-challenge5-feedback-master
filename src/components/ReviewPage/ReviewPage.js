import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {
    submitFeedback = () => {
        let feedbackToServer = this.props.reduxStore.feedbackReview;
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackToServer
        }).then((response) => {
            let action = {type: 'RESET'}
            this.props.dispatch(action);

        }).catch((error) => {
            alert('Post to server not working')
        });

        this.props.history.push('/thankyou')
    }
    render() {
        return (
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    <li >Feeling:  {this.props.reduxStore.feedbackReview.feeling} </li>
                    <li>Understanding: {this.props.reduxStore.feedbackReview.understanding}</li>
                    <li>Support: {this.props.reduxStore.feedbackReview.support}</li>
                    <li>Comments: {this.props.reduxStore.feedbackReview.comments}</li>
                    <button onClick={this.submitFeedback}>Submit</button>
                </ul>
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Review);