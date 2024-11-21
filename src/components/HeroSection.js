import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/v1.mp4" autoPlay loop muted />
      <h1>Roman Marach </h1>
      <h2>B.S. Computer Science | NJIT '25  </h2>
      {/* <div className='hero-btns'> */}
        {/* <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            LinkedIn
        </Button> */}

        {/* <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            Watch trailer <i className='far fa-play-circle' />
        </Button> */}

      <div className='image-fade'>
      {/* <img 
                 src='self2.jpg' 
                 className='testDiv'
              
                 /> */}
      </div>
      </div>
    // </div>
  )
}

export default HeroSection
