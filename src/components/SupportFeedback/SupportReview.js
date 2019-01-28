import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class SupportReview extends Component {
    render() {
        return (
            // displays list of the users feedback, will update in realtime as the user progresses through feedback site
            // button will remaim incomplete and unaccessable untill all required fields are submitted
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    <li >Feeling:  {this.props.reduxStore.feedbackReview.feeling} </li>
                    <li>Understanding: {this.props.reduxStore.feedbackReview.understanding}</li>
                    <li>Support: {this.props.reduxStore.feedbackReview.support}</li>
                    <li>Comments: {this.props.reduxStore.feedbackReview.comments}</li>
                    <br />
                    <Button variant="outlined" size="medium" color="primary" className="disabled">Incomplete </Button>
                </ul>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(SupportReview);