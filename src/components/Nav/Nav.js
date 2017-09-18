import React, { Component } from "react";
import logo from '../../img/logo-hello-zurich.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Nav extends Component{
    constructor(){
        super()
        this.state={
            user: false
        }
        
    }

    componentDidMount(){
        axios.get('http://localhost:3030/favorites').then(res=>{
            if(res.data[0]!=='no favorites'){
            this.setState({user: true})
            } else{
                this.setState({user: false})
            }
        })
    }
    
    render(){
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
                    <a href={this.state.user ? process.env.REACT_APP_LOGOUT : process.env.REACT_APP_LOGIN}>
                        <p className={this.state.user ? 'nav-logout' : 'nav-logout'}>{this.state.user === true ? 'Log out' : 'Log in'}</p>
                    </a>
                    

                </div>

            </div>
        );
}
    
  }