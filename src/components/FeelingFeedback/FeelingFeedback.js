import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeelingReview from './FeelingReview.js';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class FeelingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feelingToAdd: {
                feeling: '',
            }
        } // end state
    } // end constructor

    // changes the local state depnding on what number is selected in the FormControl
    feelingChange = (event) => {
        this.setState({
            feelingToAdd: parseInt(event.target.value),
        })
    } // end feelingChange

    // on Next button click, will send local state as action to reduxStore which updates the feedbackReview feeling property
    // value to whatever value was selected, button click also sends you to next understanding page
    submitFeeling = () => {
        let feeling = this.state.feelingToAdd
        let action = { type: 'ADD_FEELING', payload: feeling }
        this.props.dispatch(action);
        this.props.history.push('/understandingfeedback')
    }
    render() {
        return (
            // material ui select, allows user to choose 1-5 with 1 being lowest to see how they are feeling
            <div>
                <h1> How are you feeling today? </h1>
                <FormControl  >
                    <InputLabel required htmlFor="age-native-helper">Select</InputLabel>
                    <NativeSelect
                        value={this.state.feeling}
                        onChange={this.feelingChange}
                        input={<Input name="select" />} >
                        <option value="" />
                        <option value={1}>1 </option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5 </option>
                    </NativeSelect>
                    <FormHelperText>Select from 1-5 where 1 being the lowest</FormHelperText>
                </FormControl>
                <br />
                <br />
                <Button onClick={this.submitFeeling} variant="outlined" size="medium" color="primary" > Next </Button>
                <br />
                <FeelingReview />
            </div>
            // FeelingReview child component which shows live update of what the user has selected
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingFeedback);