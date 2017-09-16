import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class BodegaEspanola extends Component {
    constructor(){
        super()
        this.state={
            storyName:'bodegaespanola',
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
            <div className='bodega-espanola'>
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
                        <h3 className='header-title'>Bodega Española</h3>
                        <p className='header-blurb'>
                            Where artists, tourists, millionaires and the homeless meet – and Lenin still has a tab open.
                        </p>
                    </div>   
                    <div className='credit'>
                        <p>Text: Florian Blumer Photos: Christian Schwarz</p>
                    </div>
                    <h4 className='intro'>
                        The Bodega Española is known from Russia to Hong Kong, despite the fact that for nearly 150 years, it’s been no more and no less than what the name promises: a Spanish bodega. Artists, musicians and intellectuals come and go alongside national and international entertainment stars and top athletes, students and pensioners, locals and tourists, millionaires and the homeless. What makes the bodega so appealing to so many different people? We sat down with host Eric Winistörfer and regular Christian Schwarz at one of the restaurant’s large tables to find a few answers.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                    Hong Kong? Why Hong Kong, exactly? This, Winistörfer tells us as he launches into his first anecdote, is exactly what he began to ask himself. For some reason, guests from Hong Kong kept on phoning up to reserve tables with him. Eventually, he asked one caller why – was it the rice, the wine, the tapas? No, the caller said: the bodega was mentioned in a Hong Kong guide to Switzerland as the restaurant in which Lenin had his last open tab. The Russian revolutionary leader lived in the Niederdorf, very close by.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-1' />
                    </div>
                    <div className='image-caption'>
                        <p>Eric Winistörfer is part of the second generation to run the Bodega Espanola.</p>
                    </div>
                    <p className='main-story'>
                        The midday rush is over, and the bodega’s host finally joins me and Christian Schwarz, the photographer who has made a kind of ‘family album’, as he calls it, about the restaurant. It is a photo book about the long history of his local bar and hundreds of its guests – he also provided the photos for this article. We had planned the meeting in advance, but I could have almost as easily left it to chance, because Winistörfer often comes to sit and chat to his guests. He praises them in the highest terms, telling me that the bodega has a huge number of interesting visitors and a very international clientèle: ‘And they are the ones who make this place what it is. We just provide the platform.’ Christian Schwarz intervenes: ‘But the host is important too! If you don’t like whoever runs the place, you’re not going to go back.’
                        Winistörfer doesn’t contradict him, but adds: ‘We simply have to be happy in the job; to enjoy being a host.’
                    </p>
                    <div className='image-double-container-ls'>
                        <div className='image img-2' />
                        <div className='image img-3' />
                    </div>
                    <p className='main-story'>
                    Schwarz’s book, which we keep flipping through during our conversation, also focuses on the guests. It shows large groups at large round tables; people who have known each other for a long time or, as Winistörfer and Schwarz explain, have just happened to meet each other for the first time that day. Most of the bodega is full of these large tables, some round and some square.
                    </p>
                    <p className='main-story'>
                        With a smile playing on his lips, Winistörfer tells another little story: ‘We once had some Americans who asked if they could take photos. They loved the large tables. They’re developing a new concept in America – it's called 'talking tables'. We’ve been doing that here for 140 years.’
                    </p>
                    <div className='block-quote'>
                        <p className='quote'>
                            ‘They’re developing a new concept in America – it's called 'talking tables'. We’ve been doing that here for 140 years.’
                        </p>
                        <div className='horizontal-line'/>
                        <p className='quote-credit'>Eric Winistörfer, host</p>
                    </div>
                    
                    <p className='main-story'>
                        There is another important ingredient that makes the bodega what it is: ‘It doesn't matter here who you are or what you have,’ says Schwarz. It sounds like a bit of a cliché, but Winistörfer has a story to back it up:
                    </p>
                    <p className='main-story'>
                        ‘We once had two punks come in, with such incredible hairstyles. They sat at a table with two older men, I think they were former pilots. I went to sit with them and didn’t want to leave because I thought the discussions were going to escalate. But everything went well – so well that they finally shook hands and said, “Thanks a lot, until next time!”. They had agreed to meet again.’
                    </p>
                    <div className='image-double-container-square'>
                        <div className='image img-4' />
                        <div className='image img-5' />
                    </div>
                    <div className='image-double-container-square'>
                        <div className='image img-6' />
                        <div className='image img-7' />
                    </div>
                    <p className='main-story'>
                        The mix of customers in the bodega is really something special. Winistörfer describes the Russians who come to eat with them and occasionally order food for their flight out of Zurich in their private jet, which the stewardesses come to pick up. Schwarz mentions the homeless man who is equally welcome and drops by every day to arrange the newspapers and receive a little something in return, and who sometimes gets a little extra from other regulars who know him.
                    </p>
                    <p className='main-story'>
                        Many celebrities also come regularly to the bodega, though Winistörfer doesn’t want to mention names: ‘I think they appreciate the fact that they’re treated normally here and their arrival doesn’t attract much attention.’ He’ll only give this much away: the bodega’s guests include national celebrities and international rock, sports and entertainment superstars – one of the latter can be found in the pictures. It’s typical of the bodega that in Schwarz’s book, like in Winistörfer’s conversation, they're only a footnote.
                    </p>
                    <p className='main-story'>
                        This is how Winistörfer sees it: whether Hollywood stars or amateur actors, the bodega provides a stage for all kinds of stories to play out. And why here? Besides the hospitality and openness, the most important reason may be that nothing here has changed. The broad outlines of the Bodega wine shop and restaurant’s more than 140-year history are easy to recite: founded by the Catalan family Gorgot in 1874, it was taken on by the Zurich family Winistörfer in the 50s. It was first run by the father, then the son. Neither of them changed the concept of hospitality and good, authentic Spanish food. Simple.
                    </p>
                    <p className='main-story'>
                        Of course, we can’t forget the scenery: the bodega provides an incredible backdrop. The interior has only been lightly renovated over the years; thanks to Eric Winistörfer’s father getting the building listed, they didn’t have to make any modifications that would have altered the character of the restaurant.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-8' />
                    </div>
                    <div className='block-quote'>
                        <p className='quote'>
                        There are no frills, no fusion-culinary self-realisation, no lifestyle fads – just real Spanish dishes.
                        </p>
                        <div className='horizontal-line'/>
                    </div>
                    <p className='main-story'>
                        And last but certainly not least is what you get on the table. The tapas served in the bodega is simply incredible. And it’s affordable: at lunchtime, for example, you can get the Ración, a selection of dishes that vary daily and you can choose from for only CHF 14.50. Here, too, Winistörfer focuses on honesty and authenticity. There are no frills, no fusion-culinary self-realisation, no lifestyle fads, but simply real Spanish dishes prepared and served by employees from Spain and Portugal, with fresh and – without needing to declare it – often organically produced ingredients. Some come from their own farm near Lake Walen, where the Winistörfers breed sheep and plant herbs and lettuce.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-9'></div>
                        <div className='text-overlap'>
                            <p>
                                And in case all these reasons are still not enough for a visit to Bodega Española, here’s one last anecdote from Winistörfer: ‘The bodega plays host to hundreds of wedding anniversaries every year.’ And why here? ‘Because this is where the couples met.’
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
  }