import React, {Component} from 'react';
import { connect } from 'react-redux';
import FeelingReview from './FeelingReview.js';


class FeelingFeedback extends Component {
    constructor (props){
        super(props);
        this.state = {
            feelingToAdd: {
                feeling: '',

            }
        } // end state
    } // end constructor
    feelingChange = (event) => {
        this.setState({
            feelingToAdd: parseInt(event.target.value),
        })

    } // end feelingChange

    submitFeeling = () => {
        let feeling = this.state.feelingToAdd
        let action = { type: 'ADD_FEELING', payload: feeling}
        this.props.dispatch(action);
        this.props.history.push('/understandingfeedback')

    }

    render(){
        return(
            <div>
                <h1> How are you feeling today? </h1>
                <input onChange={this.feelingChange} type="number" /> 
                <button onClick={this.submitFeeling}>Next</button>
                <br /> 
                <FeelingReview />

            </div>
        
        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingFeedback);