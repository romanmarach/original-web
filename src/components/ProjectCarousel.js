import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCarousel.css';


const projectData = [
  {
    id: 'instagram-bot',
    title: 'Instagram Bot',
    description: 'Created and implemented an Instagram automation bot with versatile functionality. Utilized Selenium to efficiently navigate the web browser and interact with the Document Object Model (DOM) to execute various tasks on Instagram. The bot allows for seamless automation of likes, follows, comments, and more. Integrated advanced web technologies to interact with the DOM, allowing for flexible user interaction and customization. The bot demonstrates strong API interaction and data processing capabilities.',
    image: '/igBotIcon2.webp',
  },
  {
    id: 'stock-prediction',
    title: 'Stock Prediction Regression Model',
    description: 'My LSTM (Long Short-Term Memory) model is a neural network designed to predict stock prices based on historical data. It uses a time-series dataset of stock prices, scaled between 0 and 1, with a lookback period of 60 data points to capture sequential patterns. The model architecture includes two stacked LSTM layers, followed by dense layers to process and output a single prediction. The model is trained using the Adam optimizer and mean squared error as the loss function, with predictions rescaled back to the original price range for interpretation. While the model performs well on training and test data, it exhibits some bias in recent predictions, likely due to systematic errors or overfitting to older trends. Adjustments, such as residual bias correction, are applied to improve accuracy, especially for near-term forecasting.',
    image: '/stonks.jpg',
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    description: 'Classic Snake game implemented in Python where the player controls a growing snake to collect food while avoiding collisions with itself and the walls.',
    image: '/snakeGame.webp',
  },
  {
    id: 'matrix',
    title: 'Project currently being built',
    description: '....',
    image: '/matrix.webp',
  },
];

function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically set the correct project based on the URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', ''); // Remove '#' to get the id
    const projectIndex = projectData.findIndex((project) => project.id === hash);

    if (projectIndex !== -1) {
      setCurrentIndex(projectIndex); // Set the carousel to the matching project
    }
  }, []); // Runs once when the component mounts

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
        id={projectData[currentIndex].id}
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
