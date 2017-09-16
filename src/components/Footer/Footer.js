import React from "react";
import { Link } from 'react-router-dom';

export default function Footer ( ){
    return (
        <div className='footer'>
            <div className='social'>
                <p className='social-description'>Share your discoveries with us – use #hellozurich to be featured</p>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/hellozurich.ch'>
                        <i className='fa fa-facebook'></i>
                    </a>
                    <a href='https://www.instagram.com/hellozurich.ch'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://twitter.com/hellozurich_ch'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
            </div>
            <div className='clone-disclaimer'>
                <p>This site is a clone of hellozurich.ch built for practice by Charles Murphy.</p>
                <a href='https://www.hellozurich.ch/en/'>Visit the HelloZurich Site</a>
            </div>
            <div className='site-links'>
            <div><a href='https://www.hellozurich.ch/en/about-us'>About HelloZurich</a></div>
            <div><a href='https://www.hellozurich.ch/en/contact'>Contact HelloZurich</a></div>
            <div><a href='https://wwww.hellozurich.ch/en/'>HelloZurich Imprint</a></div>
            </div>

        </div>
    );
    
  }