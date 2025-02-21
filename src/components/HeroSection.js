import React, { useEffect, useState } from 'react';
import '../App.css';
import './HeroSection.css';
import coffeeVideo from '../assets/Coffee.mp4';
import { Link } from 'react-router-dom';

function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='hero-container'>
            <video src={coffeeVideo} autoPlay loop muted playsInline />
            
            <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
                <h1 className='hero-title'>Welcome to Enoch's!</h1>
                <div className='hero-text'>
                    <h2>Crafting Moments of</h2>
                    <div className='rotating-text'>
                        <span>Excellence</span>
                        <span>Passion</span>
                        <span>Artistry</span>
                    </div>
                </div>
                
                <p className='hero-description'>
                    Award-winning wines • Artisanal coffee • Gourmet plates • Fresh pastries
                </p>
                <div className='hero-cta'>
                    <Link to="/menu">
                        <button className='btn-primary'>View Menu</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;