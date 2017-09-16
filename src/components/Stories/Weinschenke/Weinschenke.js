import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class Weinschenke extends Component {
    constructor(){
        super()
        this.state={
            storyName:'weinschenke',
            activePic:0,
        }
    
    }

    // componentDidMount(){
    //     axios.get('http://localhost:3030/featured').then(res=>{
    //         this.setState({featuredStories: res.data})   
    //         console.log(res.data)
    //     })
        

    // }

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
            <div className='weinschenke'>
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
                        <h3 className='header-title'>Weinschenke</h3>
                        <p className='header-blurb'>A glass of wine on the most enchanting roof terrace in Zurich.</p>
                    </div>
                    <div className='credit'>
                        <p>Text: Stefanie Rigutto Photos: Basil Stücheli</p>
                    </div>
                    <h4 className='intro'>
                        The Weinschenke on Hirschengasse is the opposite of trendy – which is why it’s one of the most relaxed places in Zurich. Surrounded by ancient walls, overlooked by pigeons and far from the hustle and bustle of the Niederdorf, you can drink a cool glass of Petite Arvine and gaze out over the city’s rooftops.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                    Hirschengasse is, shall we say, not the liveliest street in the Niederdorf. And I say that lovingly, because I’ve lived on this street for five years. It is dark, cold, narrow and musty – the opposite of inviting. It’s not a street that you would just happen to wander down. You have to know what you're after – such as a glass of wine on Zurich’s most well-hidden roof terrace.
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-1' />
                    </div>
                    <div className='image-double-container-ls'>
                        <div className='image img-2' />
                        <div className='image img-3' />
                    </div>
                    <p className='main-story'>
                    Of course, the Weinschenke is also a wonderfully relaxed place to spend cold and rainy days philosophising. ‘Drink wine and you will sleep well. Sleep, and you will not sin. Avoid sin, and you will be saved. Ergo, drink wine and be saved.’ So goes the board by the entrance.
                    </p>
                    <div className='parallax'></div>
                    <p className='main-story'>
                    And where better to be saved than here? The vaulted ceiling catapults you directly back into the Middle Ages, while candles illuminate the ceiling, and beneath a glass pane on the floor you can see an old 14th-century well still full of water. The cellar was once used as a forge, then as a stable and later as a storage room. It has been home to the Weinschenke since 2002.
                    </p>
                    <div className='image-double-container-ls'>
                        <div className='image img-4' />
                        <div className='image img-5' />
                    </div>
                    <p className='main-story'>
                    My ritual in the Weinschenke goes like this: first, you take a seat in the cellar, choose a glass of one of the 120 wines on offer, and let yourself soak up the atmosphere. Then you step into the lift, press the button for the ninth floor and go up. Above, it’s as if the sun is rising.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-6'></div>
                        <div className='text-overlap'>
                            <p>
                            The sky isn’t endless, hemmed in a little by the roofs of the Niederdorf, but that somehow makes it more beautiful. It’s as if the old town rests here for a moment. You sit between the plants, listen to the pigeons cooing and enjoy knowing that you’ve discovered such a well-kept secret in the heart of the city.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
  }