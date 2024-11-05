import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import coffeeVideo from '../assets/Coffee.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={coffeeVideo} autoPlay loop muted />
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    MENU
                    </Button>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>MENU 2</Button>
            </div>
            <div className='hero-text'>
            <h2> award-winning wines, high-quality coffee, small plates and pastries </h2>
            </div>
            
           
           
            
        </div>
    )
}

export default HeroSection