import React from 'react';
import { FaDumbbell, FaChartLine, FaUsers, FaBrain } from 'react-icons/fa';

const Strength: React.FC = () => {
  return (
    <div className="content-section">
      <h2 className="title">Strength Training</h2>
      <div className="intro-text">
        Discover the fundamentals of strength training and how to build a strong, resilient body.
      </div>

      <div className="emphasis-box">
        <h4><FaDumbbell className="section-icon" /> Core Principles</h4>
        <ul>
          <li>Progressive Overload</li>
          <li>Proper Form and Technique</li>
          <li>Rest and Recovery</li>
          <li>Compound Movements</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaChartLine className="section-icon" /> Training Programs</h4>
        <ul>
          <li>Beginner's Foundation</li>
          <li>Intermediate Progression</li>
          <li>Advanced Techniques</li>
          <li>Specialized Programs</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaUsers className="section-icon" /> Community Support</h4>
        <ul>
          <li>Form Check Resources</li>
          <li>Training Partners Network</li>
          <li>Progress Tracking Tools</li>
          <li>Expert Guidance</li>
        </ul>
      </div>

      <div className="emphasis-box">
        <h4><FaBrain className="section-icon" /> Mental Strength</h4>
        <ul>
          <li>Goal Setting</li>
          <li>Motivation Techniques</li>
          <li>Overcoming Plateaus</li>
          <li>Building Discipline</li>
        </ul>
      </div>
    </div>
  );
};

export default Strength; 