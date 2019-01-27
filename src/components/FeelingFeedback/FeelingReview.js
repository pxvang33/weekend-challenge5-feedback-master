import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingReview extends Component {
    render() {
        return (
            <div>
                <h1> Review your feedback </h1>
                <ul>
                    <li>Feelings:  </li>
                </ul>

            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingReview);