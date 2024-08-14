import { Link } from 'react-router-dom';
import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <header>
        <h1>My Projects</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      
      <main>
        <ul>
          <li>
            <h2>Project 1</h2>
            <p>Description of project 1....</p>
          </li>
          <li>
            <h2>Project 2</h2>
            <p>Description of project 2....</p>
          </li>
          {/* Add more projects here and play around with the code */}
        </ul>
      </main>
    </div>
  );
};

export default Projects;
