import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// ... 

export class MapContainer extends Component {
    
    
    render() {
        
        return (
          <div className='map-container'>
            <Map google={this.props.google} zoom={16} initialCenter={{lat: 47.3769831,lng: 8.5421658}} className='map-container'>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 47.3769831, lng: 8.5421654}} />
            </Map>
          </div>
        );
      }
}

export default GoogleApiWrapper({
 apiKey: process.env.GOOGLE_KEY
})(MapContainer)
