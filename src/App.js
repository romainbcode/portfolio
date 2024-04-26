import React from 'react';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail';
import OtherProjects from './pages/OtherProjects';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/other-projects" element={<OtherProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
