import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import coffePic from '../assets/Coffee.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1> Check out our product! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src ={coffePic}
                text='Lkajsdasiduhaisudhiasuhdiaushdiuahsiduh'
                label='Coffee'
                path ='/menu'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
