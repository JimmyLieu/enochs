import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./' autoPlay loop muted />
            console.log(test)
            <h1> TEST MESSAGE </h1>
            <p> TESTERRRRR</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>MENU</Button>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>MENU 2</Button>
            </div>
            
        </div>
    )
}

export default HeroSection