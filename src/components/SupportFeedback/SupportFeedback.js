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
                <FormControl className="form">
                    <InputLabel htmlFor="age-native-helper">Select</InputLabel>
                    <NativeSelect
                        value={this.state.support}
                        onChange={this.supportToChange}
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
                </FormControl> <br /> <br />
                <Button onClick={this.submitSupport} variant="outlined" size="medium" color="primary" > Next </Button>

                <br />
                <br />                
                <SupportReview />   
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(SupportFeedback);