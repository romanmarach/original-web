
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import React, { useState } from 'react';

function Messageme() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <>
        <div className="message-container">
          <button className="email-button" onClick={openModal}>
            Email Me
          </button>
        </div>
  
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h2>Send Me an Email</h2>
              <form>
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message..." required></textarea>
                
                <button type="submit" className="send-button">Send</button>
                <button type="button" className="close-button" onClick={closeModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default Messageme;