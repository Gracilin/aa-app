// About.js
import React from 'react';
import './About.css';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="aboutme">
        <div className="content">
          <img src='/profile.png' alt="Gracilin" className="profile-photo" /> 
          <h1>About Me</h1>
          <p>
            Hi! I’m Gracilin, a passionate web developer with a love for creating
            dynamic and responsive websites. I have experience in various technologies 
            including HTML, CSS, JavaScript, and React. I enjoy collaborating on projects 
            that challenge me to grow and expand my skills. In my free time, I love 
            exploring new tech trends, reading, and hiking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

