import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingReview extends Component {
    render() {
        return (
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    <li >Feeling:  {this.props.reduxStore.feedbackReview.feeling} </li>
                    <li>Understanding: {this.props.reduxStore.feedbackReview.understanding}</li>
                    <li>Support: {this.props.reduxStore.feedbackReview.support}</li>
                    <li>Comments: {this.props.reduxStore.feedbackReview.comments}</li>
                    <button>Submit</button>

                </ul>
                {JSON.stringify(this.props.reduxStore)}
                {/* {this.props.reduxStore.feelingReview.map((review, i) => {
                    return (
                        <ul key={i}>
                            <li >Feeling:  {review.feeling} </li>
                            <li>Understanding: {review.understanding}</li>
                            <li>Support: {review.support}</li>
                            <li>Comments: {review.comments}</li>
                            <button>Submit</button>

                        </ul>
                    ) // end return
                })} */}
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingReview);