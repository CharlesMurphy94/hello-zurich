import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class PuntoItaliano extends Component {
    constructor(){
        super()
        this.state={
            storyName:'puntoitaliano',
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
            this.setState({activePic: 5})
        }
    }
    handleRight = (change) => {
        if (this.state.activePic < 5) {
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
            <div className='punto-italiano'>
                <div className='story-nav'>
                </div>
                <div className='story-slider'>
                    <div className='slider-image'>
                        <div className={this.state.storyName+this.state.activePic}>
                        </div>
                    </div>
                    <div className='left-arrow' value='--' onClick={this.handleLeft}>
                    </div>
                    <div className='right-arrow' value='++' onClick={this.handleRight}>
                    </div>
                    
                    <div className='slider-dot-container'>
                        <div className='slider-dots'>        
                            <div className={this.state.activePic===0?'black-dot':'blue-dot'} value={0} onClick={()=>this.handleSelect(0)}/>
                            <div className={this.state.activePic===1?'black-dot':'blue-dot'} value={1} onClick={()=>this.handleSelect(1)}/>
                            <div className={this.state.activePic===2?'black-dot':'blue-dot'} value={2} onClick={()=>this.handleSelect(2)}/>
                            <div className={this.state.activePic===3?'black-dot':'blue-dot'} value={3} onClick={()=>this.handleSelect(3)}/>
                            <div className={this.state.activePic===4?'black-dot':'blue-dot'} value={4} onClick={()=>this.handleSelect(4)}/>
                            <div className={this.state.activePic===5?'black-dot':'blue-dot'} value={5} onClick={()=>this.handleSelect(5)}/>
                            
                            
                        </div>
                    </div>
                    <div className='page-header'>
                        <h3 className='header-title'>Punto Italiano</h3>
                        <p className='header-blurb'>He invented nothing less than the panini. A visit to Vincenzo on Zähringerplatz.</p>
                    </div>

                </div>
                <div className='credit'>
                    <p>Text: Nora Zukker Photos: Basil Stücheli</p>
                </div>
                <h4 className='intro'>
                The Italian speciality shop Punto Italiano is not only the place to find the strongest espresso in the city for CHF 3, or a Birra Moretti for CHF 2.50; they also come with stories from Vincenzo’s life. He invented the panini, and has now shared his secrets with me.
                </h4>
                <div className='toMap'>
                    <h4>Go to details and map</h4>
                </div>
                <p className='main-story'>              
                As of today I can say that I know the creator of the panini. Vincenzo stands behind the slicer in his small shop, Punto Italiano, on Zähringerplatz. The TV is playing in the background, showing cyclists riding up Mount Etna during the Giro d’Italia. Vincenzo crosses his arms and looks critically at the screen, before turning to me and asking if I have heard of the woman who fell into the volcano. No, I have not! He tells me that twenty years ago, a Swiss woman climbed up Mount Etna for the perfect holiday photo. She leaned a little too far forward and fell into the crater. ‘She was simply cooked,’ says Vincenzo. He pauses and then adds: ‘She was on her honeymoon!’ I have to laugh out loud. Vincenzo has a real sense for the tragicomic.
                </p>
                <div className='image-center'></div>
                <div className='image-double'></div>
                <h3 className='subheader'>
                All of Italy served on a silver platter
                </h3>
                <p className='main-story'>
                Vincenzo continues to cut ham, salami and cheese, laying it out elegantly on three platters for an order which is immediately collected by a young woman. No sooner has she walked out of the shop than Vincenzo smiles at me proudly: ‘Do you know what she paid for that? 160 francs.’ Nowhere else will you find such fresh and inexpensive Italian specialities served on a silver platter. The glass display case is full of regional Italian meat and cheese specialities (it’s worth going past the shop around 11 am to take a look at the display case, before it’s sold out at 1 pm). The paninis, warm focaccia and piadina with coppa, ham, bresaola or vegetarian alternatives are available for an average of CHF 6.50.
                </p>
                <div className='image-center'></div>
                <p className='main-story'>
                The Vincenzo variations are called Diamante, Roma, Lanzada, San Daniele or Capri. I try to work out the meanings behind the names (all places in Italy). Vincenzo enjoys the sight of my forehead creasing in thought, until I finally ask if he will tell me how he came to those names. ‘Are you trying to spy on me?’ he asks, laughing, but can’t help but reveal his secret. Every panini is filled with a regional speciality. The Diamante has spicy salami, because Diamante, on the coast of Calabria, is home to the only pepperoncino museum in the world. It also holds the Pepperoncino Festival in the first week of September every year.
                </p>
                <div className='block-quote'>
                    <p className='quote'>
                    ‘Thirty years ago, I had the courage to put everything into bread. It was a whole new culture!’
                    </p>
                    <div className='horizontal-line'/>
                    <p className='quote-credit'>Vincenzo</p>
                </div>
                <p className='main-story'>
                It is thanks to Vincenzo that we all now eat round paninis. ‘Thirty years ago, I had the courage to put everything into bread. It was a whole new culture! Before that, you would put meat, cheese and tomatoes on a wooden board next to a bread basket,’ he explains proudly. To remind us that we used to all sit around the table while eating, Vincenzo invented the round bread loaf, to resemble a plate. The dough is of course also his own invention.
                </p>
                <div className='image-center'></div>
                <div className='image-double'></div>
                <h3 className='subheader'>
                Putting up a fight against the big chains
                </h3>
                <p className='main-story'>
                You can’t pay by card in Vincenzo’s shop. For him, it’s not worth the administrative effort of getting a card machine. While I’m in the shop, two men come in without any cash and I think to myself, they'll go off to Migros and buy their drinks there. But no, they apologise for not having any cash, go to the cash machine and come back into the shop beaming. ‘Loyal people are rare!’ laughs Vincenzo happily, as they pay CHF 2 per can for their Chinottos. Vincenzo has to rely on loyalty because his future is very uncertain.
                </p>
                <div className='image-overlap'></div>
                <div className='text-overlap'>
                    <p>
                    But he’s been in the city a long time – too long to be easily scared off by the big supermarket chains. There is too much tradition, history and emotion in his small shop (which has been going for 21 years!), where you can also buy wine or limoncello, or stylishly packaged Italian pasta. ‘That’s all just there for decoration! People only want my paninis,’ laughs Vincenzo. As a farewell, he offers me an espresso (brand: Caffè Giusto, imported from Campania). I can’t remember when I last had such a solid caffeine high. And it’s available for CHF 3 along with Vincenzo’s stories – a man who has lived enough to fill two lives.
                    </p>
                </div>



            </div>
        );
    }
  }