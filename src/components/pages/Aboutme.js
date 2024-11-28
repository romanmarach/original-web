import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Aboutme() {
  
    return (
        <>
            <div className="about-me-section">
                <div className="content">
                    <h1>Hi, I'm Roman Marach – A Developer with a Passion for People and Code </h1>
                    <br></br>
                    <p>
                    <strong>Introduction:</strong> I’m Roman Marach, a software developer driven by curiosity, connection, and creativity. When I’m not deep in code, you’ll likely find me reading a book, meeting fascinating people, and playing sports. I’m passionate about traveling and developing software that makes an impact, and as a people person, I thrive on building meaningful relationships both in and out of the workplace. 
                    </p>
                    <p>
                    <strong>Mission:</strong> Inspired by Charles Koch’s idea of the virtuous cycle of mutual benefit, my mission is to contribute to the success of the companies I work with by delivering my absolute best. In turn, I aim to learn, grow, and leave a meaningful impact in every role I take on. I believe in creating win-win scenarios where collaboration, innovation, and hard work drive excellence.
                    </p>
                    <p>
                    <strong>What I do:</strong> I bring my passion for software development to life through various personal coding projects, constantly exploring new ideas and honing my skills. My experience spans multiple programming languages, and I enjoy diving into the latest technologies to push the boundaries of what’s possible.
                    </p>
                    <a href="#contact" className="contact-button">Contact me</a>
                </div>
                <div className="image">
                    <img src="/self.jpg" alt="About me" />

                    <div className="social-media-icons">
                    <a href="https://www.instagram.com/rvasylevych/" target="_blank" className="icon facebook" aria-label="Facebook">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/roman-marach-96210b208/" target="_blank" className="icon linkedin" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com" target="_blank" className="icon github" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                </div>
            </div>
            <Footer /> {/* Footer remains here */}
        </>
    );
  }
  
  export default Aboutme;