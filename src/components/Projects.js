// Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Bone fracture detection',
    description: 'The project aims to develop a system that uses machine learning algorithms to analyze medical images (like X-rays) for detecting bone fractures. It also features a chatbot interface that allows users to interact with the system. The chatbot can guide users through the process of submitting images, provide preliminary analysis results, and answer questions about fractures and treatment options.',
    link: 'https://project1.com',
    image: '/p1.png'
  },
  {
    title: 'Cardiovascular Diseases Risk Prediction',
    description: 'This project aims to develop a predictive model that can assess the risk of cardiovascular diseases (CVD) using machine learning techniques. The model will analyze key health data such as age, blood pressure, cholesterol levels, and lifestyle factors to predict the likelihood of developing CVD.',
    link: 'https://project2.com',
    image: '/project3.jpeg'
  },
  {
    title: 'AI INSIGHT',
    description: 'AI Insight is a project that employs machine learning algorithms to estimate distances from various data inputs. The system analyzes the data to provide accurate distance measurements and responds with voice output, making it user-friendly and accessible. This innovative approach enhances interaction by allowing users to receive information verbally.',
    link: 'https://project3.com',
    image: '/p3.jpg'
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-background">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
