import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class BackereiVohdin extends Component {
    constructor(){
        super()
        this.state={
            storyName:'backereivohdin',
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
            <div className='backerei-vohdin'>
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
                        <h3 className='header-title'>Bäckerei Vohdin</h3>
                        <p className='header-blurb'>
                            Elvira and Urs Vohdin run what may be the smallest and oldest bakery in Zurich.
                        </p>
                    </div>   
                    <div className='credit'>
                        <p>Text: Stefanie Rigutto Photos: Basil Stücheli</p>
                    </div>
                    <h4 className='intro'>
                        If any shop in Zurich’s old town can be described as an institution, then it’s the Vohdin bakery. The ovens have been going at Oberdorfstrasse 12 since 1626 (!). Elvira and Urs Vohdin sell perhaps the most delicate amaretti in Switzerland – and in only 4.3 square metres of shop space.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'> 
                        In the first few years that I lived in the old town, I was always walking past Vohdin. All you can see of the bakery from the outside is a tiny window, but inside, the baked goods tower up to the ceiling. This is Elvira Vohdin’s tiny kingdom. At 5:40 am every morning, she fills the shelves with fresh bread, drapes the pretzels and slices the pastries. At 7:30 am, she opens the shop. The 52-year-old, dressed in an elegant traditional Swiss outfit with lace, greets most of the customers by name as she wraps apple doughnuts in wafer-thin paper and hands the change back through the tiny window.
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-1' />
                        <div className='image img-2' />
                    </div>
                    <p className='main-story'>
                        Her husband Urs Vohdin is hard at work back in the bakehouse. He is 55 years old, has his long white hair tied back in a ponytail, and wears chequered baker’s trousers and Birkenstocks. Country music seeps out of his iPod. He is just in the process of baking his famous pretzels – made to an ancestral recipe – in the stone oven dating back to 1945. The Japanese broadcaster Nippon TV reported on them a few years ago. ‘After that, we had huge numbers of Japanese customers who wanted to try our pretzels,’ laughs Urs.
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-3' />
                    </div>
                    <p className='main-story'>
                        The couple ask to be interviewed in their apartment on the first floor. The house is owned by the family; Urs’s mother lives above them. Gugelhupf pans in various sizes hang alongside the staircase. ‘They came from my father-in-law,’ says Elvira, leading the way into the kitchen, where fresh apple doughnuts await: wafer-thin pastry, grated apples, sultanas and a hint of cinnamon – poetry on a plate. Urs Vohdin’s great-grandfather, who was born in Germany, actually wanted to emigrate to America, but he was told that there was also work for skilled bakers in Switzerland. He came to Zurich, fell in love with a local, and bought the bakery on Oberdorfstrasse in 1895. In 1926, Urs Vohdin’s grandfather took over the business, and 37 years later it passed to Urs’s parents.
                    </p>
                    <div className='image-double-container-ls'>
                        <div className='image img-4' />
                        <div className='image img-5' />
                    </div>
                    <p className='main-story'>
                        Urs relates how, as a three-year-old, he announced that he wanted to become a baker. Baking was always part of his life. As a child, he helped his father in the bakery: topping the pastries, carrying the bread into the shop, shaping Grittibänz figures and cutting out Christmas treats. In 1990, he and Elvira took over the business from his father. Since then, Urs Vohdin arrives in the bakery every day at 3:30 am, even 2:30 am on Fridays, because he needs to braid the plait-shaped Zopf bread. Breakfast is at 9:30 am, before it’s back into the bakery. A 15-hour day is normal for Urs Vohdin. And what do they do to take a break? ‘We like to travel,’ they say. Their last trip was to Fuerteventura, the one before that to Australia.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-6'></div>
                        <div className='text-overlap'>
                            <p>
                                Their biggest motivation, however, is their customers’ compliments. ‘When we’re sold out by the evening,’ says Elvira, ‘that makes us very happy. And it means that we’ve calculated well and don’t have to throw anything away.’ Urs adds: ‘Like when the children come at midday and eat absolutely everything.’ He laughs and bites into an amaretto that he baked fresh that morning. Now, the only thing left to ask is: what is the secret of the amaretti? Why do some of their customers travel specially from all over Switzerland to buy them?’ Urs Vohdin only grins in reply. His wife says: ‘Because we bake them with love.’
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }