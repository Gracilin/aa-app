import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
  <section id="home">
    <div className="homepage">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="welcome">Welcome to My Portfolio</h1>
        <h2 className="name">I'm Gracilin</h2>
      </div>
    </div>
    </section>
  );
};

export default HomePage;