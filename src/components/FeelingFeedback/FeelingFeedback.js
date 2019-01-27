import React, {Component} from 'react';
import { connect } from 'react-redux';


class FeelingFeedback extends Component {
    render(){
        return(
            <div>
                <h1> How are you feeling today? </h1>

            </div>
        
        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(FeelingFeedback);