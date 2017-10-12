import React,{Component} from 'react';

import { Map, Marker, Popup } from '2gis-maps-react';

export default class SimpleMap extends Component{

    handleClick(e){
        this.props.onAddMarker(e.latlng.lat,e.latlng.lng);
    }

    render(){
        console.log(this.props.markers);
        return(
            <div className="mapBlock">
                <div className="container">
                    <h2 className="mapBlock__title">Map</h2>
                    <div className="mapBlock__control controlBlock">
                        <button className="controlBlock__item">Save</button>
                        <button className="controlBlock__item">Show All</button>
                    </div>
                </div>
                <Map
                    style={{width: "100%", height: "500px"}}
                    center={[46.4618355, 30.7495655]}
                    zoom={13}
                    onClick={this.handleClick.bind(this)}

                >
                    {this.props.markers.map((item,index) =>
                        <Marker
                            key={index}
                            pos={[item.lat, item.lang]}
                        />
                    )}

                </Map>
            </div>
        )
    }
}
