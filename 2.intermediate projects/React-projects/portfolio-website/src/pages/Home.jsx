import React from 'react';
import { Link } from 'react-router-dom';

let name = "Richard"

let Specialization = "Write about your Specialization"
const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <h2>Hi, I'm {name}</h2>
        <p>I'm a web developer specializing in <b>{Specialization}.</b></p>
      </main>
    </div>
  );
};

export default Home;
