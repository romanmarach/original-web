import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscriotion'>
        {/* <p className='footer-subscription-heading'>
            Thank you for stopping by
        </p> */}
        <p className='footer-subscription-text'>
            
        </p>
        <div className='input-area'>
            <form>
                <input type='email' 
                name='email' 
                placeholder='Your Email'
                />
            <Button buttonStyle='btn--outline'>Send Email</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                
                <Link to='/sign-up'>how it works</Link>
                <Link to='/'>About</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
