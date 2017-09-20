import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

// ... 

export class MapContainer extends Component {
  constructor(){
    super()
    this.state={
        coordinates:[]
    }
    
}
  componentDidMount(){
    axios.get('/coordinates').then(res=>{
      console.log(res.data)
      let tempCoordinates = [];
      res.data.map((e,i,a)=>{
        tempCoordinates.push({lat:e.lat,lng:e.long})
      })
      console.log(tempCoordinates)
      this.setState({
        
        coordinates:tempCoordinates
      })
    })
    
  }
    
    
    render() {
        
        return (
          <div className='map-container'>
            <Map google={this.props.google} zoom={15} initialCenter={{lat: 47.3737,lng: 8.5421658}} className='map-container'>
                
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[0]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[1]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[2]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[3]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[4]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[5]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[6]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[7]}         
              />
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[8]}         
              />
              {/* <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[9]}         
              /> */}
              <Marker
                      title={'The marker`s title will appear as a tooltip.'}
                      name={'SOMA'}
                      position={this.state.coordinates[10]}         
              />
            

            </Map>
          </div>
        );
      }
}

export default GoogleApiWrapper({
 apiKey: process.env.GOOGLE_KEY
})(MapContainer)
