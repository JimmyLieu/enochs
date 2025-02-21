import React from 'react';
import './Cards.css';
import coffeeImage from '../assets/Coffee.jpg';  // You'll need to add these images
import wineImage from '../assets/Wine.webp';
import foodImage from '../assets/Food.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Discover Our Offerings</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <div className='card'>
                            <div className='card__image-wrapper'>
                                <img src={coffeeImage} alt='Coffee' className='card__image' />
                            </div>
                            <div className='card__content'>
                                <h2>Artisanal Coffee</h2>
                                <p>Experience our carefully sourced and expertly roasted coffee beans, 
                                   crafted into the perfect cup by our skilled baristas.</p>
                                <div className='card__highlights'>
                                    <span>Single Origin</span>
                                    <span>House Blends</span>
                                    <span>Pour Over</span>
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card__image-wrapper'>
                            <img src={wineImage} alt='Wine' className='card__image' />
                            </div>
                            <div className='card__content'>
                                <h2>Curated Wines</h2>
                                <p>Discover our award-winning selection of wines from around the world, 
                                   perfectly paired with our menu offerings.</p>
                                <div className='card__highlights'>
                                    <span>Red</span>
                                    <span>White</span>
                                    <span>Sparkling</span>
                                </div>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='card__image-wrapper'>
                            <img src={foodImage} alt='Food' className='card__image' />
                            </div>
                            <div className='card__content'>
                                <h2>Gourmet Plates</h2>
                                <p>Savor our selection of artisanal small plates and freshly baked pastries, 
                                   made daily with premium ingredients.</p>
                                <div className='card__highlights'>
                                    <span>Small Plates</span>
                                    <span>Pastries</span>
                                    <span>Desserts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;