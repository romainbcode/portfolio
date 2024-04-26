import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Mon Portfolio</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/other-projects">Autres Projets</Link>
      </nav>
    </header>
  );
};

export default Header;
