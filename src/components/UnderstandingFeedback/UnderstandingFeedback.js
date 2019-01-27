import React, { Component } from 'react';
import { connect } from 'react-redux';


class UnderstandingFeedback extends Component {
    render() {
        return (
            <div>
                <h1> How well are you understanding the content? </h1>

            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(UnderstandingFeedback);