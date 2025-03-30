import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { FaBook } from 'react-icons/fa';
import './Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Resources</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBook 
          style={{ 
            fontSize: '2.5rem',
            color: '#ffffff',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Essential tools and knowledge for your fitness journey.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Recommended Books</h4>
          <ul>
            <li><strong>Starting Strength:</strong> Basic Barbell Training</li>
            <li><strong>Bigger Leaner Stronger:</strong> The Simple Science of Building the Ultimate Male Body</li>
            <li><strong>Thinner Leaner Stronger:</strong> The Simple Science of Building the Ultimate Female Body</li>
            <li><strong>Precision Nutrition:</strong> The Science of Nutrition</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Online Resources</h4>
          <ul>
            <li><strong>YouTube Channels:</strong> Athlean-X, Jeff Nippard, Renaissance Periodization</li>
            <li><strong>Websites:</strong> Stronger by Science, Examine.com, Precision Nutrition</li>
            <li><strong>Apps:</strong> MyFitnessPal, Strong, Fitbod</li>
            <li><strong>Podcasts:</strong> Mind Pump, Renaissance Periodization, Stronger by Science</li>
          </ul>
        </div>
        <div className="emphasis-box">
          <h4>Tools & Calculators</h4>
          <ul>
            <li><strong>TDEE Calculator:</strong> Calculate your daily energy needs</li>
            <li><strong>Macro Calculator:</strong> Determine your optimal macronutrient split</li>
            <li><strong>1RM Calculator:</strong> Estimate your one-rep maximum</li>
            <li><strong>Progress Tracking:</strong> Monitor your fitness journey</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources; 