import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCarousel.css';

const projectData = [
  {
    title: 'Instagram Bot',
    description: 'Created and implemented an Instagram automation bot with versatile functionality. Utilized Selenium to efficiently navigate the web browser and interact with the Document Object Model (DOM) to execute various tasks on Instagram. The bot allows for seamless automation of likes, follows, comments, and more. Integrated advanced web technologies to interact with the DOM, allowing for flexible user interaction and customization. The bot demonstrates strong API interaction and data processing capabilities.',
    image: '/igBotIcon2.webp',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and styled-components.',
    image: '/images/portfolio.jpg',
  },
  {
    title: 'E-commerce App',
    description: 'A fully functional e-commerce app with payment integration.',
    image: '/images/ecommerce.jpg',
  },
];

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-carousel">
      <button className="arrow left-arrow" onClick={handlePrev}>
        &#8592; {/* Left arrow */}
      </button>
      <ProjectCard
        title={projectData[currentIndex].title}
        description={projectData[currentIndex].description}
        image={projectData[currentIndex].image}
      />
      <button className="arrow right-arrow" onClick={handleNext}>
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
}

export default ProjectCarousel;
