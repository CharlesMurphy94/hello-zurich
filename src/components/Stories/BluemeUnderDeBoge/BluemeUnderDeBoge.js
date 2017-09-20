import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class BluemeUnderDeBoge extends Component {
    constructor(){
        super()
        this.state={
            storyName:'bluemeunderdeboge',
            activePic:0,
        }
    
    }

    handleLeft = (change) => {
        if(this.state.activePic > 0) {
            console.log('minus')
            this.setState({activePic: this.state.activePic - 1})
        } else{
            console.log('to last')
            this.setState({activePic: 7})
        }
    }
    handleRight = (change) => {
        if (this.state.activePic < 7) {
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
            <div className='blueme-under-de-boge'>
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
                            <div className={this.state.activePic===5?'black-dot':'blue-dot'} value={5} onClick={()=>this.handleSelect(5)}/>
                            <div className={this.state.activePic===6?'black-dot':'blue-dot'} value={6} onClick={()=>this.handleSelect(6)}/>
                            <div className={this.state.activePic===7?'black-dot':'blue-dot'} value={7} onClick={()=>this.handleSelect(7)}/>
                            
                        </div>
                    </div>
                    

                </div>
                <div className='story-body'>
                    <div className='page-header'>
                        <h3 className='header-title'>Blueme under de Böge</h3>
                        <p className='header-blurb'>Fritz Schneiter has stood on the Limmatquai selling flowers for almost 50 years.</p>
                    </div>
                    <div className='credit'>
                        <p>Text: Nora Zukker Photos: Sophie Stieger</p>
                    </div>
                    <h4 className='intro'>
                    He began selling roses aged 17. Today, Fritz Schneiter knows just how important flowers can be for the key moments in life.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                    While I eat breakfast, I play a flower memory game online. It goes astoundingly badly. So I quickly google what flowers are in season and then head off to meet Fritz Schneiter on the Limmatquai. I find him sitting on a stool, trimming the long stems of sunflowers. In front of him are large buckets of water filled with summer bouquets and roses in various colours. ‘We’re still looking for an assistant,’ he laughs, and I’m a little embarrassed at not recognising anything other than the sunflowers, roses and peonies; my quick googling didn’t particularly help.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-1' />
                    </div>
                    <p className='main-story'>
                    That’s not so bad, Schneiter says. It’s much more important that anyone working for him is happy being outdoors – all year round. The only exception is if the thermometer climbs above 30 degrees or drops to minus ten; the flowers start to perish in the extreme temperatures, so he has to stop selling them. ‘Personally I never last very long in an enclosed room,’ says Schneiter, who trained as a technical rubber goods salesman, learning how to make everything from garden hoses to refrigerator seals. After he finished his training, he went into the flower business with his father and has been standing under the arches opposite the town hall for the past 48 years.
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-2' />
                    </div>
                    <div className='image-caption'>
                        <p>Like father, like daughter: Claudia Schneiter also works as a florist under the arches.</p>
                    </div>
                    <p className='main-story'>
                    And why is the flower stand under the arches? The reason dates back to the Second World War, when there were mines under all the bridges because the Limmat Valley was a line of defence. If the bridge had been covered with people clustering round the market stands, it would have been impossible to evacuate them quickly enough. And so the florists and grocers moved to the side: next to the town hall or, like Schneiter’s father, under the arches opposite the town hall.
                    </p>
                    <div className='image-double-container-ls'>
                        <div className='image img-3' />
                        <div className='image img-4' />
                    </div>
                    <div className='image-center-container'>
                        <div className='image img-5' />
                    </div>
                    <h3 className='subheader'>
                    The young Rosenkavalier
                    </h3>
                    <p className='main-story'>
                    At 17 years old, Schneiter stood next to his father under the arches every morning from 6:30 am. There was an all-girls’ secondary school near the Grossmünster at the time, and because there was no connecting tram from the main station, the young women passed the flower stand in droves. ‘Of course that was heaven for me!’ laughs Schneiter, still irresistibly charming.
                    </p>
                    <div className='block-quote'>
                        <p className='quote'>
                        ‘Because there was no connecting tram from the main station, the young women passed the flower stand in droves. Of course, that was heaven for me!’
                        </p>
                        <div className='horizontal-line'/>
                        <p className='quote-credit'>Fritz Schneiter</p>
                    </div>
                    <p className='main-story'>
                    A woman recently visited his stand who had attended the girls’ school forty years ago and was always tagging along unwanted after a particular group of girls. ‘We always made eye contact, but we never talked to each other,’ Schneiter tells me. One day, as the group of girls were walking past as usual, he gave her a rose without a word. ‘Now, so many years later, she came back to see me at the stand and thanked me for my gesture. She told me that nobody in the group understood why she in particular had got a rose from me, but it really boosted her self-confidence.’ Schneiter is well aware of how much emotion is attached to his flowers.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-6'></div>
                        <div className='text-overlap'>
                            <p>
                            There’s one woman that Fritz Schneiter will never forget. She wanted him to provide the floral decorations for her wedding, so he took care of the bridal bouquet, the decorations for the car, and the table arrangements in the restaurant. Then, shortly before the big day, she came back and asked if he also did funeral bouquets. Her fiancé had had a fatal car accident. And so Schneiter took care of the funeral wreath and the casket arrangement. As I leave, Schneiter winks at me and says that he’s still looking for an assistant. I laugh and take my leave.
                            </p>
                        </div>
                    </div>
                    
                </div>



            </div>
        );
    }
  }