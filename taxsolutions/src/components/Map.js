/* global google */
import React, { Component } from 'react';
import { compose } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';

class Map extends Component {

  render() {
    const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
    const MapWithAMarkerWithLabel = compose(
      withScriptjs, withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat:-1.329845, lng:36.867408 }}
      >
        <MarkerWithLabel
          position={{ lat:-1.329845, lng:36.867408 }}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "#E6E6FA", fontSize: "25px", padding: "10px", opacity: "0.7"}}
        >
          <div style={{color: "black"}}>Tax Solutions EA Kenya</div>
        </MarkerWithLabel>
      </GoogleMap>
    );
    return (
      <div>
      <MapWithAMarkerWithLabel
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJKHeesru_MZn2RCv70ui4yVd2-fI28qM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={ <div style={{ height: `300px` }} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
      />
      </div>
    );
  }
}

export default Map;
