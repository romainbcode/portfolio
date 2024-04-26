// pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects'; // Assure-toi que le chemin est correct
import Ratings from '../components/Ratings/Ratings';
import Languages from '../components/Languages/Languages'

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} style={{ width: '100%' }} />
      <p>{project.description}</p>
      <div>
        <h3>Langages Utilisés:</h3>
        <Languages languages={project.languages} />
      </div>
      <div>
        <h3>Évaluations:</h3>
        <Ratings ratings={project.ratings} />
      </div>
      <div>
        <h3>Détails Supplémentaires:</h3>
        {project.texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
