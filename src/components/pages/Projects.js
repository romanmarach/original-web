import React from 'react';
import '../../App.css'
import ProjectCarousel from '../ProjectCarousel';
import '../Projects.css';


function Projects() {
    return (
      <div className="projects-page">
        <h1>My Projects</h1>
        <ProjectCarousel />
        
      </div>
    );
  }
  
  export default Projects;