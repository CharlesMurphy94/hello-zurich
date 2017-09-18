import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { TweenMax} from 'gsap'
;
class ListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
        story: this.props.story,
        storyName: this.props.story.name,
        storyBlurb: this.props.story.blurb,
        storyId: this.props.story_id,
        favorites: this.props.favorites,
        favoriteIcon:'',
        favorited:this.props.favorited
        }
        this.storyNameParser = this.storyNameParser.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        // this.handleHover = this.handleHover.bind(this);
        // this.checkForFavorite = this.checkForFavorite.bind(this);
    }

    componentDidMount(){
        // console.log(this.state)
    }

    // handleHover = (e)=>{
    //     TweenMax.to(this, .35,{
    //         width: '300px'
    //     } )
    // }
    

    storyNameParser = (storyName)=>{
        let array = storyName.toLowerCase().split('').map((e,i,a)=>{
            return e===' ' ?'-':
            e==='ö'?'o':
            e==='ä'?'a':
            e==='ü'?'u':
            e==='ñ'?'n':e;
        })
        return array.join('')
    }

    // checkForFavorite = (a)=>{
    //     return (this.state.favorited === true ? 'heart' : 'heart-o')
    // }

    toggleFavorite = ()=>{
        if (this.state.favorites[0]==='no favorites'){
            console.log('happened')
            alert('Please log in to add stories to your favorites')
        }
        if (this.state.favorited===false){
            axios.post(`http://localhost:3030/addFavorites/${this.state.storyId}`).then(res=>{
                this.setState({favorited: true})
            })
        } else{
            axios.delete(`http://localhost:3030/deleteFavorites/${this.state.storyId}`).then(res=>{
                this.setState({favorited: false})
            })
        };
    }
    render(){
        return(
            <div className='list-item-container'>
                <div className='favorite-icon'>
                    <i className={this.state.favorited?'fa fa-heart':'fa fa-heart-o'} onClick={this.toggleFavorite}></i>
                </div>
                <Link to={`/story/${this.storyNameParser(this.state.storyName)}`}>
                    <div className='list-item' onHover={this.shrinkHeart}>
                        {/* <img className="preview-pic" src={`../../../img/previewPics/${this.storyNameParser(this.state.storyName)}.jpg`}>
                        </img> */}
                        <div className={this.storyNameParser(this.state.storyName)}>
                        </div>
                        <div className='list-item-body'>
                            <h1>{this.state.storyName}</h1>  
                            <p>{this.state.storyBlurb}</p>
                        </div>
                        
                    </div>
                </Link>
            </div>
                

        )
    }

}
export default ListItem