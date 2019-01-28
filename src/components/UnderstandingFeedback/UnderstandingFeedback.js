import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnderstandingReview from './UnderstandingReview';



class UnderstandingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understandingToAdd: {
                understanding: '',

            }
        } // end state
    } // end constructor
    understandingToChange = (event) => {
        this.setState({
            understandingToAdd: parseInt(event.target.value),
        })

    } // end feelingChange

    submitUnderstanding = () => {
        let understanding = this.state.understandingToAdd
        let action = { type: 'ADD_UNDERSTANDING', payload: understanding }
        this.props.dispatch(action);
        this.props.history.push('/supportfeedback')

    }
    render() {
        return (
            <div>
                <h1> How well are you understanding the content? </h1>
                <input onChange={this.understandingToChange} type="number" />
                <button onClick={this.submitUnderstanding}>Next</button>
                <UnderstandingReview />
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(UnderstandingFeedback);