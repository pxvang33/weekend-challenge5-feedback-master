import React, { Component } from 'react';
import { connect } from 'react-redux';
// import UnderstandingReview from './UnderstandingReview';



class SupportFeedback extends Component {

    render() {
        return (
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    <li >Feeling:  {this.props.reduxStore.feelingReview.feeling} </li>
                    <li>Understanding: {this.props.reduxStore.feelingReview.understanding}</li>
                    <li>Support: {this.props.reduxStore.feelingReview.support}</li>
                    <li>Comments: {this.props.reduxStore.feelingReview.comments}</li>
                    <button>Submit</button>
                </ul>
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(SupportFeedback);