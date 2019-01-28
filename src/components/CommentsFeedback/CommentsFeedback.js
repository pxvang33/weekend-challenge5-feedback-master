import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsReview from './CommentsReview.js';


class FeelingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsToAdd: {
                comments: '',

            }
        } // end state
    } // end constructor
    commentsChange = (event) => {
        this.setState({
            commentsToAdd: parseInt(event.target.value),
        })

    } // end feelingChange

    submitComments = () => {
        let comments = this.state.commentsToAdd
        let action = { type: 'ADD_COMMENTS', payload: comments }
        this.props.dispatch(action);
        this.props.history.push('/reviewpage')

    }

    render() {
        return (
            <div>
                <h1> Any additional comments you want to leave? </h1>
                <input onChange={this.commentsChange} type="number" />
                <button onClick={this.submitComments}>Next</button>
                <br />
                <CommentsReview />

            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingFeedback);