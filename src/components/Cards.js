import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Overview of my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='instagram.svg'
              text='Instagram Automation Bot'
              label='Adventure'
              path='/projects#instagram-bot'
            />
            <CardItem
              src='/stonks.jpg'
              text='LTSM stock prediction model'
              label='Luxury'
              path='/projects#stock-prediction'
            />
          </ul>
          <ul className='cards__items'>
            { <CardItem
              src='snakeGame.webp'
              text='Your childhood game'
              label='Mystery'
              path='/projects#snake-game'
            /> }
            <CardItem
              src='matrix.webp'
              text='Top secret project in the works...'
              label='Adventure'
              path='projects#matrix'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
