import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Map, Marker } from '2gis-maps-react';

import $ from 'jquery';

import Header from './Header';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isAdd : false
        }
    }

    addMarker(e){
        this.props.onAddMarker(e.latlng.lat,e.latlng.lng);
    }

    saveMarkers(){
        $.ajax('http://localhost:1337/add_markers',{
            type: 'post',
            data:{
                state: this.props.testStore.markers
            },
            dataType: 'text',
            success: function(data){
                this.state.isAdd = !this.state.isAdd;
                console.log('ok', data)
            }.bind(this),
            error: function(err){
                console.log('err',err);
            }
        })
    }

    showAll(){
        $.ajax('http://localhost:1337/get_markers',{
            type: 'get',
            dataType: 'json',
            success: function(data){
                console.log('ok', data[data.length-1]);
                data[data.length-1].markers.forEach((item,index) => {
                    this.props.onAddMarker(item.lat,item.lang);
                    console.log(item);
                });
            }.bind(this),
            error: function(err){
                console.log('err',err);
            }
        })
    }

    render(){
        console.log(this.props.testStore);
        return(
            <div>
                <Header />
                <div className="mapBlock">
                    <div className="container">
                        <h2 className="mapBlock__title">Map</h2>
                        <div className="mapBlock__control controlBlock">
                            <button className="controlBlock__item" onClick={this.saveMarkers.bind(this)}>Save To Database</button>
                            <button className="controlBlock__item" onClick={this.showAll.bind(this)}>Show All</button>
                        </div>
                    </div>
                    <Map
                        style={{width: "100%", height: "500px"}}
                        center={[46.4618355, 30.7495655]}
                        zoom={13}
                        onClick={this.addMarker.bind(this)}

                    >
                        {this.props.testStore.markers.map((item,index) =>
                            <Marker
                                key={index}
                                pos={[item.lat, item.lang]}
                            />
                        )}

                    </Map>
                </div>
            </div>

        )
    }
}
export default connect(
    (state, ownProps) => ({
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