import React from 'react';
import '../App.css';
import './HeroSection.css';
import coffeeVideo from '../assets/Coffee.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={coffeeVideo} autoPlay loop muted />
            
            <div className='hero-text'>
            <h2> award-winning wines, high-quality coffee, small plates and pastries </h2>
            </div>
            
           
           
            
        </div>
    )
}

export default HeroSection