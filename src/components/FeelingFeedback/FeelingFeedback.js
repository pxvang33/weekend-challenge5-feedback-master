import React, {Component} from 'react';
import { connect } from 'react-redux';
import FeelingReview from './FeelingReview.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



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
                <FormControl className="form">
                    <InputLabel htmlFor="age-native-helper">Select</InputLabel>
                    <NativeSelect
                        value={this.state.feeling}
                        onChange={this.feelingChange}
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
                <Button onClick={this.submitFeeling} variant="outlined" size="medium" color="primary" > Next </Button>

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