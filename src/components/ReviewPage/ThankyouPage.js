import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Thankyou extends Component {
    submitNewFeedback = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            // button click sends you to inital feeling feedback page
            <div>
                <h1> Success! Thank you. </h1>
                <Button onClick={this.submitNewFeedback} variant="outlined" size="medium" color="primary" > Leave new feedback</Button>
            </div>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Thankyou);