import React, {Component} from 'react';
import axios from 'axios';
import FavoritesItem from './FavoritesItem/FavoritesItem'
import {refresh} from 'react-router'

export default class List extends Component {
    constructor(){
        super()
        this.state={
            favorites: []

        }
        this.updateFavorites = this.updateFavorites.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3030/favorites').then(res=>{
            if(res.data[0]!=='no favorites'){
            this.setState({favorites: res.data})
            }
        })
    }
    
    updateFavorites(){
        axios.get('http://localhost:3030/favorites').then(res=>{
            // console.log(res.data)
            this.setState({favorites: res.data})
            window.location.reload();

        })
    }
    
    render(){
        let favorites = this.state.favorites.map((e,i)=>(
            <FavoritesItem  id={e.id} 
                            storyId={e.story_id}
                            story={e}
                            key={i}
                            update={this.updateFavorites}
            />
        ))
    
        return (
            <div className='favorites'>

                <div className='story-grid'>
                    {favorites}
                </div>
            </div>
        );
}   
}