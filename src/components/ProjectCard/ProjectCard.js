import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';  // Assure-toi que le chemin vers le fichier CSS est correct

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <Link to={`/project/${project.id}`} className="more-info-link">En savoir plus</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
