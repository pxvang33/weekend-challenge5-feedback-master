import React, { Component } from 'react';
import { connect } from 'react-redux';


class UnderstandingReview extends Component {
    render() {
        return (
            <div>
                <h1> Review your feedback </h1>

                    {JSON.stringify(this.props)}
                    {this.props.reduxStore.feeling.map((feeling, i)=>{
                        return(
                            <ul key={i}>
                                <li >Feelings:  {feeling} </li>
                                <li>Understanding: </li>
                                <li>Support: </li>
                                <li>Comments: </li>
                                <button>Submit</button>

                            </ul>
                        ) // end return
                    })} 
            </div>

        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(UnderstandingReview);