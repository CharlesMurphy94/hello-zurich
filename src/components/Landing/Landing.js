import React, {Component} from 'react';
import vid from '../../img/landing-background.mp4';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Landing extends Component {
    constructor(){
        super()
        this.state={
            featuredStories:[{name:''},{name:''},{name:''},{name:''},{name:''},{name:''}],
            activeFeature: 0,
        }
        this.storyNameParser = this.storyNameParser.bind(this)
        this.handleLeft= this.handleLeft.bind(this)
        this.handleRight= this.handleRight.bind(this)
        this.handleSelect= this.handleSelect.bind(this)
    }

    componentDidMount(){
        axios.get('/featured').then(res=>{
            this.setState({featuredStories: res.data})   
            console.log(res.data)
        })
        

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

    handleLeft = (change) => {
        if(this.state.activeFeature > 0) {
            console.log('minus')
            this.setState({activeFeature: this.state.activeFeature - 1})
        } else{
            console.log('to last')
            this.setState({activeFeature: 4})
        }
    }
    handleRight = (change) => {
        if (this.state.activeFeature < 4) {
            this.setState({activeFeature: this.state.activeFeature + 1})
            console.log(this.state.activeFeature)
        } else{
            console.log('to first')
            this.setState({activeFeature: 0})
        }
    }
    handleSelect = (selected) => {
        this.setState({activeFeature: selected});

    }
    

    render(){
        // const divStyle={
           
        //     backgroundImage:url(`./img/previewPics/${this.storyNameParser(this.state.featuredStories[this.state.activeFeature].name)}.jpg`)
        // }
        return (
            <div className='landing'>
                <div className='vid-container'>
                    <video autoPlay loop>
                        <source src={vid} type='video/mp4' />
                        <source src={vid} type='video/ogg' />
                    </video>
                </div>
                <div className='description-box'>
                    <h2 className='landing-description'>
                    Discover unique places and locals’ favourite spots. We bring you the stories behind the sights. This is no ordinary city guide.
                    </h2>
                    <p className='test-site-disclaimer'>
                        This is a clone of <a href='https://www.hellozurich.ch/en/'>hellozurich.ch</a> built for practice.
                    </p>
                </div>
                <div className='landing-content'>
                    <h3 className='featured-header'>
                        Chosen for you
                    </h3>
                    <div className='story-slider'>
                        <Link to={`/story/${this.storyNameParser(this.state.featuredStories[this.state.activeFeature].name)}`}>
                            <div className='slider-image'>
                                <div className={this.storyNameParser(this.state.featuredStories[this.state.activeFeature].name)}>
                                </div>
                            </div>
                        </Link>    
                        <div className='slide-left'value='--' onClick={this.handleLeft}>
                            <div className='left-arrow' ></div>
                        </div>
                        <div className='slide-right'value='--' onClick={this.handleRight}>
                            <div className='right-arrow' ></div>
                        </div>
                        
                        <div className='slider-dot-container'>
                            <div className='slider-dots'>        
                                <div className={this.state.activeFeature===0?'black-dot':'blue-dot'} value={0} onClick={()=>this.handleSelect(0)}/>
                                <div className={this.state.activeFeature===1?'black-dot':'blue-dot'} value={1} onClick={()=>this.handleSelect(1)}/>
                                <div className={this.state.activeFeature===2?'black-dot':'blue-dot'} value={2} onClick={()=>this.handleSelect(2)}/>
                                <div className={this.state.activeFeature===3?'black-dot':'blue-dot'} value={3} onClick={()=>this.handleSelect(3)}/>
                                <div className={this.state.activeFeature===4?'black-dot':'blue-dot'} value={4} onClick={()=>this.handleSelect(4)}/>
                                
                            </div>
                        </div>
                        <Link to={`/story/${this.storyNameParser(this.state.featuredStories[this.state.activeFeature].name)}`}>
                            <div className='slider-text'>
                                <h3 className='slider-text-header'>{this.state.featuredStories[this.state.activeFeature].name}</h3>
                                <p className='slider-text-blurb'>{this.state.featuredStories[this.state.activeFeature].blurb}</p>
                            </div>
                        </Link>   

                    </div>
                    
                </div>


            </div>
        );
    }
  }