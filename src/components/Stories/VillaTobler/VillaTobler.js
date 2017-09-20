import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class VillaTobler extends Component {
    constructor(){
        super()
        this.state={
            storyName:'villatobler',
            activePic:0,
        }
    
    }
    handleLeft = (change) => {
        if(this.state.activePic > 0) {
            console.log('minus')
            this.setState({activePic: this.state.activePic - 1})
        } else{
            console.log('to last')
            this.setState({activePic: 4})
        }
    }
    handleRight = (change) => {
        if (this.state.activePic < 4) {
            this.setState({activePic: this.state.activePic + 1})
            console.log(this.state.activePic)
        } else{
            console.log('to first')
            this.setState({activePic: 0})
        }
    }
    handleSelect = (selected) => {
        this.setState({activePic: selected});

    }
    

    render(){
        // const divStyle={
           
        //     backgroundImage:url(`./img/previewPics/${this.storyNameParser(this.state.featuredStories[this.state.activeFeature].name)}.jpg`)
        // }
        return (
            <div className='villa-tobler'>
                <div className='story-nav'>
                </div>
                <div className='story-slider'>
                    <div className='slider-image'>
                        <div className={this.state.storyName+this.state.activePic}>
                        </div>
                    </div>
                    <div className='slide-left'value='--' onClick={this.handleLeft}>
                        <div className='left-arrow' ></div>
                    </div>
                    <div className='slide-right'value='--' onClick={this.handleRight}>
                        <div className='right-arrow' ></div>
                    </div>
                    
                    <div className='slider-dot-container'>
                        <div className='slider-dots'>        
                            <div className={this.state.activePic===0?'black-dot':'blue-dot'} value={0} onClick={()=>this.handleSelect(0)}/>
                            <div className={this.state.activePic===1?'black-dot':'blue-dot'} value={1} onClick={()=>this.handleSelect(1)}/>
                            <div className={this.state.activePic===2?'black-dot':'blue-dot'} value={2} onClick={()=>this.handleSelect(2)}/>
                            <div className={this.state.activePic===3?'black-dot':'blue-dot'} value={3} onClick={()=>this.handleSelect(3)}/>
                            <div className={this.state.activePic===4?'black-dot':'blue-dot'} value={4} onClick={()=>this.handleSelect(4)}/>
                            
                            
                        </div>
                    </div>
                </div>
                <div className='story-body'>
                    <div className='page-header'>
                        <h3 className='header-title'>Villa Tobler</h3>
                        <p className='header-blurb'>
                            Stefanie Rigutto shows us one of her favourite places: Villa Tobler’s forgotten park, tucked away from the city’s hustle and bustle.
                        </p>
                    </div>   
                    <div className='credit'>
                        <p>Text: Stefanie Rigutto Photos: Basil Stücheli</p>
                    </div>
                    <h4 className='intro'>
                        Why go to the lake when it’s so much more relaxed in the old town? The garden at Villa Tobler is perhaps the quietest place around – forgotten by tourists and locals alike. Huge copper beeches provide shade while you swear eternal love by the dragon fountain. Is there anything better?
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                        Walking along Oberdorfstrasse involves dodging between groups of tourists, avoiding the dog barking in front of the children’s book shop and the young couple talking at the top of their voices just ahead. We flee into Trittligasse and the silence swallows us. Peace and quiet! We climb upwards and then slope back down; the many tiny steps are the purest kind of meditation. Soon you can hear nothing but the song of a blackbird.
                    </p>
                    <div className='block-quote'>
                        <p className='quote'>
                        The silence swallows us.
                        </p>
                        <div className='horizontal-line'/>
                    </div>
                    <p className='main-story'>
                        At the end of the alley, the garden of the stately Villa Tobler awaits. It’s a place you usually have to yourself. For any history buffs: the villa was built in the middle of the 19th century in the late classical style – and by the same architect who designed Zurich’s railway station, now the main station.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-1' />
                    </div>
                    <div className='image-double-container'>
                        <div className='image img-2' />
                        <div className='image img-3' />
                    </div>
                    <p className='main-story'>
                        It is a park for all seasons. In spring, you can sit beneath the shelter of the villa’s wall and watch the daffodils push their way out of the earth. Summer is the time to sit by the fountain with its gold mosaic and enjoy the coolness of the water. The stone bench by the dragon fountain could have been made for two lovers – where would you swear eternal fidelity if not here? In autumn, the leaves drift into mountainous piles that you can wade through as if through a roaring river. I am particularly fond of the imposing beech trees that were planted when the garden was first created. The trunks are so thick that you need a handful of friends to encircle them. And in winter? The park is even more peaceful than usual.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-4' />
                    </div>
                    <div className='image-double-container'>
                        <div className='image img-5' />
                        <div className='image img-6' />
                    </div>
                    <p className='main-story'>
                        In the garden at Villa Tobler, you’re likely to be startled by your own sneeze – it’s that quiet and peaceful here. If the sound of a car horn didn’t occasionally drift over, you would never think that you were in the centre of Switzerland’s largest city. There are no barbecues here, no football and no boot camps; no music, no ice cream sellers and no frisbee players. In short: Villa Tobler’s garden is wonderfully boring. It’s the perfect place to do nothing except sit and listen to the sound of silence.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-7'></div>
                        <div className='text-overlap'>
                            <h1>By the way</h1>
                            <p>
                            If you want to extend the peace and quiet a little on your way back to Oberdorf, walk down Frankengasse – definitely the loneliest alley in the old town! The residents here have put flower pots in front of their houses, there is a cat ladder going up the wall and people say hello in the street. On Frankengasse, all is right with the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }