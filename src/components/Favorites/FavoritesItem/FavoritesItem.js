import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
        story: this.props.story,
        storyName: this.props.story.name,
        storyBlurb: this.props.story.blurb,
        storyId: this.props.storyId,
        update: this.props.update,
        filler: false,

        // favorited: true
        }
        this.storyNameParser = this.storyNameParser.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
    }

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


    deleteFavorite = (a)=>{
        axios.delete(`http://localhost:3030/deleteFavorites/${this.state.storyId}`).then(res=>{
            
            // this.setState({favorited: false});
            // this.setState({filler: true})
            this.props.update();
        })

    }
    
    render(){
        return(
            <div className='list-item-container'>
                <div className='favorite-icon'>
                    <i className={`fa fa-times`} onClick={this.deleteFavorite}></i>
                </div>
                <Link to={`/story/${this.storyNameParser(this.state.storyName)}`}>
                    <div className='list-item'>
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