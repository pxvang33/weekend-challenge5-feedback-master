import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsReview from './CommentsReview.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class FeelingFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsToAdd: {
                comments: '',

            }
        } // end state
    } // end constructor

    // changes the local state depnding on what number is selected in the FormControl
    commentsChange = (event) => {
        this.setState({
            commentsToAdd: (event.target.value),
        })
    } // end feelingChange

    // on Next button click, will send local state as action to reduxStore which updates the feedbackReview comments property
    // value to what the user typed in the textfield, button click also sends you to review page
    submitComments = () => {
        let comments = this.state.commentsToAdd
        let action = { type: 'ADD_COMMENTS', payload: comments }
        this.props.dispatch(action);
        this.props.history.push('/review')

    }

    render() {
        return (
            <div>
                <h1> Any additional comments you want to leave? </h1>

                <TextField
                    id="outlined-multiline-static"
                    label="Additional Comments"
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    onChange={this.commentsChange}
                    className="textfield"
                />
                <br /> <br />
                <Button onClick={this.submitComments} variant="outlined" size="medium" color="primary" > Next </Button>

                <br /> 
                <br />
                <CommentsReview />

            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingFeedback);