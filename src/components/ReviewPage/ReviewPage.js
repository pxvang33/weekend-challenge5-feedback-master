import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    submitFeedback = () => {
        // let comments = this.state.commentsToAdd
        // let action = { type: 'ADD_COMMENTS', payload: comments }
        // this.props.dispatch(action);
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
                {JSON.stringify(this.props.reduxStore)}
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Review);