import React, {Component} from 'react';
import axios from 'axios';
import ListItem from './ListItem/ListItem'
import { Link } from 'react-router-dom';

export default class List extends Component {
    constructor(){
        super()
        this.state={
            stories: [],
            favorites: [{story_id:null}]
        }
        this.checkFavorite = this.checkFavorite.bind(this);
    }


    componentWillMount(){
        axios.get('http://localhost:3030/stories').then(res=>{
            let tempStories = res.data;    
        // this.setState({stories: res.data})
            axios.get('http://localhost:3030/favorites').then(res=>{
                // console.log(`this is the ${res.data}`)
                
                if(res.data[0]==='no favorites') {
                    this.setState({stories:tempStories});
                } else{
                    let tempFavIds = res.data.map((e,i,a)=>{
                        return e.story_id;
                    });
                    // this.setState({favorites:res.data})
                    for(let i=0;i<tempStories.length;i++){
                        tempStories[i].favorited = tempFavIds.includes(tempStories[i].id)
                    }
                    this.setState({stories:tempStories});
                }
            })
        })
            
        

    }
    checkFavorite(index){
        let match = false;
        for(let i=0;i<this.state.favorites.length;i++){
            // console.log(this.state.favorites[i].story_id, index)
            if(this.state.favorites[i].story_id === index){
                
                match = true;
            }
        }
        // console.log(match)
        return match
    }

    
    render(){
        let stories = this.state.stories.map((e,i,a)=>(
           <ListItem  story_id={e.id} 
                    story={e}
                    key={i}
                    favorited={e.favorited}
            />
        ))
    
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

                <div className="story-grid">
                    {stories}
                </div>
            </div>
        );
}   
}