// ProgressBar.js
import React from 'react';
import './ProgressBar.css'; // Assure-toi que le chemin vers le fichier CSS est correct

const ProgressBar = ({ label, value, max }) => {
  return (
    <div className="progress-bar-container">
      <label className="progress-label">{label}:</label>
      <div className="progress-bar-background">
        <div className="progress-bar-fill" style={{ width: `${(value / 100) * 100}%` }}>
          <span className="progress-value">{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
