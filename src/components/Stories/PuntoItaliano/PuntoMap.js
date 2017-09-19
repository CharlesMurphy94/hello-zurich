// import React, {Component} from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import axios from 'axios';

// // ... 

// export class MapContainer extends Component {
//   constructor(){
//     super()
//     this.state={
//         coordinates:{lat:47.3738950,long:8.5446750}
//     }
    
// }
// //    componentDidMount(){
// //      axios.get('http://localhost:3030/coordinates').then(res=>{
// //        console.log(res.data)
// //        let tempCoordinates = [];
// //        res.data.map((e,i,a)=>{
// //          tempCoordinates.push({lat:e.lat,lng:e.long})
// //        })
// //        console.log(tempCoordinates)
// //        this.setState({
        
// //          coordinates:tempCoordinates
// //        })
// //      })
    
// //  }
    
    
//     render() {
        
//         return (
//           <div className='map-container'>
//             <Map google={this.props.google} zoom={15} initialCenter={{lat: 47.3738950,long:8.5446750}} className='map-container'>
                
//               {/* <Marker
//                       title={'The marker`s title will appear as a tooltip.'}
//                       name={'SOMA'}
//                       position={this.state.coordinates[3]}      
//               /> */}
//             </Map>
//           </div>
//         );
//       }
// }

// export default GoogleApiWrapper({
//  apiKey: process.env.GOOGLE_KEY
// })(MapContainer)