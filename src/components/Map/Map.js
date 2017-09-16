import React from 'react';
import { Link } from 'react-router-dom';
import MapContainer from './MapContainer.js'

export default function Map (){
    
    
    return (
        <div className='list-view'>
            <div className='stories-nav'>
                <ul className='stories-nav-ul'>
                    <Link to='/list-view'>
                        <li className='stories-nav-li'>List View</li>
                    </Link>
                    <Link to='/map-view'>
                        <li className='stories-nav-li'>Map View</li>
                    </Link>
                </ul>
            </div>
            <MapContainer />
            
            
        </div>
    );
}