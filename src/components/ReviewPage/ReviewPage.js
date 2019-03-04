import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Review extends Component {
    // submit button creates axios post request to your local server,
    // on submit click, your feedbackReview reducer from reduxStore is sent and stored in databsae
    // allowing you to retrieve that feedback information the user has submitted throughout the app
    // once axios request has gone through, a RESET action is sent to reduxStore, which resets the feedbackReview
    // reducer and its properties to the inital state, `
    submitFeedback = () => {
        let feedbackToServer = this.props.reduxStore.feedbackReview;
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackToServer
        }).then((response) => {
            let action = { type: 'RESET' }
            this.props.dispatch(action);
            this.props.history.push('/thankyou')
        }).catch((error) => {
            alert('Post to server not working')
        });
    }
    render() {
        return (
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    <li>Feeling: {this.props.reduxStore.feedbackReview.feeling} </li>
                    <li>Understanding: {this.props.reduxStore.feedbackReview.understanding}</li>
                    <li>Support: {this.props.reduxStore.feedbackReview.support}</li>
                    <li>Comments: {this.props.reduxStore.feedbackReview.comments}</li>
                    <br />
                    <Button type="submit" variant="contained" color="primary" onClick={this.submitFeedback}>Submit</Button>

                </ul>
            </div>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Review);