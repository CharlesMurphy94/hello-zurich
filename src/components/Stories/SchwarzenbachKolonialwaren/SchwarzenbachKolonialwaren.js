import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class Schwarzenbachkolonialwaren extends Component {
    constructor(){
        super()
        this.state={
            storyName:'schwarzenbachkolonialwaren',
            activePic:0,
        }
    
    }

    handleLeft = (change) => {
        if(this.state.activePic > 0) {
            console.log('minus')
            this.setState({activePic: this.state.activePic - 1})
        } else{
            console.log('to last')
            this.setState({activePic: 9})
        }
    }
    handleRight = (change) => {
        if (this.state.activePic < 9) {
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
            <div className='schwarzenbach-kolonialwaren'>
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
                            <div className={this.state.activePic===9?'black-dot':'blue-dot'} value={9} onClick={()=>this.handleSelect(9)}/>

                            
                        </div>
                    </div>
                </div>
                <div className='story-body'>
                    <div className='page-header'>
                        <h3 className='header-title'>Schwarzenbach Kolonialwaren</h3>
                        <p className='header-blurb'>
                            A visit to Heini Schwarzenbach, who is the fifth generation of his family to run the speciality shop.
                        </p>
                    </div>   
                    <div className='credit'>
                        <p>Text: Nora Zukker Photos: Basil Stücheli</p>
                    </div>
                    <h4 className='intro'>
                    A journey from Africa to East Asia in the Schwarzenbach speciality shop. Heini Schwarzenbach tells me how his shop plays off its customers’ childhood memories.
                    </h4>
                    <div className='toMap'>
                        <h4>Go to details and map</h4>
                    </div>
                    <p className='main-story'>
                    ‘You’d better appreciate those Iranian mulberries!’ I want to shout after the customer heading out of the Schwarzenbach shop onto Münstergasse. But he obviously does – the customer is between 45 and 70 years old, and happily pays CHF 45 for 100 g of the exquisite Japanese green tea Gyokuro. Oh, and he’s run out of Fleur de Sel, so 150 g of Fleur de Sel Ibiza as well, please. Exactly – the one in the turquoise ceramic pot for CHF 18.
                    It’s incredible. ‘Many young people buy from us. And they are the ones I rely on, because otherwise my customer base will die off,’ explains Schwarzenbach, who has been running the family business – now in its fifth generation – for thirty years.
                    </p>
                    <div className='image-center-container'>
                        <div className='image img-1' />
                    </div>
                    <div className='image-double-container-ls'>
                        <div className='image img-2' />
                        <div className='image img-3' />
                    </div>
                    <p className='main-story'>
                    Of course, you don't come here to do your daily shopping. This is where you pick up specialities: saffron threads, a coffee blend from the in-house roastery, or the mini fennel made of marzipan (which is incidentally a hit at any child’s birthday!). The colonies are no more, but the shop’s name of Kolonialwaren (colonial goods shop) is still the best fit. The dried fruit, tea and spices will transport you from Africa through to East Asia. There’s no fresh fruit to be found at Schwarzenbach; everything is fermented and dried. It’s worth visiting just to see all of the goods on display.
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-4' />
                        <div className='image img-5' />
                    </div>
                    <div className='image-double-container-ls'>
                        <div className='image img-6' />
                        <div className='image img-7' />
                    </div>
                    <p className='main-story'>
                    ‘We used to have 25 kinds of flour, but the big distributors never rest!’ and so Heini Schwarzenbach has cut his flour selection down to a manageable size. As a customer, I wouldn’t have noticed the adjustments to the range. Quite the opposite – I came here as a little girl with my father and even then admired the marzipan fennel (don’t worry, it probably wasn’t the same piece!).
                    </p>
                    <div className='image-double-container'>
                        <div className='image img-8' />
                    </div>
                    <p className='main-story'>
                    Anyone who came here as a child comes back as an adult, says Schwarzenbach. And it’s just as wonderful: the mulberries still come in the same white paper bag. Even as a young girl, I knew that the delicacies placed in those bags were not to be wolfed down; and now, as an adult, I still pick out every single mulberry with the same reverence.
                    Heini Schwarzenbach would be happiest if nothing changed. He relies on tradition and consistency, and his customers’ childhood memories. Self-service here is unthinkable – the advice is sometimes the best part of the whole shop. The sales people know every product down to its individual ingredients. The advice is part of the culture, though only when you keep things fair and buy something at the end.
                    </p>
                    <div className='overlap'>
                        <div className='image-overlap img-9'></div>
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