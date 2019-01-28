import React, { Component } from 'react';
import { connect } from 'react-redux';
import SupportReview from './SupportReview.js';



class SupportFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supportToAdd: {
                support: '',

            }
        } // end state
    } // end constructor
    supportToChange = (event) => {
        this.setState({
            supportToAdd: parseInt(event.target.value),
        })

    } // end feelingChange

    submitSupport = () => {
        let support = this.state.supportToAdd
        let action = { type: 'ADD_SUPPORT', payload: support }
        this.props.dispatch(action);
        this.props.history.push('/commentsfeedback')

    }
    render() {
        return (
            <div>
                <h1> How well are you being supported? </h1>
                <input onChange={this.supportToChange} type="number" />
                <button onClick={this.submitSupport}>Next</button>

                <SupportReview />   
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(SupportFeedback);