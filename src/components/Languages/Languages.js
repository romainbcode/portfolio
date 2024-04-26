// Languages.js
import React from 'react';
import './Languages.css'; // Assure-toi que le chemin vers le fichier CSS est correct

const Languages = ({ languages }) => {
  return (
    <div className="languages-container">
      {languages.map((language, index) => (
        <div key={index} className="language">
          <img src={language.url} alt={language.name} className="language-icon" />
          <span className="language-name">{language.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Languages;
