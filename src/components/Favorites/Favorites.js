import React, {Component} from 'react';
import axios from 'axios';
import FavoritesItem from './FavoritesItem/FavoritesItem'
import {refresh} from 'react-router'

export default class List extends Component {
    constructor(){
        super()
        this.state={
            favorites: [],
            user: false,

        }
        this.updateFavorites = this.updateFavorites.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3030/favorites').then(res=>{
            if(res.data[0]!=='no favorites'){
            this.setState({favorites: res.data, user: true})
            } else{
                this.setState({user: false})
            }
        })
    }
    
    updateFavorites(){
        axios.get('/favorites').then(res=>{
            // console.log(res.data)
            if(res.data[0]!=='no favorites'){
                this.setState({favorites: res.data})
            }
            
            // window.location.reload();

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
                <div className={this.state.user ? 'hide' :'no-user'}>
                    <div className={this.state.user ? 'hide' :'blur'}/>
                    <div className={this.state.user ? 'hide' : 'heart-container'}>
                        <div className={this.state.user ? 'hide' : 'heart'}>
                        </div>
                        <div className={this.state.user ? 'hide' : 'heart-text'}>
                            <i className={this.state.user ? 'hide' : 'fa fa-heart'}/>
                            <p>Please log in to keep track of you favorite stories!</p>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <p className={this.state.user ? 'hide' : 'nav-login'}>Log in</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
}   
}