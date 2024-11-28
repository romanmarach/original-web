import React from 'react';
import './ProjectCard.css';

function ProjectCard({ id, title, description, image }) {
  return (
    <div className="project-card" id={id}>
      <img src={image} alt={title} className="project-card__image" />
      <div className="project-card__content">
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;