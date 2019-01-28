import React, { Component } from 'react';
import { connect } from 'react-redux';


class Thankyou extends Component {
    submitNewFeedback = () => {

        this.props.history.push('/')

    }
    render() {
        return (
            <div>
                <h1> Thank you</h1>

                    <button onClick={this.submitNewFeedback}>Leave new feedback</button>

            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Thankyou);