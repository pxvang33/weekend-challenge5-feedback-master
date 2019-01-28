import React, { Component } from 'react';
import { connect } from 'react-redux';
import SupportReview from './SupportReview.js';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class SupportFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supportToAdd: {
                support: '',
            }
        } // end state
    } // end constructor

    // changes the local state depnding on what number is selected in the FormControl
    supportToChange = (event) => {
        this.setState({
            supportToAdd: parseInt(event.target.value),
        })

    } // end feelingChange

    // on Next button click, will send local state as action to reduxStore which updates the feedbackReview support property
    // value to whatever value was selected, button click also sends you to comments page
    submitSupport = () => {
        let support = this.state.supportToAdd
        let action = { type: 'ADD_SUPPORT', payload: support }
        this.props.dispatch(action);
        this.props.history.push('/commentsfeedback')
    }
    render() {
        return (
            // material ui select, allows user to choose 1-5 with 1 being lowest to see how they are feeling
            <div>
                <h1> How well are you being supported? </h1>
                <FormControl >
                    <InputLabel required htmlFor="age-native-helper">Select</InputLabel>
                    <NativeSelect
                        value={this.state.support}
                        onChange={this.supportToChange}
                        input={<Input name="select" />}  >
                        <option value="" />
                        <option value={1}>1 </option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5 </option>
                    </NativeSelect>
                    <FormHelperText>Select from 1-5 where 1 being the lowest</FormHelperText>
                </FormControl> <br /> <br />
                <Button onClick={this.submitSupport} variant="outlined" size="medium" color="primary" > Next </Button>
                <br />
                <br />
                <SupportReview />
            </div>
            // SupportReview child component which shows live update of what the user has selected
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(SupportFeedback);