import React from 'react';
import '../GoogleDocViewer.css';
import { FaFlag } from 'react-icons/fa';

const Goals: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Fitness Goals</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaFlag 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Set, track, and achieve your fitness aspirations.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Goal Setting</h4>
          <ul>
            <li><strong>SMART Goals:</strong> Specific, Measurable, Achievable, Relevant, Time-bound.</li>
            <li><strong>Progress Tracking:</strong> Monitor and celebrate your achievements.</li>
            <li><strong>Adaptability:</strong> Adjust goals based on progress and feedback.</li>
            <li><strong>Accountability:</strong> Stay committed to your fitness journey.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Goal Categories</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>Strength Goals</span>
              <span>Weight Goals</span>
              <span>Performance</span>
              <span>Endurance</span>
              <span>Flexibility</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Goals; 