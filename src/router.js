import React from 'react';
import Landing from './components/Landing/Landing';
import List from './components/List/List';
import Map from './components/Map/Map';
import Favorites from './components/Favorites/Favorites'
import SchwarzenbachKolonialwaren from'./components/Stories/SchwarzenbachKolonialwaren/SchwarzenbachKolonialwaren'
import BluemeUnderDeBoge from'./components/Stories/BluemeUnderDeBoge/BluemeUnderDeBoge'
import Weinschenke from'./components/Stories/Weinschenke/Weinschenke'
import PuntoItaliano from'./components/Stories/PuntoItaliano/PuntoItaliano'
import LesVideos from'./components/Stories/LesVideos/LesVideos'
import BackereiVohdin from'./components/Stories/BackereiVohdin/BackereiVohdin'
import Nordbrucke from'./components/Stories/Nordbrucke/Nordbrucke'
import VillaTobler from'./components/Stories/VillaTobler/VillaTobler'
import Condomeria from'./components/Stories/Condomeria/Condomeria'
import BodegaEspanola from'./components/Stories/BodegaEspanola/BodegaEspanola'
import AlpliBar from'./components/Stories/AlpliBar/AlpliBar'
import {Switch, Route,} from 'react-router-dom';


export default(
    <Switch>
        <Route exact path='/' component={ Landing }></Route>
        <Route path='/list-view' component={ List }></Route>
        <Route path='/map-view' component={ Map }></Route>
        <Route path='/favorites' component={ Favorites }></Route>
        <Route path='/story/schwarzenbachkolonialwaren' component={ SchwarzenbachKolonialwaren }></Route>
        <Route path='/story/bluemeunderdeboge' component={ BluemeUnderDeBoge }></Route>
        <Route path='/story/weinschenke' component={ Weinschenke }></Route>
        <Route path='/story/puntoitaliano' component={ PuntoItaliano }></Route>
        <Route path='/story/lesvideos' component={ LesVideos }></Route>
        <Route path='/story/backereivohdin' component={ BackereiVohdin }></Route>
        <Route path='/story/nordbrucke' component={ Nordbrucke }></Route>
        <Route path='/story/villaTobler' component={ VillaTobler }></Route>
        <Route path='/story/condomeria' component={ Condomeria }></Route>
        <Route path='/story/bodegaespanola' component={ BodegaEspanola }></Route>
        <Route path='/story/alplibar' component={ AlpliBar }></Route>
    </Switch>


)