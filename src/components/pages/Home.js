import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

    function Home () {
        return (    
            <>
            <HeroSection />
            <div id="cards-section">
            <Cards />
            </div>
            <Footer />
            </>
        )
        
    }

    export default Home;