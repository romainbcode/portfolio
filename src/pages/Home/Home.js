import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Home.css'; // Assure-toi que le chemin est correct
import projects from '../../data/projects';

const Home = () => {
  
  return (
    <div className="home">
      <h2>Projets Réalisés</h2>
      <div className="project-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
