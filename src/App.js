import React, { Component } from 'react';


import router from './router';
import Nav from './components/Nav/Nav'

export default class App extends Component{
  render(){  
    return (
      <div className='app'>
        <Nav />
        { router }
      </div>
    );
  }
}

