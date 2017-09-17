import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class Nordbrucke extends Component {
    constructor(){
        super()
        this.state={
            storyName:'nordbrucke',
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
            <div className='nordbrucke'>
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
                        <h3 className='header-title'>Nordbrücke</h3>
                        <p className='header-blurb'>
                            Café Bar Nordbrücke has a long history. Ten years ago, Felix Haldimann, Marcel Ferri and Daniel Seitz gave it new life.                        
                        </p>
                    </div>   
                    <div className='credit'>
                        <p>Text: Mirja Keller Photos: Christian Schiller</p>
                    </div>
                    <h4 className='intro'>
                        Its motto is ‘Part of the neighbourhood, yet still unique’. Everyone’s welcome at the popular Wipkingen watering hole, from the talkative and sociable to quiet Zurich residents who meet here for an after-work drink. Felix Haldimann, Marcel Ferri and Daniel Seitz are carrying the traditional pub forward into the 21st century.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                        Like so many things, it all started over a pint of beer. Or rather, with the desire for a pint of beer, as Felix recalls mischievously. When he moved to Wipkingen in the late 90s, there wasn’t a lot going on in the area – yet. When the Nordbrücke restaurant came onto the market, Felix gathered his friends Marcel, Daniel and Dominik, and seized the opportunity. That was almost 10 years ago. ‘Reason to celebrate?’ I ask. But Felix responds: ‘I’m imagining an even bigger party for the Nordbrücke’s 125th anniversary.’
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-1' />
                    </div>
                    <div className='image-double-container'>
                        <div className='image img-2' />
                        <div className='image img-3' />
                    </div>
                    <div className='image-double-container'>
                        <div className='image img-4' />
                    </div>
                    <div className='image-caption'>
                        <p>Barman and co-owner Marcel Ferri.</p>
                    </div>
                    <p className='main-story'>
                        Yep, the Nordbrücke really has been here for 125 years. The inn is an integral part of Zurich’s history. It was there back in 1893, when Wipkingen was incorporated into the city of Zurich and the number 4 tram still turned around at Röschibachplatz, before the Hardbrücke bridge was rebuilt. And it has witnessed how the little neighbourhood has transformed from a sleepy suburb into the popular, trendy area it is today. Throughout the years, the Nordbrücke has retained its status as the local pub. You could almost say that it’s a piece of history in itself.
                    </p>
                    <div className='paragraph-spacer'></div>
                    <p className='main-story'>
                        And the years have left their mark on the walls of the homely yet trendy café bar: you can still see the yellow-brown stains left behind by years of cigarette smoke. Meanwhile, the tables have long been part of the Nordbrücke’s traditional interior. As you sink into the cosy sofa by the bar, it’s easy to see that this is a place where old and new can meet on their own terms, in a relaxed yet authentic manner. The Nordbrücke’s homely atmosphere feels completely natural, even though plenty of thought has gone into it. ‘We wanted to retain the Nordbrücke’s unique character, so we developed a concept that allowed us to do so,’ explains Felix. We’re sitting outside with coffee and soft drinks, watching the hustle and bustle of Röschibachplatz as we enjoy the warm summer day.
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-5' />
                    </div>
                    <div className='image-caption'>
                        <p>The owners and friends, Marcel Ferri, Felix Haldimann and Daniel Seitz.</p>
                    </div>
                    <p className='main-story'>
                        ‘It’s important to us that we serve as a meeting place for everyone,’ continues the debonair proprietor. ‘We didn’t want to be just another trendy bar.’ I take a closer look at the other guests. Beside us, a woman is engrossed in her reading, while someone else works hard on their laptop two tables over. By the entrance to the terrace sit two young men drinking beer and discussing their holidays. It’s the perfect illustration of owners Daniel, Felix and Marcel’s motto for their café bar: ‘Part of the district, yet still unique’. Friends from the local area meeting for a drink; families visiting for Sunday brunch; people who value the Nordbrücke as a peaceful place to work.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-6' />
                    </div>
                    <div className='image-double-container-ls'>
                        <div className='image img-7' />
                        <div className='image img-8' />
                    </div>
                    <p className='main-story'>
                        The three owners and friends, Daniel, Felix and Marcel, originally met in the music scene: they all love electro and regularly organise concerts and the ‘Ziischtigsklub’, a micro-disco held every other Tuesday, at the Nordbrücke.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-9'></div>
                        <div className='text-overlap'>
                            <p>
                                However, those who prefer a glass of wine and a bite to eat will also find what they’re looking for here. The beer selection is particularly impressive, with more than 20 varieties on offer. Connoisseurs will also appreciate barman and owner Marcel’s expert advice. And the Nordbrücke has plenty to offer the hungry too: it’s as well-known for its tasty lunches as it is for its impressive drinks menu. After all, that’s what’s really important in a local pub – reasonably priced food and first-class drinks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }