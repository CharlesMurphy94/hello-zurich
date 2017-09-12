import React from 'react';
import Landing from './components/Landing/Landing';
import List from './components/List/List';
import Map from './components/Map/Map';
import Favorites from './components/Favorites/Favorites'
import {Switch, Route,} from 'react-router-dom';


export default(
    <Switch>
        <Route exact path='/' component={ Landing }></Route>
        <Route path='/list-view' component={ List }></Route>
        <Route path='/map-view' component={ Map }></Route>
        <Route path='/favorites' component={ Favorites }></Route>
    </Switch>


)