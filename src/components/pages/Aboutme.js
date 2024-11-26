import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Aboutme() {
  
    return (
      
      <div className="aboutme">
        <h1>About Me</h1>
        <p>This is the About Me page!</p>
        <Footer /> {/* Footer is added here */}
      </div>
    );
  }
  
  export default Aboutme;