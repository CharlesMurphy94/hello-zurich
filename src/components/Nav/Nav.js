import React from "react";
import logo from '../../img/logo-hello-zurich.svg';
import { Link } from 'react-router-dom';

export default function Nav ( ){
    return (
        <div className="nav-container">
            <Link to='/' className='nav-logo'>
                    <img src={logo} className="logo" alt="logo" />
            </Link>
    
            <div className='nav-list'>
                <ul className='nav-ul'>
                    <Link to='/'>
                        <li className='nav-li'>Home</li>
                    </Link>

                    <Link to='/list-view'>
                        <li className='nav-li'>All stories</li>
                    </Link>

                    <Link to='/favorites'>
                    <li className='nav-li'>My favourites</li>
                    </Link>
                </ul>
            </div>

            <div className='nav-icons'>
                <a href={process.env.REACT_APP_LOGIN}>
                    <p className='nav-login'>Log in</p>
                </a>
                <a href={process.env.REACT_APP_LOGOUT}>
                    <p className='nav-login'>Log Out</p>
                </a>

            </div>

        </div>
    );
    
  }