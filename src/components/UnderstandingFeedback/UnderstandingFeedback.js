import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnderstandingReview from './UnderstandingReview';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



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
            <div>                <FormControl className="form">
                <InputLabel htmlFor="age-native-helper">Select</InputLabel>
                <NativeSelect
                    value={this.state.understanding}
                    onChange={this.understandingToChange}
                    input={<Input name="select" />}
                    className="form"
                >
                    <option value="" />
                    <option value={1}>1 </option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5 </option>
                </NativeSelect>
                <FormHelperText>Select from 1-5 where 1 being the lowest</FormHelperText>
            </FormControl>
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