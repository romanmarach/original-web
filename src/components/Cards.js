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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/aboutme'
            />
            <CardItem
              src='bali1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='matrix.webp'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/aboutme'
            />
            <CardItem
              src='bg1.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='projects'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
