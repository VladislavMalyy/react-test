import React from 'react';
import { connect } from 'react-redux';

import SimpleMap from './SimpleMap';

class App extends React.Component{
    render(){

        return (
            <div>

                <SimpleMap markers={this.props.testStore} onAddMarker={this.props.onAddMarker}/>

            </div>

        );
    }
}
export default connect(
    state => ({
        testStore : state
    }),
    dispatch => ({
        onAddMarker: (lat,lang) => {
            dispatch({type:'ADD_MARKER', obj:{
                lat: lat,
                lang: lang
            }});
        }
    })
)(App);