// Skills.js
import React from "react";
import './Skills.css'; // Import CSS file

const skillsData = [
  { name: "JavaScript", rating: 3 },
  { name: "React", rating: 4 },
  { name: "HTML/CSS", rating: 5 },
  { name: "ML", rating: 5 },
  { name: "Git", rating: 4 },
  { name: "Problem Solving", rating: 5 },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < skill.rating ? "filled" : ""}`}>&#9733;</span> // Unicode for star
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
