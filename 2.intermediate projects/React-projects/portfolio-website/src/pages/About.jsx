import React from 'react';
import { Link } from 'react-router-dom';
let name = "Richard";
const About = () => {
  return (
    <div className="about">
      <header>
        <h1>About Me</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          
        </nav>
      </header>
      
      <main>
        <p>
          Hi, I'm {name}. I am a [Your Profession] with experience in [Your Skills]. 
          I am passionate about [Your Passion]. 
        </p>
      </main>
    </div>
  );
};

export default About;
