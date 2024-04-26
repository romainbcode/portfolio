import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import "./Ratings.css"

const Ratings = ({ ratings }) => {
  return (
    <div className="ratings-container">
      {Object.keys(ratings).map((key) => (
        <ProgressBar key={key} label={formatLabel(key)} value={ratings[key]}/>
      ))}
    </div>
  );
};

const formatLabel = (label) => {
  switch(label) {
    case 'functionality':
      return 'Fonctionnalité';
    case 'ergonomics':
      return 'Ergonomie';
    case 'codeQuality':
      return 'Qualité du Code';
    case 'design':
      return 'Design';
    default:
      return label.charAt(0).toUpperCase() + label.slice(1);
  }
}

export default Ratings;
