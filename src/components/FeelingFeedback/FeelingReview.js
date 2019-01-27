import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingReview extends Component {
    render() {
        return (
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    {JSON.stringify(this.props)}
                    <li>Feelings:   </li>
                    <li>Understanding: </li>
                    <li>Support: </li>
                    <li>Comments: </li>
                    <button>Submit</button>

                </ul>

            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingReview);