import React, {Component} from 'react';
import axios from 'axios';
import ListItem from './ListItem/ListItem'
import { Link } from 'react-router-dom';

export default class List extends Component {
    constructor(){
        super()
        this.state={
            stories: [],
            favorites: [{story_id:null}],
            showFilter: false,
            filtered: false,
            filters:['All Stories','Food & Drinks','Shopping','Sightseeing','Outdoor & Relax','Culture','Nightlife & Entertainment','Stories & Specials']
        }
        this.checkFavorite = this.checkFavorite.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.filterResults = this.filterResults.bind(this);
    }


    componentWillMount(){
        if (this.state.filtered === false){
            axios.get('http://localhost:3030/stories').then(res=>{
                let tempStories = res.data;    
            // this.setState({stories: res.data})
                axios.get('http://localhost:3030/favorites').then(res=>{
                    // console.log(`this is the ${res.data}`)
                    
                    if(res.data[0]==='no favorites') {
                        this.setState({stories:tempStories,
                        favorites: ['no favorites']});
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
    toggleFilter = () => {
        this.setState({showFilter:(this.state.showFilter ? false : true)})
        
    }
    filterResults = (filter) => {
        if(filter!=='All Stories'){
            this.setState({filtered: true})
            axios.get(`http://localhost:3030/stories/${filter}`).then(res=>{
                // let tempStories = res.data;
                this.setState({stories: res.data});    
            // this.setState({stories: res.data})
                // axios.get('http://localhost:3030/favorites').then(res=>{
                //     // console.log(`this is the ${res.data}`)
                    
                //     if(res.data[0]==='no favorites') {
                //         this.setState({stories:tempStories,
                //         favorites: ['no favorites']});
                //     } else{
                //         let tempFavIds = res.data.map((e,i,a)=>{
                //             return e.story_id;
                //         });
                //         // this.setState({favorites:res.data})
                //         for(let i=0;i<tempStories.length;i++){
                //             tempStories[i].favorited = tempFavIds.includes(tempStories[i].id)
                //         }
                //         this.setState({stories:tempStories});
                //     }
                // })
            })
            this.setState({showFilter:false})
        } else this.setState({showFilter:false, filtered: true})
    }
    render(){
        let stories = this.state.stories.map((e,i,a)=>(
           <ListItem  story_id={e.id} 
                    story={e}
                    key={i}
                    favorited={e.favorited}
                    favorites={this.state.favorites}
            />
        ))

        let filters = this.state.filters.map((e,i,a)=>{
            let key=i;
            return(
                <div className='filter-option' onClick={()=>(this.filterResults(e))}>
                    <p>{e}</p>
                </div>
            )
        })
    
    
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
                    <p className='filter-button' onClick={this.toggleFilter}>Filter</p>
                </div>
                <div className={this.state.showFilter?'filter-container':'hidden'}>
                    <div className={this.state.showFilter?'filter-title':'hidden'}>
                        <h1>Categories</h1>
                    </div>
                    <div className={this.state.showFilter?'filter-columns':'hidden'}>
                        {filters}
                    </div>
                </div>

                <div className="story-grid">
                    {stories}
                </div>
            </div>
        );
}   
}