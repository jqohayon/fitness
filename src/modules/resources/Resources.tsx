import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../GoogleDocViewer.css';
import { FaBook } from 'react-icons/fa';
import './Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="doc-container">
<<<<<<< HEAD
      <h2>Resources</h2>
=======
      <h2 style={{ color: '#6a1b9a' }}>Resources</h2>
>>>>>>> main
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBook 
          style={{ 
            fontSize: '2.5rem',
<<<<<<< HEAD
            color: '#ffffff',
=======
            color: '#6a1b9a',
>>>>>>> main
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
<<<<<<< HEAD
          color: '#ffffff',
=======
          color: '#9d6be7',
>>>>>>> main
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Essential tools and knowledge for your fitness journey.</p>
      </div>
<<<<<<< HEAD
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
=======
      <div className="content-section" style={{ background: 'rgba(106, 27, 154, 0.1)' }}>
        <div className="emphasis-box" style={{ borderLeft: '4px solid #6a1b9a' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Learning Resources</h4>
          <ul style={{ color: '#9d6be7' }}>
            <li><strong style={{ color: '#6a1b9a' }}>Books:</strong> Essential reading for fitness knowledge.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Articles:</strong> Latest research and fitness trends.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Videos:</strong> Visual guides and tutorials.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Apps:</strong> Digital tools for tracking and planning.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Courses:</strong> Structured learning programs.</li>
            <li><strong style={{ color: '#6a1b9a' }}>Communities:</strong> Support and motivation networks.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem', color: '#6a1b9a' }}>Resource Categories</h4>
            <div style={{ 
              fontSize: '1.1em', 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              color: '#9d6be7'
            }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <span className="resource-focus-item">Books</span>
                <span className="resource-focus-item">Articles</span>
                <span className="resource-focus-item">Videos</span>
                <span className="resource-focus-item">Apps</span>
              </div>
              <span className="resource-focus-item">Courses</span>
              <span className="resource-focus-item">Communities</span>
              <span className="resource-focus-item">Research</span>
              <span className="resource-focus-item">Tools</span>
            </div>
          </div>
        </section>
>>>>>>> main
      </div>
    </div>
  );
};

export default Resources; 