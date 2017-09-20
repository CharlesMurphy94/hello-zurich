import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class LesVideos extends Component {
    constructor(){
        super()
        this.state={
            storyName:'lesvideos',
            activePic:0,
        }
    
    }

    handleLeft = (change) => {
        if(this.state.activePic > 0) {
            console.log('minus')
            this.setState({activePic: this.state.activePic - 1})
        } else{
            console.log('to last')
            this.setState({activePic: 6})
        }
    }
    handleRight = (change) => {
        if (this.state.activePic < 6) {
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
            <div className='les-videos'>
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
                            
                        </div>
                    </div>
                    

                </div>
                <div className='story-body'>
                <div className='page-header'>
                    <h3 className='header-title'>Les Videos</h3>
                    <p className='header-blurb'>
                        André Willimann stands behind the counter of Zurich’s last video shop, a unique archive that includes around 32,000 films.
                    </p>
                </div>   
                <div className='credit'>
                    <p>Text: David Sarasin Photos: Jasmin Frei</p>
                </div>
                <h4 className='intro'>
                    Independent films, classics, obscure genres – the picturesque shop on Zähringerstrasse will impress even the most well-versed cinephile – and your everyday film lover, of course.
                </h4>
                <div className='toMap'>
                    <h4>Go to details and map</h4>
                </div>
                <p className='main-story'>
                Sometimes 14 years can feel like an eternity. When André Willimann started his side job at Les Videos in 2003, no one had heard of YouTube and Facebook, let alone Netflix. It was a time when every town still had flourishing video shops – there were more than a dozen in Zurich. Today, a digital eternity later, the world of film has been completely transformed. Much of it has shifted to the internet, and there are no more video stores: or more precisely, in Zurich, there is just one left. It’s one of those picturesque shops with elegant window displays on Zähringerstrasse. And Willimann is still behind the counter.
                </p>
                <div className='image-center-container'>
                    <div className='image img-1' />
                </div>
                <p className='main-story'>
                    Willimann’s dedication and Les Videos’ continued existence are no coincidence. Having studied art, working in the film archive has always been more than just a job for Willimann. He noticed this early on when he originally took the job to support himself during his studies. ‘I couldn’t imagine any better kind of sales job,’ says the 36-year-old. ‘Talking with the customers, the countless films – I love it.’ And that’s what has kept him there. ‘Our inventory grew naturally over time,’ adds Willimann. ‘It is an organic entity.’
                </p>
                <div className='image-double-container'>
                    <div className='image img-2' />
                    <div className='image img-3' />
                </div>
                <p className='main-story'>
                The proprietors manage a collection of around 32,000 films. No one knows the exact number, but it is certain that there is no bigger publicly accessible film archive in the city – possibly even in the entire country. Whether you’re a cinephile foraging for silent films from the 1920s, obscure science fiction, blaxploitation or nouvelle vague, you’re sure to find what you’re looking for at Les Videos. This might also be the reason why it’s the city’s only surviving video shop.
                </p>
                <div className='paragraph-spacer'></div>
                <p className='main-story'>
                This is not to say that changes brought about by digitalisation have left Les Videos completely unscathed, however. The top floor, which once housed the foreign film collection, has long since been leased to graphic designers, and the shop’s opening hours have been reduced. ‘Nobody comes to the shop looking for blockbusters anymore,’ says Willimann. Today’s viewers go online to watch Transformers or Minions.
                </p>
                <div className='paragraph-spacer'></div>
                <p className='main-story'>
                But Les Videos remains an important port of call for people with specific tastes, because, among other things, there is nowhere on the internet offering a comparable range. ‘Internet algorithms are increasingly leading to a commercialisation of our taste,’ says Willimann. The opposite can be said of Les Videos, where niche genres are meticulously cultivated. What the shop also offers that online streaming can’t is a staff of true film experts able to offer patrons insightful tips. Perusing the collection, you’re sure to stumble upon some true gems. It’s a place to strike up conversations with people.
                </p>
                <div className='image-double-container-ls'>
                    <div className='image img-4' />
                    <div className='image img-5' />
                </div>
                <p className='main-story'>
                This is something of great value to hundreds of aficionados as well as film students, culture reporters and programming directors from the city’s repertory cinemas, all of whom can be regularly found scurrying between the narrow racks of Les Videos, up the creaky wooden staircase, or down to the cellar where the war films are kept. Willimann is always acquiring new knowledge himself, watching several films each week not because he has to but because it’s what interests him. His favourites are Kubrick’s Barry Lyndon and Rambo IV. ‘My film taste is rather unconventional,’ he says with a laugh. His down-to-earth nature is also what gives Les Videos such a pleasant atmosphere.
                </p>
                <div className='overlap'>
                    <div className='image-overlap img-6'></div>
                    <div className='text-overlap'>
                        <p>
                        Very reluctantly, Schwarzenbach has had to think about a new till system. ‘We could never tolerate a till with a monitor that beeps with every single item!’ Schwarzenbach will only unwillingly take action, change things and risk destroying the atmosphere. And so my gaze falls on the card machine, which hasn’t made a single sound since my arrival in the shop.                            
                        </p>
                    </div>
                </div>
            </div>



            </div>
        );
    }
  }