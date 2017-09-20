import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class AlpliBar extends Component {
    constructor(){
        super()
        this.state={
            storyName:'alplibar',
            activePic:0,
        }
    
    }

    handleLeft = (change) => {
        if(this.state.activePic > 0) {
            console.log('minus')
            this.setState({activePic: this.state.activePic - 1})
        } else{
            console.log('to last')
            this.setState({activePic: 8})
        }
    }
    handleRight = (change) => {
        if (this.state.activePic < 8) {
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
            <div className='alpli-bar'>
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
                            <div className={this.state.activePic===8?'black-dot':'blue-dot'} value={8} onClick={()=>this.handleSelect(8)}/>
                        </div>
                    </div>
                </div>
                <div className='story-body'>
                    <div className='page-header'>
                        <h3 className='header-title'>Älpli-Bar</h3>
                        <p className='header-blurb'>
                            Katie Halter is the owner of this traditional folk music bar that has played host to acts such as Green Day and Mumford & Sons.
                        </p>
                    </div>   
                    <div className='credit'>
                        <p>Text: David Sarasin Photos: Raisa Durandi</p>
                    </div>
                    <h4 className='intro'>
                        The Älpli Bar has been a Zurich institution for Swiss folk music for decades – thanks in part to the host, Katie Halter. She let us in on the secret of the recipe of the bar’s hearty speciality, Älpli milk.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                        Stepping into the Niederdorf feels like stepping back in time. Walking through the narrow streets with Katie Halter, owner of the Älpli Bar, we're given glimpses of what life would have been like in an old alpine village. We walk past the florist, so of course Halter stops for a chat; then we cross by the old shoe shop, and she can tell us all about that too. Her traditional Swiss outfit completes the nostalgic look.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-1' />
                    </div>
                    <div className='image-double-container-ls'>
                        <div className='image img-2' />
                        <div className='image img-3' />
                    </div>
                    <p className='main-story'>
                        The Älpli Bar itself, which Halter has run for more than 30 years, also looks like a blast from the past. On the first floor of this medieval house on Ankengasse, guests sit at massive wooden tables decorated with thousands of carvings. The wall is adorned with an alpine panorama showing the Tödi and the Sand Alp, while the bar proudly displays the names of prize-winning cows. The balcony offers the slogan: ‘Uf der Alp da gits kei Sünd. Zum Trinke het me immer Gründ’, or, roughly, ‘Up in the mountains, there are no sins. There is always a reason to drink.’
                    </p>
                    <div className='paragraph-spacer'></div>
                    <p className='main-story'>
                        This traditional bar may hardly seem typical for Zurich at first glance, but for years it has attracted fans of Ländler folk music from all across Switzerland – and with good reason: The bar’s small gallery has bands playing 365 days a year. Alongside the expected music lovers, the audience is also full of nostalgic young people and curious tourists who hope to experience a bit of Swiss folklore.
                    </p>
                    <div className='paragraph-spacer'></div>
                    <p className='main-story'>
                        You could argue that this is simply a carefully constructed setting, not a centuries-old custom; artificially introduced rather than home grown. And that’s true – and yet, Ländler has played an important role in the Niederdorf since the end of the 19th century. What's more, this area, far from any rural idyll, has always been a place where traditional Swiss music has been developed and popularised. Some even claim that Ländler was created in the heart of Zurich.
                    </p>
                    <div className='block-quote'>
                        <p className='quote'>
                            ‘I owe all the traditions to my guests and to Aunt Klara!’
                        </p>
                        <div className='horizontal-line'/>
                        <p className='quote-credit'>Katie Halter, owner</p>
                    </div>
                    <p className='main-story'>
                        Anyway – no matter how it got here, what’s important is that you can now sit down at one of these great tables and order Älpli milk, the bar’s signature drink. The recipe for this dangerously sweet drink, served in huge tankards, was a closely-held secret for many years. During our visit, however, Halter lets it slip: it’s made of an egg – fresh from the farm – white wine, brandy, and of course, sugar.
                    </p>
                    <div className='paragraph-spacer'></div>
                    <p className='main-story'>
                        Anyone who needs to line their stomach to accompany this hearty drink can order a cold platter – which of course is accompanied by the classic Swiss seasonings Aromat and Maggi – or a fondue in winter.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-4' />
                    </div>
                    <p className='main-story'>
                        ‘I owe all the traditions to my guests,’ says Halter, ‘and to Aunt Klara!’ Her Aunt Klara ran the Älpli Bar in the sixties, when prostitutes still lived in the attic. ‘She was a real character who knew how exactly to deal with guests.’ Halter wanted to run things in the same way – and she succeeded. This is despite the many local changes since the sixties, not least the neighbours, who have become increasingly sensitive to noise. Halter doesn’t let it stop her, however.
                    </p>
                    <div className='paragraph-spacer'></div>
                    <p className='main-story'>
                        And so the three-piece band starts up right on time, and as the tables slowly start to fill up, the general mood rises. We meet some young Zurich locals who wanted to experience something away from the bar scene in Kreis 4. And a different experience is exactly what they found; they later said that it was like stumbling into an entirely different world.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-5'></div>
                        <div className='text-overlap'>
                            <p>
                                The bands Green Day and Mumford & Sons also found themselves inspired when they came to the Älpli Bar after playing a concert in Zurich, and even performed some songs on stage. And the only way that you can really understand the unique mix of traditional and modern to be found in a place like the Älpli Bar – is to visit for yourself.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }